import React, { useState, useEffect } from 'react';
import './styles.css';
import { Movie } from 'models';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const API_KEY = '320f6ab2';

    useEffect(() => {
        // Fetch movie data based on search query
        const fetchMovies = async () => {
            if (searchQuery.trim() !== '') {
                try {
                    const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
                    const data = await response.json();
                    setSearchResults(data.Search || []);
                } catch (error) {
                    console.error('Error fetching movies:', error);
                }
            } else {
                setSearchResults([]);
            }
        };

        fetchMovies();
    }, [searchQuery]);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleMovieClick = (imdbID: string) => {
        // Fetch detailed movie information based on IMDb ID
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
                const data = await response.json();
                setSelectedMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    };

    return (
      <div>
          <h1>Getflix</h1>
          <input
              type="text"
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={handleSearchInputChange}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {searchResults.map((movie: any) => (
                  <div
                      key={movie.imdbID}
                      onClick={() => handleMovieClick(movie.imdbID)}
                      style={{ margin: '10px', width: '250px' }}
                  >
                      <h2>{movie.Title}</h2>
                      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '100%', height: 'auto' }} />
                      <p>Year: {movie.Year}</p>
                  </div>
              ))}
          </div>
          {selectedMovie && searchQuery.trim() !== '' && (
              <div>
                  <h2>{selectedMovie.Title}</h2>
                  <p>Plot: {selectedMovie.Plot}</p>
                  <p>Cast: {selectedMovie.Actors}</p>
              </div>
          )}
      </div>
  );  
};

export default App;
