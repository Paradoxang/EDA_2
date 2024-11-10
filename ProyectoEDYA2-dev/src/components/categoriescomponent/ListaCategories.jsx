import React from 'react';
import CardCategories from './CardCategories';
import { TbHelicopter } from 'react-icons/tb';
import { PiBinocularsBold } from "react-icons/pi";
import { GiGhost } from "react-icons/gi";
import { SlMagicWand } from "react-icons/sl";




const categorias = [
    {
        id: 1,
        title: 'Acción',
        imgSrc: 'https://i.pinimg.com/736x/63/0d/48/630d48a44af393e2172b7dae5d01eacf.jpg',
        icon: TbHelicopter
    },
    {
        id: 2,
        title: 'Aventura',
        imgSrc: 'https://i.pinimg.com/736x/6e/a3/3e/6ea33eeac48b69246c47d8b1bbb5c2a5.jpg',
        icon: PiBinocularsBold
    },

    {
        id: 3,
        title: 'Fantasía',
        imgSrc: 'https://i.pinimg.com/736x/7c/de/2c/7cde2c9f57036cca1ed3c6243afc9380.jpg',
        icon: SlMagicWand

    },

    {
        id: 4,
        title: 'Terror',
        imgSrc: 'https://i.pinimg.com/736x/47/5a/ff/475aff50a6128a654332ae144c98994c.jpg',
        icon: GiGhost

    }

    
];

const ListaCategories = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-teamBgColor">
            {categorias.map(categoria => (
                <CardCategories
                    key={categoria.id}
                    title={categoria.title}
                    description={categoria.description}
                    imgSrc={categoria.imgSrc}
                    icon={categoria.icon} // Pasa el icono correspondiente como prop
                />
            ))}
        </div>
    );
}

export { categorias };
export default ListaCategories;
