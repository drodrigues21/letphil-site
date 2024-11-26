import { useEffect, useState } from "react";

import getYoutubeRecentVideo from "../services/get-youtube-recent-video";

export default function useGetYoutubeRecentVideo() {
  const [video, setVideo] = useState<null | any>(null);

  useEffect(() => {
    (async () => {
      const result = await getYoutubeRecentVideo();
      const v = result?.items[0];
      console.log("v =", v);
      setVideo(v);
    })();
  }, []);

  return (
    video && (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id.videoId}?si=i3PihHhvkYHCs-93`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    )
  );
}
