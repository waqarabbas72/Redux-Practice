import { combineReducers } from "@reduxjs/toolkit";
const songReducers = () => {
    return [
        {title : "Shubh No-Love" , duration : "3:15"},
        {title : "Agency" , duration : "4:05"},
        {title : "Gangster" , duration : "2:30"},
        {title : "Serena-Safari" , duration : "5:00"}
    ];
};

const selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    };

    return selectedSong;
};

export default combineReducers({
    songs : songReducers,
    selectedSong : selectedSongReducer
});