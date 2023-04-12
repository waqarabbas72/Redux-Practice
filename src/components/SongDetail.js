import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  if(!song){
    return(
      <h3>Please Select a Song</h3>
    )
  }
  return (
    <div>
       <h3>Details for:</h3>
       <h5>Title : {song.title}</h5>
       <h5>Duration : {song.duration}</h5>
    </div>
  )
};

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)
