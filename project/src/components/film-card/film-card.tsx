import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import {AppRoute} from '../../const';
import Video from '../video/video';

type FilmCardProps = {
  film: Film;
  name: string;
  previewImage: string;
  mouseEnterHandler: (film : Film) => void;
}

function FilmCard({film, name, previewImage, mouseEnterHandler} : FilmCardProps) : JSX.Element {
  const [isPlay, setIsPlayVideo] = useState(false);
  const [timeoutId, setTimeoutId] = useState <ReturnType<typeof setTimeout>> ();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        mouseEnterHandler(film);
        const currentTimeoutId = setTimeout(() => {
          setIsPlayVideo(true);
        }, 1000);
        setTimeoutId(currentTimeoutId);
      }}
      onMouseLeave={() => {
        setIsPlayVideo(false);
        if (timeoutId){
          clearTimeout(timeoutId);
        }
      }}
    >
      <div className="small-film-card__image">
        <Video
          videoPreviewLink={film.previewVideoLink}
          posterImage={film.posterImage}
          isPlay = {isPlay}
          muted
        />
      </div>

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${film.id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
