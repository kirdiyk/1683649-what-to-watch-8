import { useRef, useEffect, useState} from 'react';

type VideoProps = {
  link: string;
  poster: string;
  autoplay: boolean;
  muted: boolean;
}

function Video(props: VideoProps): JSX.Element {
  const {link, poster, autoplay, muted} = props;
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
  }, [link]); // желательно все зависимости указывать, если нет крайней необходимости не делать этого

  return (
    <video
      src={link}
      ref={videoRef}
      className="player__video"
      width="280"
      height="175"
      autoPlay={autoplay}
      muted={muted}
      poster={poster}
    >
    </video>
  );
}

export default Video;
