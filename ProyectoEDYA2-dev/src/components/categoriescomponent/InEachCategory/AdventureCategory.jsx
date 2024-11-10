import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AdventureCategory = () => {
    const images = [
        {
            title: 'Avatar la leyenda de Aang',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ucNtkZfpZ6KgxqPo039nN4LAyFR.jpg',
        },
        {
            title: 'One Piece',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg',
        },
        {
            title: 'Dr Stone',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xbZQ3fDl0y5mt0ARwfeyrgQ4JTw.jpg',
        },
        {
            title: 'Indiana Jones: La Última Cruzada',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5h45gK147AAJpLLC7Cicr597urz.jpg',
        },
        {
            title: 'Uncharted',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6hlI9Ea1O4IeJ2cj7OiNinqg8Qd.jpg',
        },
    ];

    return (
        <div className= "bg-teamBgColor">
        <div className="max-w-xl mx-auto px-4 py-8 bg-teamBgColor rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-bgColor1 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white font-titleSans">¿Qué habra a la vuelta de la esquina? <br /> Solo hay una forma de averiguarlo </h1>
                <p className="text-lg text-gray-300 leading-relaxed font-system font-bold">
                Sumérgete en un género cinematográfico que despierta el espíritu aventurero y te lleva más allá de los límites de lo ordinario. Las películas de aventuras son una puerta a mundos llenos de acción, desafíos y paisajes asombrosos, donde los personajes se enfrentan a fuerzas de la naturaleza, villanos imponentes y pruebas que ponen a prueba su valentía y determinación. Cada historia te invita a ser parte de una travesía épica, recorriendo desde selvas inexploradas y templos antiguos hasta galaxias lejanas y reinos de fantasía.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4 font-system font-bold">
                En este universo, la emoción es constante, y el suspenso de cada escena te mantendrá al borde del asiento. Ya sea acompañando a intrépidos exploradores en búsquedas legendarias, cruzando tierras inhóspitas en busca de secretos ocultos o enfrentando desafíos para salvar el mundo, las películas de aventuras prometen una experiencia vibrante y cautivadora.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4 font-system font-bold">
                    Algunas producciones que ya hemos y/o analizaremos:                
                </p><br />



                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="carousel-container"
                    customButtonGroup={<button>Group</button>}
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {images.map((image, index) => (
                        <div key={index} className="px-4">
                            <img src={image.imgSrc} alt={image.title} className="rounded-lg" />
                            <h3 className="text-white text-lg mt-2">{image.title}</h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>

        </div>
    );
}

export default AdventureCategory;
