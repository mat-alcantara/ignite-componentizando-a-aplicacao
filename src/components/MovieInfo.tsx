import { FiCalendar, FiClock, FiStar, FiDollarSign } from "react-icons/fi";

export const MovieInfo = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
        }}
      >
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg"
          alt="Movie poster"
          style={{ height: "250px", width: "auto" }}
        />
        <div style={{ marginLeft: "32px" }}>
          <h1>Underdog</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "32px" }}>
            <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <FiCalendar />
              03 Aug 2007
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <FiClock />
              84 min
            </p>
          </div>
          <p style={{ marginTop: "16px" }}>
            <strong>Director:</strong> Frederik Du Chau
          </p>
          <p>
            <strong>Sinopsis:</strong> A Beagle must use his newly-bestowed
            superpowers to defend Capitol City from mad scientist Simon
            Barsinister.
          </p>
          <p>
            <strong>Genre:</strong> Action, Adventure, Comedy, Family, Fantasy,
            Sci-Fi
          </p>
        </div>
      </div>
      <div style={{ marginTop: "32px" }}>
        <h1 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FiStar style={{ color: "yellow" }} />
          Ratings
        </h1>
        <p>Imdb: 4.7</p>
        <p>Internet Movie Database: 10/10</p>
        <p>Rotten Tomatoes: 16%</p>
        <p>Metacritic: 37/100</p>
        <p>Metascore: 37</p>
      </div>
    </div>
  );
};
