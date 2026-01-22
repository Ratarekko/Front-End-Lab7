import React from 'react';

function GoodsCard({ img, name, cost }) {
    return (
        <div className="goods-card">
            <img src={img} alt={name} className="goods-image" />
            <p className="goods-name">{name}</p>
            <p className="goods-cost">Cost: {cost} grn</p>
        </div>
    );
}

export default GoodsCard;