import {useState, useRef, useEffect} from 'react';

type VideoProps = {
  videoPreviewLink: string;
  autoPlay: boolean;
  muted: boolean;
  posterImage: string;
}

function Video({videoPreviewLink, autoPlay, muted, posterImage}: VideoProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(!isLoading);
    }

    return () => {
      if (videoRef.current !== null) {
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [videoPreviewLink]);

  return (
    <video
      src={videoPreviewLink}
      ref={videoRef}
      className="player__video"
      width="280"
      height="175"
      autoPlay={autoPlay}
      muted={muted}
      poster={posterImage}
    >
    </video>
  );
}

export default Video;
