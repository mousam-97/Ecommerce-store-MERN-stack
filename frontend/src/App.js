import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderSuccessScreen from "./screens/OrderSuccessScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import SearchBox from "./component/SearchBox";
import SearchScreen from "./screens/SearchScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <nav className="header">
            <Link to="/">
              <img
                className="header__logo"
                src="/images/amazonLogo.png"
                alt="amazon-logo"
              />
            </Link>

            <Link to="/shipping" className="header__link">
              <BiMap size="1.7em" />
              <div className="header_option">
                <span className="header__optionLineOne header__name">
                  {userInfo ? `Deliver to ${userInfo.name}` : "Hello "}
                </span>
                <span className="header__optionLineTwo">
                  {shippingAddress.city
                    ? `${shippingAddress.city} ${shippingAddress.postalCode}`
                    : "Select your address"}
                </span>
              </div>
            </Link>

            {/* <SearchBox /> */}

            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>

            <div className="header__nav">
              <Link to={!userInfo && "/signin"} className="header__link">
                <div onClick={signoutHandler} className="header_option">
                  <span className="header__optionLineOne">
                    Hello, {userInfo ? userInfo.name : "Guest"}{" "}
                  </span>
                  <span className="header__optionLineTwo">
                    {userInfo ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>

              <Link to="/orderhistory" className="header__link">
                <div className="header_option">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">& Orders</span>
                </div>
              </Link>

              <Link to="/cart" className="header__link">
                <div className="header__optionBasket">
                  <span className="header__basketCount ">
                    <span className="badge">{cartItems.length}</span>
                  </span>
                  <span className="cart__icon">
                    <HiOutlineShoppingCart size="4.2rem" />
                  </span>
                </div>
                <div className="header__cart">Cart</div>
              </Link>
            </div>
          </nav>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/success" component={OrderSuccessScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
          All right reserved (Amazon Clone Using MERN Stack)
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
