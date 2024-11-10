import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TerrorCategory = () => {
    const images = [
        {
            title: 'Late Night With The Devil',
            imgSrc: 'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/192/2024/05/02132044/u3YQJctMzFN2wAvnkmXy41bXhFv-scaled.jpg',
        },
        {
            title: 'A Quiet Place',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bBcQiubPGb7LgcRgT2kwC8YOWVo.jpg',
        },
        {
            title: '¡NOPE!',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tfZPQAHZ3xKSdilLywRzHj8xH7p.jpg',
        },
        {
            title: 'Scooby-Doo y La Isla de los Zombies',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/la1xrRWrs8lmrxWNnho92ivgRmT.jpg',
        },
        {
            title: 'Poltergeist (1982)',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b6JcwPnultjlXSVDGJhtPSAZSEY.jpg',
        },
    ];

    return (
        <div className= "bg-teamBgColor">
        <div className="max-w-xl mx-auto px-4 py-8 bg-teamBgColor rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-bgColor1 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white font-titleSans">*INSERTE UN JUMPSCARE*</h1>
                <p className="text-lg text-gray-300 leading-relaxed font-system font-bold">
                Atrévete a entrar en el oscuro y fascinante mundo del cine de terror, donde el miedo se convierte en el protagonista de historias que desafían la valentía y exploran lo desconocido. En esta sección, encontrarás las películas más escalofriantes, llenas de misterio y horror, que pondrán a prueba tu capacidad de soportar el suspenso y el terror en su estado más puro. Cada escena está diseñada para sumergirte en atmósferas inquietantes y situaciones que te harán contener la respiración.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4 font-system font-bold">
                Prepárate para vivir una experiencia que te llevará a los límites de lo imaginable, donde seres sobrenaturales, fuerzas ocultas y sucesos inexplicables te esperan en cada rincón. Desde espeluznantes casas embrujadas hasta inquietantes leyendas urbanas, el género de terror te invita a descubrir el lado más oscuro del cine y a enfrentar tus propios miedos.
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

export default TerrorCategory;
