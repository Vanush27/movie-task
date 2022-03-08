import React from 'react';
import * as moment from 'moment';
import 'moment-duration-format';

import playIcon from "../../assets/icons/play.png";

import './style.scss';

const MovieDetails = ({data}) => {

    const formattedDate = moment.duration(data.Duration, "minutes").format("h[h] m[m]");

    return (

        <div className="wrapper-movie">
            <div className="movie-category">{data.Category}</div>
            <h1>{data.Title}</h1>
            <div className="movie-release-date">
                <span>{data.ReleaseYear}</span>
                <span>{data.MpaRating}</span>
                <span>{formattedDate}</span>
            </div>

            <div className="movie-desc">{data.Description}</div>
            <div className="btn-wrapper">
                <button type="button" className="btn btn-white">
                    <img src={playIcon} alt="play-icon"/>
                    Play
                </button>
                <button type="button" className="btn btn-blue">More Info</button>
            </div>
        </div>
    );
};

export default MovieDetails;