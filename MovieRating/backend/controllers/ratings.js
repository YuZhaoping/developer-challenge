/* The movie ratings' controller */

export const getMovieRatings = async (req, res, next) => {
  try {
    const movieRatings = [];
    res.json({ movieRatings });
  } catch (e) {
    next(e);
  }
};

export const createMovieRating = async (req, res, next) => {
  try {
    const movieRating = {
      contactId: "contactId123",
      ...req.body.movieRating
    };
    res.json({ movieRating });
  } catch (e) {
    next(e);
  }
};
