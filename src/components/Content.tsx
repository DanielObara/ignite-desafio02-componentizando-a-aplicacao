import { MovieCard } from './MovieCard';

interface IContentProps {
  selectedGenre: {
    title: string;
  }
  movies: MovieProps[]
}

export function Content({selectedGenre: {title}, movies}: IContentProps) {
  // Complete aqui
return ( 
<div className="container">
  <header>
    <span className="category">Categoria:<span>{` ${title}`}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>)
}