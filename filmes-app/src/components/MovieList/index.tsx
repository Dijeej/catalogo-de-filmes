'use client';

import axios from 'axios';
import './index.scss'
import { useEffect, useState, useCallback } from 'react';
import { MovieType } from '@/types/movieType';
import MovieCard from '../MovieCard';
import ReactLoading from 'react-loading';

export default function MovieList() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getMovies = useCallback(async () => {
        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '2ad935aa5c1c020c4c3ba741aa80d09d',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
            setIsLoading(false);
        }).catch(error => {
            console.error("Erro ao buscar filmes:", error);
            setIsLoading(false); 
        });
    }, []);
    useEffect(() => {
        getMovies();
    }, [getMovies]);

    if (isLoading) {
        return (
            <div className='loading-container'>
                <ReactLoading type="spin" color="#113565" height={'5%'} width={'5%'}/>
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