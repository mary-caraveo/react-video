import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src="https://images.pexels.com/photos/395044/pexels-photo-395044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="flower" />
    <div className="carousel-item__details">
      <div className="carousel-item__details--img">
        <img src="./assets/img/play.png" alt="play" />
        <img src="./assets/img/plus.png" alt="plus" />
      </div>
      <p className="carousel-item__details--title">Titulo descriptivo</p>
      <p className="carousel-item__details--subtitle">2021 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
