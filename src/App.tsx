import { useCallback, useEffect, useState, lazy } from "react";

import { SideBar } from "./components/SideBar";

// Lazy import of MovieInfo because MovieInfo only renders if a movie is selected
const MovieInfo = lazy(() =>
  import("./components/MovieInfo").then((module) => ({
    default: module.MovieInfo,
  }))
);

// Lazy import of Content because Content only renders if a movie is not selected
const Content = lazy(() =>
  import("./components/Content").then((module) => ({
    default: module.Content,
  }))
);

import { api } from "./services/api";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

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

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  const [selectedMovie, setSelectedMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data);
      });

    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data);
      });
  }, [selectedGenreId]);

  const handleClickButton = useCallback((id: number) => {
    setSelectedMovie(null);
    setSelectedGenreId(id);
  }, []);

  const handleSelectedMovie = useCallback(
    (imdbId: string) => {
      const movieSelected = movies.find((movie) => movie.imdbID === imdbId);

      if (movieSelected) {
        setSelectedMovie(movieSelected);
      }
    },
    [movies]
  );

  const handleRemoveMovie = useCallback(() => {
    setSelectedMovie(null);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
      />
      <div className="container">
        {selectedMovie ? (
          <MovieInfo
            movie={selectedMovie}
            handleRemoveMovie={handleRemoveMovie}
          />
        ) : (
          <Content
            selectedGenre={selectedGenre}
            movies={movies}
            handleSelectMovie={handleSelectedMovie}
          />
        )}
      </div>
    </div>
  );
}
