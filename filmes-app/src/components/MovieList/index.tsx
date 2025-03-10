'use client';

import axios from 'axios';
import './index.scss'
import { useEffect, useState, useCallback } from 'react';
import { MovieType } from '@/types/movieType';
import { PulseLoader } from 'react-spinners';
import MovieCard from '../MovieCard';
// import ReactLoading from 'react-loading';

export default function MovieList() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>();
    
    const getMovies = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: '2ad935aa5c1c020c4c3ba741aa80d09d',
                    language: 'pt-BR'
                }
            });
            setMovies(response.data.results);
        }catch(error) {
            console.error("Erro ao buscar filmes:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    if (isLoading) {
        return (
            <div className='loading-container'>
                <PulseLoader color='#113582' size={20}/>
            </div>
        )
    }

    return (
        <ul className="movie-list">
            {movies.map((movie) => 
                <MovieCard key={`movie-${movie.id}`} movie={movie} />
            )}
        </ul>
    );
}