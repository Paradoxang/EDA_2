import { useEffect, useState } from "react";
import getGifs from "./GetGifs";

export const useFetchGifts = (category) =>{
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const images = await getGifs ( category )
        setImages ( images );
    }

    useEffect( () => {
        getImages();

    }, [])

    return {
        images: images,
        isLoading: false
    }
}

export default useFetchGifts