import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Product from "../src/pages/productGatogary";
// import Home from "./pages/home";
// import ContactUs from "./pages/contactUS/";
// import Products from "./pages/Products";
// import AboutUS from "./pages/aboutUS/AboutUS";
// import Gallerys from "./pages/gallery";
// import NotFoundPage from "./pages/pageNotFound/";
// import ProductDetails from "./pages/productDetails/";
import { Footer, Header } from "./components/layouts";
import { Suspense, lazy } from "react";

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

// const NavBar = lazy(() => import("./components/layouts/header/Header.jsx"));

const Home = lazy(() => import("./pages/home"));

const Product = lazy(() => import("../src/pages/productGatogary"));

const ContactUs = lazy(() => import("./pages/contactUS/"));

const Products = lazy(() => import("./pages/Products"));

const AboutUS = lazy(() => import("./pages/aboutUS/AboutUS"));

const Gallerys = lazy(() => import("./pages/gallery"));

const NotFoundPage = lazy(() => import("./pages/pageNotFound/"));

const ProductDetails = lazy(() => import("./pages/productDetails"));

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={Home} />
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
        </Suspense>
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
