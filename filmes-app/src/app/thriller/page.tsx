import MovieList from "@/components/MovieList";
import { genreDictionary } from "@/utils/genreDictionary";

export default function Thriller() {
    const genreId = parseInt(
        Object.keys(genreDictionary).find(
          key => genreDictionary[parseInt(key)].en === 'thriller'
        ) || "0"
      );
  return (
     <div>
        <MovieList genreId={genreId}/>
     </div>
  );
}