import React from "react";
import { Dropdown } from "flowbite-react";

const FilterComponent = ({ handleTagSelect }) => {
    return (
        <Dropdown label="Filtrar" color="red" className="font-titleMono">
            {['Acción', 'Aventura', 'Fantasía', 'Terror', 'Comedia', 'Familia', 'Drama', 'Ciencia ficción', 'Suspenso', 'Animación'].map(tag => (
                <Dropdown.Item key={tag} onClick={() => handleTagSelect(tag)}>{tag}</Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default FilterComponent;
