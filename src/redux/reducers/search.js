import {SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR , SEARCH_MOVIE_COMPLETE,SEARCH_MOVIE_BY_ID_START, SEARCH_MOVIE_BY_ID_ERROR , SEARCH_MOVIE_BY_ID_COMPLETE} from './../../consts/actionTypes';


const initialState={};
export default function(state = initialState,action){
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return {...state, isLoadin:true}; 
        case SEARCH_MOVIE_ERROR:  
            return {...state, isLoadin:false, movieResults: null}; 
        case SEARCH_MOVIE_COMPLETE:  
            return {...state, isLoadin:false, movieResults: action.results.data}; 
        case SEARCH_MOVIE_BY_ID_START:
            return {...state, isLoadin:true, movieResult: null}; 
        case SEARCH_MOVIE_BY_ID_ERROR:  
            return {...state, isLoadin:false, movieResult: null}; 
        case SEARCH_MOVIE_BY_ID_COMPLETE:  
        //console.log(action);
            return {...state, isLoadin:false, movieResult: action.movie.data}; 
        default:
            return {...state}; 
    }
}