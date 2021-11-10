import { useRef, useEffect} from 'react';

type VideoProps = {
  videoPreviewLink: string;
  isPlay: boolean;
  muted: boolean;
  posterImage: string;
}

function Video({videoPreviewLink, isPlay, muted, posterImage}: VideoProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {return undefined;}

    isPlay && videoRef.current?.play();
    !isPlay && videoRef.current?.load();
  }, [isPlay]);

  return (
    <video
      src={videoPreviewLink}
      ref={videoRef}
      className="player__video"
      width="280"
      height="175"
      preload="metadata"
      muted={muted}
      poster={posterImage}
    >
    </video>
  );
}

export default Video;
