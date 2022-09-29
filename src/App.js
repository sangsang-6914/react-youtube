import { useEffect, useState } from "react";
import { getVideos } from "./api/youtube";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getVideos()
      setVideos(data.items);
    })()
  }, [])
  return (
    <VideoList videos={videos} />
  )
}

export default App;
