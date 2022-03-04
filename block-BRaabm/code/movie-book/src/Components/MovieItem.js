import Modal from "./Modal";

function MovieItem(props) {
  return (
    <>
      {props.movies.map((movie) => {
        return (
          <article key={movie.Title} className="flex movie align-ct">
            <figure className="movie-poster flex-30">
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
            <div className="movie-info flex-68">
              <h3 className="movie-name">Title: {movie.Title}</h3>
              <p className="released-date">Release date: {movie.Released}</p>
            </div>
          </article>
        );
      })}
      <Modal />
    </>
  );
}

export default MovieItem;
