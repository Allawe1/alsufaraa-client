import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
// import Product from "../src/pages/productGatogary";
// import ContactUs from "./pages/contactUS/";
// import Products from "./pages/Products";
// import AboutUS from "./pages/aboutUS/AboutUS";
// import Gallerys from "./pages/gallery";
// import ProductDetails from "./pages/productDetails/";
import NotFoundPage from "./pages/pageNotFound/";
import { Header, Footer } from "./components/layouts";
import { Suspense, lazy } from "react";
import logo from "./images/logo.webp";

// const NavRoute = ({ exact, path, component: Component }) => (
//   <Route
//     exact={exact}
//     path={path}
//     render={(props) => (
//       <div>
//         <Header />
//         <Component {...props} />
//         <Footer />
//       </div>
//     )}
//   />
// );

// const Header = lazy(() => import("./components/layouts/header/Header.jsx"));

// const Home = lazy(() => import("./pages/home"));

const Product = lazy(() => import("../src/pages/productGatogary"));

const ContactUs = lazy(() => import("./pages/contactUS/"));

const Products = lazy(() => import("./pages/Products"));

const AboutUS = lazy(() => import("./pages/aboutUS/AboutUS"));

const Gallerys = lazy(() => import("./pages/gallery"));

const ProductDetails = lazy(() => import("./pages/productDetails"));

// const NotFoundPage = lazy(() => import("./pages/pageNotFound/"));

// const Footer = lazy(() => import("./components/layouts/footer/Footer.jsx"));

const App = () => {
  return (
    <Router>
      {/* <Suspense
        fallback={
          <div className="full-page-loader">
            <img width="200" src={logo} alt="AIP.Trade logo" />
          </div>
        }
      > */}
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Suspense
          fallback={
            <div className="full-page-loader">
              <img width="200" src={logo} alt="AIP.Trade logo" />
            </div>
          }
        >
          <Route path="/aboutus" exact component={AboutUS} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/product" exact component={Product} />
          <Route
            path="/products/:name"
            children={<Products />}
            exact
            component={Products}
          />
          <Route path="/gallery" exact component={Gallerys} />
          <Route path="/productDetails" exact component={ProductDetails} />
          <Route path="*" component={NotFoundPage} />
        </Suspense>
      </Switch>

      <Footer />
      {/* </Suspense> */}
    </Router>
  );
};

export default App;
