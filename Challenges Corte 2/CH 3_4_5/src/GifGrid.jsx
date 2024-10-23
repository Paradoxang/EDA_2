//import { useEffect } from "react";
import useFetchGifts from "./FetchGifts";
//import { useState, useEffect } from "react"
import  GifItem  from "./GifItem"

export const GifGrid = ({category}) => {
    const [images, isLoading] = useFetchGifts([]);
    return (
        <>
            <h3> {category}</h3>
            <div className="card-grid">
                {
                    images.map( (image, key ) => {
                        return <GifItem key={key} {... image}>  </GifItem>
                    })
                }
            </div>
        </>    
    )

}