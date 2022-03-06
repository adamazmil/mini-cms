import "./App.css";
import React, { useState } from "react";

function App() {
  const [videos, setVideos] = React.useState([]);
  const getVideos = async () => {
    await fetch("api/videos")
      .then((res) => res.json())
      .then((data) => setVideos(data));
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
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={getVideos}>Click to call api</p>
        <ListVideos videos={videos} />
      </header>
    </div>
  );
}

export default App;
