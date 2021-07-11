import { FiCalendar, FiClock, FiStar } from "react-icons/fi";

interface MovieProps {
  imdbID: string;
  Released: string;
  Genre: string;
  Director: string;
  Plot: string;
  imdbRating: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type MovieInfoProps = {
  movie: MovieProps;
};

export const MovieInfo = ({ movie }: MovieInfoProps) => {
  return (
    <div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
        }}
      >
        <img
          src={movie.Poster}
          alt="Movie poster"
          style={{ height: "250px", width: "auto" }}
        />
        <div style={{ marginLeft: "32px" }}>
          <h1>Underdog</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
            <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <FiCalendar />
              {movie.Released}
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <FiClock />
              {movie.Runtime}
            </p>
          </div>
          <p style={{ marginTop: "16px" }}>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Sinopsis:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h1 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FiStar style={{ color: "yellow" }} />
          Ratings
        </h1>
        <p>Imdb: {movie.imdbRating}</p>
        {movie.Ratings.map((item) => (
          <p>{`${item.Source}: ${item.Value}`}</p>
        ))}
      </div>
    </div>
  );
};
