import React from 'react';

const Card = ({ product }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          {product.discount > 0 ? (
            <p>
              Price: <del>${product.price}</del>
              <span className="ps-3">${product.discountPrice}</span>
            </p>
          ) : (
            <p>Price: ${product.price}</p>
          )}
          <a href="#" className="btn btn-primary">Add to cart</a>
        </div>
      </div>
    </>
  );
};

export default Card;