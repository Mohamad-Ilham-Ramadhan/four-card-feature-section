import React from "react";

export default function Card({ title, text, image, color }) {
  return (
    <div className={`card h-100 shadow --bd-top border-${color}`}>
      <div className="card-body">
        <h5 className="h5 font-weight-bold card-title">{title}</h5>
        <p className="card-text text-sm">{text}</p>
        <div className="text-right">
          <img src={image} alt="" className="card-img-icon" />
        </div>
      </div>
    </div>
  );
}
