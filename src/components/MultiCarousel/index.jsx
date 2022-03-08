import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {settings} from "./carouselSettings";
import data from '../../data.json';
import MovieDetails from "../MovieDetails";
import {sortArrayByDate} from "../../utils";


const MultipleItems = () => {

    const [carouselList, setCarouselList] = useState([]);
    const [currentItem, setCurrentItem] = useState({});

    const handleCarouselItem = (item) => {
        setCurrentItem(item);
        sessionStorage.setItem("current-item", JSON.stringify(item));
    }

    useEffect(() => {

        let sessionData = sessionStorage.getItem("current-item");
        sessionData = JSON.parse(sessionData);

        if (sessionData && Object.entries(sessionData).length) {
            const arrayFiltered = data.TendingNow.filter(el => el.Id !== sessionData.Id);
            const sortedArray = sortArrayByDate(arrayFiltered)
            const newArr = [sessionData, ...sortedArray]
            setCarouselList(newArr);
            setCurrentItem(sessionData);

        } else {
            setCarouselList(sortArrayByDate(data.TendingNow));
            setCurrentItem(data.TendingNow[0]);
        }
    }, []);


    return (
        <div>
            <MovieDetails data={currentItem}/>

            <Slider {...settings}>
                {carouselList.length && carouselList.map(item => {
                    return <div key={item.Id}
                                onClick={() => handleCarouselItem(item)}>
                        <img src={process.env.PUBLIC_URL + '/assets/' + item.CoverImage} alt="movie"/>
                    </div>
                })}

            </Slider>
        </div>
    );
}

export default MultipleItems;