import { MovieType } from '@/types/movieType';
import Image from 'next/image';
import StarRanking from '../StarRanking';
import './index.scss'

interface MovieCardProps {
    movie: MovieType;
}

export default function MovieCard({movie}: MovieCardProps) {
    return (
        <li className='movie-card'>
            <div className='card-poster'>
                <Image
                    className="card-image"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`${movie.title}`}
                    width={500} 
                    height={700}
                    layout='intrinsic'
                />
            </div>
            <div className='card-infos'>
                <p className='card-title'> {movie.title} </p>

                {movie.vote_average > 0 &&
                    <StarRanking score={movie.vote_average} />
                }
                
                <div className='hidden-content'>
                    {movie.overview &&
                        <p className='card-description'> 
                            {movie.overview.length > 100
                                ? `${movie.overview.substring(0, 100)}...`
                                : movie.overview
                            } 
                        </p>
                    }
                    <button className='btn-default'>Ver mais</button>
                </div>
            </div>
        </li>
    )
}