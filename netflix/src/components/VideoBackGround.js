import React, { useEffect, useState } from "react";
import { API_CONSTANTS } from "./Constants";

const VideoBackGround = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState({});
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_CONSTANTS
    );
    const json = await data.json();
    const trailers = json?.results.filter((item) => item.type === "Trailer");
    const trailer = trailers.length ? trailers[0] : json.results[0];
    setTrailerId(trailer);
  };
  useEffect(() => {
    getMovieTrailer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
