import MovieList from "@/components/MovieList";
import { genreDictionary } from "@/utils/genreDictionary";

export default function Documentary() {
    const genreId = parseInt(
        Object.keys(genreDictionary).find(
          key => genreDictionary[parseInt(key)].en === 'documentary'
        ) || "0"
      );
  return (
     <div>
        <MovieList genreId={genreId}/>
     </div>
  );
}