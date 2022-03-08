import React, {useState} from 'react';
import {Link} from "react-router-dom";
import classNames from "classnames";

import search from '../../assets/icons/ICON - Search.png';
import home from '../../assets/icons/Group 46.png';
import tvShows from '../../assets/icons/Group 56.png';
import movies from '../../assets/icons/Group 54.png';
import genres from '../../assets/icons/Group 53.png';
import watchLater from '../../assets/icons/Group 47.png';
import avatar from '../../assets/icons/Sung-Gi-Hoon.png';

import './style.scss';

const Navigation = () => {

    const [openNav, setOpenNav] = useState(false);


    const show = () => {
        setOpenNav(true);
    }

    const hide = () => {
        setOpenNav(false)
    }

    return (

        <nav className={classNames('nav', {'nav_opens': openNav})}>

            <div className="menu" onMouseOver={show} onMouseLeave={hide}>

                <div className="avatar">
                    <img src={avatar} alt="avatar"/>
                    <p>Daniel</p>
                </div>

                <Link to="/search">
                    <div className="icon">
                        <img src={search} alt="search"/>
                    </div>

                    <p>Search</p>
                </Link>

                <Link to="/home">
                    <div className="icon">
                        <img src={home} alt="home"/>
                    </div>
                    <p>Home</p>
                </Link>
                <Link to="/tvShows">
                    <div className="icon">
                        <img src={tvShows} alt="tvShows"/>
                    </div>
                    <p>tvShows</p>
                </Link>
                <Link to="/movies">
                    <div className="icon">
                        <img src={movies} alt="movies"/>
                    </div>
                    <p>movies</p>
                </Link>
                <Link to="/movies">
                    <div className="icon">
                        <img src={genres} alt="genres"/>
                    </div>
                    <p>genres</p>
                </Link>
                <Link to="/watchLater">
                    <div className="icon">
                        <img src={watchLater} alt="watchLater"/>
                    </div>
                    <p>watchLater</p>
                </Link>

                <div className="other-info">
                    <Link to="/language">
                        LANGUAGE
                    </Link>
                    <Link to="/get-help">
                        GET HELP
                    </Link> <Link to="/exit">
                    EXIT
                </Link>
                </div>

            </div>

        </nav>

    );
};

export default Navigation;