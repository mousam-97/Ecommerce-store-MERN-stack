import React from "react";
import { BiMap } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { signout } from "../actions/userActions";
import SearchBox from "./SearchBox";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div>
      <nav className="header">
        <div>
          <Link to="/">
            <h1 className="store__logo">amazona</h1>
          </Link>
        </div>

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
        <div className="browser__search">
          <Route
            render={({ history }) => <SearchBox history={history}></SearchBox>}
          ></Route>
        </div>

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
      <nav className="header__mobile">
        <Route
          render={({ history }) => <SearchBox history={history}></SearchBox>}
        ></Route>
      </nav>
    </div>
  );
}

export default Navbar;
