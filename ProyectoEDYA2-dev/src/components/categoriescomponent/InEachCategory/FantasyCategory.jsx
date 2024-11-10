import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FantasyCategory = () => {
    const images = [
        {
            title: 'El Señor de los Anillos: La Comunidad del Anillo',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9xtH1RmAzQ0rrMBNUMXstb2s3er.jpg',
        },
        {
            title: 'Percy Jackson and the Olympians',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zVcpkAw47UmTd2AXIhl3gOpeguT.jpg',
        },
        {
            title: 'Harry Potter y la Piedra Filosofal',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7xXJ15VEf7G9GdAuV1dO769yC73.jpg',
        },
        {
            title: 'Wistoria: Wand and Sword',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gxYKhO0GuPAeCb3llknWu53bYYS.jpg',
        },
        {
            title: 'Goblin Slayer',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1O2sKUUnLGZ8bii46Uwkba44gAN.jpg',
        },
    ];

    return (
        <div className= "bg-teamBgColor">   
        <div className="max-w-xl mx-auto px-4 py-8 bg-teamBgColor rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-bgColor1 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white font-titleSans">¡Magos, Varitas y Dragones!</h1>
                <p className="text-lg text-gray-300 leading-relaxed font-system font-bold">
                Explora mundos llenos de maravillas y encantamientos donde lo imposible se convierte en realidad. Las películas de fantasía te invitan a entrar en reinos de ensueño, donde la magia, criaturas sobrenaturales y seres míticos cobran vida en historias llenas de asombro y misterio. Cada aventura en este género es un viaje a lo extraordinario, en el que la imaginación no tiene límites y los héroes descubren su verdadero potencial al enfrentar fuerzas mágicas y destinos legendarios.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4 font-system font-bold">
                Déjate envolver por la magia de cuentos inolvidables que atraviesan reinos encantados y batallas épicas. Ya sea en el descubrimiento de tierras habitadas por dragones y hechiceros o en la búsqueda de reliquias antiguas junto a héroes valientes, las películas de fantasía son una puerta a lo imposible, prometiéndote una experiencia llena de misticismo y sorpresas que despiertan la imaginación y la esperanza en algo más allá de lo visible.
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

export default FantasyCategory;
