import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import moviesData from '../../common/moviesData';
import moment from 'moment';




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
  
  
  export default function ReleasedMovies() {
        const classes = releasedMovieStyles();
    return (
      <div className={classes.root}>
        <ImageList rowHeight={350} cols={4} className={releasedMovieStyles.imageList}>
    
        {moviesData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.poster_url} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>Release Date: {moment(item.release_date).format("ddd ll")}</span>}/>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }
  