import { useCounter } from './Counter';
import { useState } from 'react';
import { GifGrid } from './gifgrid';
import { AddCategory } from './addcategory';
import './GiftExpertApp.css';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Cats']);
  
  // Use the custom hook to manage the counter
  const { counter, increment, decrement, reset } = useCounter();

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <>
      <h1>GiftExpert</h1>
      
      <AddCategory onAddCategory={onAddCategory} />
      
      {/* Counter and Buttons to use the custom hook */}
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
