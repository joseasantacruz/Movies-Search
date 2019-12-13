import React, {useState} from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'; 
import styles from './style';
import { MovieIcon } from '../../icons';

export default ({history}) => {
	const [searchText,setSearchText]= useState('');
	const classes = styles();
	const handleSearchTextChange = event => {
		setSearchText(event.target.value);
	};  
	const handleCleanTextClick = () =>{
		setSearchText('');
	};
	const handleSearchTextClick = () =>{
		history.push(`/results?movieName=${searchText}`);
	};
	
	return(
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Bienvenido!!</Typography>					
					</Grid>
					<Grid>
						<MovieIcon  className={classes.movieIcon}></MovieIcon>				
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder="Buscar..."
					className={classes.textFieldSearch}
					onChange={handleSearchTextChange} >

				</TextField>
				<Grid className={classes.buttonContainer}>
					<Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
					<Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button> 
				</Grid>
			</Card>
		</Container>
	)
}