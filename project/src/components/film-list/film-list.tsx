import FilmCard from '../film-card/film-card';
import {States} from '../../types/states';
import {connect, ConnectedProps} from 'react-redux';
import {FilmListType} from '../../const';

type FilmListProps = {
  filmsCount: number;
  typeList: string;
}

const mapStatesProps = ({films, similarFilms}: States) => ({
  films,
  similarFilms,
});

const connector = connect(mapStatesProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & FilmListProps;

function FilmList(props: ConnectedComponentProps) : JSX.Element {
  const {
    filmsCount,
    typeList,
    films,
    similarFilms} = props;

  function getCards(type: string) {
    switch (type) {
      case FilmListType.MainList:
        return films;
      case FilmListType.SimilarList:
        return similarFilms;
    }
  }

  const filmCards = getCards(typeList);

  if (filmCards && filmCards.length > 0) {
    const cards = filmCards.length <= filmsCount ? filmCards : filmCards.slice(0, filmsCount);
    return (
      <div className="catalog__films-list">
        {cards.map((card) => {
          const keyValue = `${card.id}`;
          return (
            <FilmCard
              key = {keyValue}
              film={card}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="catalog__films-list">
      <p>There is no data about films</p>
    </div>
  );
}

export default connector (FilmList);
