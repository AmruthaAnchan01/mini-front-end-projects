import React from "react";
import { useSearchParams } from "react-router-dom";

function Watch() {
  const [sp] = useSearchParams();
  console.log(sp.get("v"));
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+sp.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Watch;
