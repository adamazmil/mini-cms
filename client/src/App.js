import "./App.css";
import React, { useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  // const getVideos = async () => {
  //   await fetch("api/videos")
  //     .then((res) => res.json())
  //     .then((data) => setVideos(data));
  // };
  const [clickPlay, setClickPlay] = useState(false);
  const [clickFinish, setClickFinish] = useState(false);
  const [defaultVideo, setDefaultVideo] = useState([]);
  // const getDefaultVideoID = async () => {
  //   await fetch("api/default")
  //     .then((res) => res.file())
  //     .then((data) => setDefaultVideo(data));
  // };
  //Lists out json info of video
  const ListVideo = ({ id, title }) => (
    <li>
      {title} &mdash; {id}
    </li>
  );
  const ListVideos = ({ videos }) => (
    <ul>
      {videos.map((props) => (
        <ListVideo key={props.id} {...props} />
      ))}
    </ul>
  );
  const PlayDefaultVideo = (props) => {
    return (
      <div>
        <video width="1228" height="691" controls autoPlay>
          <source src={"api/default"} type="video/mp4" />
        </video>
        <FinishVideo />
      </div>
    );
  };
  const onClickPlay = async () => {
    //await getDefaultVideoID();
    await setClickFinish(false);
    await setClickPlay(true);
  };
  const onClickFinish = async () => {
    await setClickPlay(false);
    await setClickFinish(false);
  };
  const PlayVideoButton = () => {
    return (
      <p
        style={{ padding: "10px", border: "2px solid white" }}
        onClick={onClickPlay}
      >
        Play Video
      </p>
    );
  };
  const FinishVideo = () => {
    return (
      <p
        style={{ padding: "10px", border: "2px solid white" }}
        onClick={onClickFinish}
      >
        Finish Playing
      </p>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {clickPlay ? (
          <PlayDefaultVideo video={defaultVideo[0]} />
        ) : (
          <PlayVideoButton />
        )}
        {clickFinish ? <FinishVideo /> : null}
        <ListVideos videos={videos} />
      </header>
    </div>
  );
}

export default App;
