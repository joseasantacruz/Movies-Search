import React, {useEffect} from 'react';
import { Container, CircularProgress,Typography, Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

import {searchMovieById} from './../../redux/actions/search';
import {movieResult as movieResultSelector} from './../../redux/selectors';

export default  ({match,history}) => {
    const dispatch = useDispatch();
    const movieResult= useSelector(state => movieResultSelector(state));
    //console.log(movieResult);
    useEffect(()=>{
        const movieId = match.params.id;
        if (!movieResult || (movieResult && movieResult.imdbID !==movieId)){
            dispatch(searchMovieById({movieId}));
        }
    });
    if (!movieResult){
        return <CircularProgress size ={80} color="primary"></CircularProgress>;
    }
    //console.log(dispatch);
    const handleBack =() =>{
        history.goBack();
    }
    return (
        <Container>
            <Typography variant="h3">{movieResult.Title}</Typography>
            <img src={movieResult.Poster} alt={movieResult.Title}   />
            <Typography><strong>Tipo: </strong>{movieResult.Type} </Typography>
            <Typography><strong>Genero: </strong>{movieResult.Genre} </Typography>
            <Typography><strong>Actores: </strong>{movieResult.Actors} </Typography>
            <Typography><strong>Director: </strong>{movieResult.Director} </Typography>
            <Typography><strong>Pais: </strong>{movieResult.Country} </Typography>
            <Typography><strong>Duracion: </strong>{movieResult.Runtime} </Typography>
            <Typography><strong>Clasificacion: </strong>{movieResult.Rated} </Typography>
            <Typography><strong>Premios: </strong>{movieResult.Awards} </Typography>
            <Typography><strong>Sinopsis: </strong>{movieResult.Plot} </Typography>
            <Button color="primary" variant="contained" onClick={handleBack}>Volver</Button>
        </Container>
    );
};
 