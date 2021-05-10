import React, { useEffect } from "react";
import Product from "../component/Product";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselScreen from "../component/Carousel";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="home">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          <div className="carousal__banner">
            <CarouselScreen />
          </div>

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

export default HomeScreen;
