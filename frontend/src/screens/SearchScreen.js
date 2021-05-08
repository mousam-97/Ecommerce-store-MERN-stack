import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import Product from "../component/Product";

export default function SearchScreen(props) {
  const { name = "all" } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts(name !== "all" ? name : ""));
  }, [dispatch, name]);
  return (
    <div className="home">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          {products.map((product) => {
            return (
              <Product
                _id={product._id}
                key={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                numReviews={product.numReviews}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
