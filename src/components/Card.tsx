import React from 'react';
import "./Сard.css" // Подключение CSS-файла

type CardProps = {
  brand: string; // Название бренда
  model: string; // Модель товара
  price: number; // Цена товара
  image: string; // Ссылка на изображение товара
};

const Card: React.FC<CardProps> = ({ brand, model, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={`${brand} ${model}`} />
      <div className="details">
        <h3 className="brand">{brand}</h3>
        <p className="model">{model}</p>
        <p className="price">{price}₽</p>
      </div>
    </div>
  );
};

export default Card;
