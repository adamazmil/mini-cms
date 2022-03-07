import "./App.css";
import React, { useState } from "react";

function App() {
  const [videos, setVideos] = React.useState([]);
  const getVideos = async () => {
    await fetch("api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  };
  const [clickPlay, setClickPlay] = React.useState(false);
  const [clickFinish, setClickFinish] = React.useState(false);
  const [defaultVideo, setDefaultVideo] = React.useState([]);
  const getDefaultVideoID = async () => {
    await fetch("api/videos/d0438c4b-21f0-4944-8e1a-46c32876c913")
      .then((res) => res.json())
      .then((data) => setDefaultVideo(data));
  };
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
        <video width="1228" height="691" controls>
          <source src={"/media/" + props.video.id + ".mp4"} type="video/mp4" />
        </video>
        <FinishVideo />
      </div>
    );
  };
  const onClickPlay = async () => {
    await getDefaultVideoID();
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
