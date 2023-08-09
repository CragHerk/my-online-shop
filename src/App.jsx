import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./state/Store/store";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import LoginRegister from "./pages/LoginRegister";
import { auth0Domain, auth0ClientId, auth0Secret } from "./utils/auth0Config";

function App() {
  return (
    <Router basename="/my-online-shop">
      <Provider store={store}>
        <Auth0Provider
          domain={auth0Domain}
          clientId={auth0ClientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginRegister />} />

            <Route component={() => <div>404 Not Found</div>} />
          </Routes>
        </Auth0Provider>
      </Provider>
    </Router>
  );
}

export default App;
