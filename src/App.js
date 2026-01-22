import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

import appleImg from './images/apple.png';
import pearImg from './images/pear.png';
import grapeImg from './images/grape.png';
import peachImg from './images/peach.png';
import pineappleImg from './images/pineapple.png';
import lemonImg from './images/lemon.png';

function App() {
    const [imageState, setImageState] = useState({
        src: 'https://static.polityka.pl/_resource/res/path/f7/a5/f7a5e243-36af-4a9c-9b6a-e033cabeae79',
        alt: 'Фото міста Гданськ',
        width: 700,
        isVisible: true
    });

    const handleAdd = () => setImageState(prev => ({ ...prev, isVisible: true }));
    const handleDelete = () => setImageState(prev => ({ ...prev, isVisible: false }));
    const handleIncrease = () => setImageState(prev => ({ ...prev, width: prev.width + 50 }));
    const handleDecrease = () => setImageState(prev => ({ ...prev, width: prev.width > 50 ? prev.width - 50 : prev.width }));

    const goods = [
        { id: 1, img: appleImg, name: 'Apple', cost: 15 },
        { id: 2, img: pearImg, name: 'Pear', cost: 20 },
        { id: 3, img: grapeImg, name: 'Grape', cost: 25 },
        { id: 4, img: peachImg, name: 'Peach', cost: 20 },
        { id: 5, img: pineappleImg, name: 'Pineapple', cost: 30 },
        { id: 6, img: lemonImg, name: 'Lemon', cost: 22 }
    ];

    return (
        <div className="App">
            <h1>Завдання 1: Лабораторна робота №4 на React</h1>
            <Header />
            <Content
                onAdd={handleAdd}
                onDelete={handleDelete}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
            />
            <Image
                src={imageState.src}
                alt={imageState.alt}
                width={imageState.width}
                isVisible={imageState.isVisible}
            />

            <hr />

            <h1>Завдання 2: Галерея товарів</h1>
            <div className="gallery-container">
                {goods.map(good => (
                    <GoodsCard
                        key={good.id}
                        img={good.img}
                        name={good.name}
                        cost={good.cost}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;