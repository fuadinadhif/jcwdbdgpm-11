import { useState, useRef } from "react";

export default function UseRefExamplePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<null | HTMLVideoElement>(null);

  // function handleToggleVanilla() {
  //   const video = document.querySelector("video");

  //   if (isPlaying) {
  //     video?.pause();
  //   } else {
  //     video?.play();
  //   }

  //   setIsPlaying(!isPlaying);
  // }

  function handleToggleRef() {
    if (!videoRef) return;

    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <main>
      <video controls={false} autoPlay={false} muted ref={videoRef}>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      <button onClick={handleToggleRef}>{isPlaying ? "Pause" : "Play"}</button>
    </main>
  );
}
