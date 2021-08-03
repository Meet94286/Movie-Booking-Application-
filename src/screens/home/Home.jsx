import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';

import React from "react";
import Header from "../../common/header/Header";
import './Home.css';
import moviesData from '../../common/moviesData';




export default class Home  extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <div className="home">Upcoming Moives</div>
            </div>
        )
    }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export  function GridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={250} cols={6}  className={classes.imageList}>
      {moviesData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const releasedMovieStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


export  function ReleasedMovies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={350} cols={4} className={releasedMovieStyles.imageList}>
  
      {moviesData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Date:({item.release_date})</span>}/>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}






