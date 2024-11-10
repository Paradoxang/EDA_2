import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ActionCategory = () => {
    const images = [
        {
            title: 'White House Down',
            imgSrc: 'https://m.media-amazon.com/images/M/MV5BNTZkMmRiY2EtOTljZS00MjJjLWFiNDQtNjEwYWE0NWNkYjI4XkEyXkFqcGc@._V1_.jpg',
        },
        {
            title: 'Misión de Rescate 2',
            imgSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbbb30173566811.649282c405dad.png',
        },
        {
            title: 'Salvando al soldado Ryan',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dcKfD8xWf8XnS3tHVp7v331wdNT.jpg',
        },
        {
            title: 'Saga of Tanya the Evil',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5nwiHomKZBBF9DLrolfZapi3fDm.jpg',
        },
        {
            title: 'Band Of Brothers',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kq9KiusAWPPITQrGovbgdhD9R1R.jpg',
        },
    ];

    return (
        <div className= "bg-teamBgColor">
        <div className="max-w-xl mx-auto px-4 py-8 bg-teamBgColor rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-bgColor1 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white font-titleSans">En un 1vs1 quién gana ¿Rambo o John Wick?</h1>
                <p className="text-lg text-gray-300 leading-relaxed font-system font-bold">
                    La acción es ese genero el cuál puede ser considerado el comodin dentro de las producciones audio visuales; ya que no necesitan ser revolucionarias, profundas o incluso contar con gran presupuesto. Solamente necesitas que transpiren adrenalina y sale para pintura.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4 font-system font-bold">
                    La receta va así: metele un villano, un heroe que sea algún super experto retirado, que alguien hackee algo, luchas cuerpo a cuerpo, muchos disparos y explosiones; y que al final todo se resuelva con una pelea 1vs1 entre el protagonista versus el malo.
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

export default ActionCategory;
