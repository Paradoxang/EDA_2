import React, { useEffect, useState } from 'react';
import { Puntuation } from '../../components/moviescomponent/Puntuation';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


import infosalas from "../../../src/pages/infosalas.json";

export const InMovie = () => {
    const { id } = useParams();
    const location = useLocation();
    const { title, description, imgSrc, schedule, puntuation, critica, categoria } = location.state;
    const { email } = useSelector(state => state.auth);

    // Filtra las primeras tres imágenes del json basadas en el id de la ruta
    const filteredSuggestions = infosalas.filter(movie => movie.categoria == categoria && title !== movie.nombre) ;

    return (
        <section className="bg-teamBgColor md:py-8 dark:bg-gray-900 antialiased font-serif">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto col-span-2">
                        <img className="w-auto h-5/6 dark:hidden" src={imgSrc} alt="" />
                        <img className="w-auto hidden dark:block" src={imgSrc} alt="" />
                    </div>
                    <div className="mt-4 sm:mt-8 lg:mt-0 col-span-2">   
                        <div className="mt-4 font-serif sm:mt-8 lg:mt-0">
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <h1 className="text-xl font-black font-titleSans text-white sm:text-5xl dark:text-white">
                                    {title}
                                </h1>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <p className="text-2xl font-extrabold text-gray-900 font-titleMono sm:text-3xl dark:text-white">
                                    Reseña
                                </p>
                                <Puntuation puntuation={puntuation}  />
                            </div>
                        </div>
                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                        <p className="mb-6 text-white dark:text-gray-400 font-system">
                            {critica}
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};
