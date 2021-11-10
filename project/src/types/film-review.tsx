export type User = {
  id: number,
  name: string,
}

export type ReviewId = {
  id: number,
  user: User,
  rating: number,
  comment: string,
  date: string,
}

export type FilmReview = {
  filmId: number,
  reviews: ReviewId[],
}
