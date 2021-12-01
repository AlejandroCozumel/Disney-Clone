import MovieThumbnail from "./MovieThumbnail";

function MoviesCollection({ results, title }) {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w[1440px] max-auto">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-x-scroll overflow-y-hidden scrollbar-hide p-2 -m-2">
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCollection;
