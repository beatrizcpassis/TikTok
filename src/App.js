import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosColletion = collection(db, "videos");
    const videosSnapshot = await getDocs(videosColletion);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}

        {/* <Video
        likes={0}
        messages={0}
        shares={0}
        name="beatrizcp"
        description="Meditação é importante"
        music="toque motivador"
        url="https://firebasestorage.googleapis.com/v0/b/jornadadevtr.appspot.com/o/WhatsApp%20Video%202023-03-29%20at%2020.04.52.mp4?alt=media&token=db4be029-27cc-4af9-b75d-3ce5fd1b1fe2"
        
        /> */}
      </div>
    </div>
  );
}

export default App;
