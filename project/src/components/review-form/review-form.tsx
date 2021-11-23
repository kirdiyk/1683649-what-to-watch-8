import {useState, FormEvent, ChangeEvent} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {ReviewData} from '../../types/review-data';
import {reviewAction} from '../../store/actions-api';
import {BACKGROUND_REVIEW_FORM} from '../../const';

const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // это константа, надо в снейк кейсе записывать

type FilmParam = {
  id: string;
}

function ReviewForm(): JSX.Element {
  const [userGrades, setUserGrades] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setSending] = useState(false);

  const {id} = useParams<FilmParam>();

  const dispatch = useDispatch();

  const onSubmit = (reviewData: ReviewData, errorHandler: (error: string) => void) => {
    dispatch(reviewAction(reviewData, errorHandler));
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          setSending(true);
          if (userGrades !== null && userComment !== null) {
            onSubmit({
              filmId: Number(id),
              rating: Number(userGrades),
              comment: userComment,
            }, (error: string) => {
              setSending(false);
              setErrorMessage(error);
            });
          }
        }}
      >
        {errorMessage !== '' ? <p style={{color: 'red'}}>{errorMessage}</p> : ''}
        <fieldset style={{border: 'none', padding: 0}} disabled={isSending}>
          <div className="rating">
            <div className="rating__stars">
              {grades.map((grade) => (
                <>
                  <input
                    key={grade}
                    className="rating__input"
                    id={`star-${grade}`}
                    type="radio"
                    name="rating"
                    value={grade}
                    onChange={() => {
                      setUserGrades(grade);
                    }}
                  />
                  <label className="rating__label" htmlFor={`star-${grade}`}>Rating {grade}</label>
                </>),
              ).reverse()} здесь норм, потому что сначала мап, а так вообще опасный метод reverse потому что меняется исходный массив
            </div>
          </div>

          <div className="add-review__text" style={{background: BACKGROUND_REVIEW_FORM}}>
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
                setUserComment(target.value);
              }}
              value={userComment}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                // магические значение и плюс лучше вынести в переменную
                disabled={!(userGrades > 0 && userComment.length >= 50 && userComment.length <= 400)}
              >
                Post
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ReviewForm;
