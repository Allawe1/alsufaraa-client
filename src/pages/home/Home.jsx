import React, { useEffect } from "react";
import "./Home.css";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { ProductCard } from "./Components/Card";
import { useStyles } from "./Styles";
import { Link } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";
import { useDispatch, useSelector, connect } from "react-redux";
import { getBestSelling } from "../../redux/actions/bestSelling";
import productList from "../../images/productList.jpg";
import gallery from "../../images/gallery.png";
import about from "../../images/about.jpg";
import contact from "../../images/contact.png";
import { useState } from "react";
import { SpinnerInfinity } from "spinners-react";

const mapStateToProps = (state) => {
  return { bestSelling: state.bestSelling };
};
const mapDispatchToProps = (dispatch) => {
  return { getBestSelling: () => dispatch(getBestSelling()) };
};
function Home(props) {
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    props.getBestSelling();
    if (props.bestSelling) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dispatch]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className={classes.main}>
      <div className={classes.home}>
        <Typography variant="h2" className={classes.h2}>
          Welcome to ALSUFARAA!
        </Typography>
        <Divider variant="inset" className={classes.bigDivider} />
        <Typography variant="h1" className={classes.h1}>
          Choose what you are looking for
        </Typography>
        <Divider variant="inset" className={classes.smallDivider} />
        <br />
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <Card className={classes.cardBig}>
                <Link to="/product">
                  <img
                    src={productList}
                    className={classes.image}
                    alt="Home"
                    title="Home"
                  />
                  <div className={classes.overlay}>Product</div>
                </Link>
              </Card>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <Card className={classes.cardMd}>
                <Link to="/gallery">
                  <img
                    src={gallery}
                    className={classes.image}
                    alt="Gallery"
                    title="Gallery"
                  />
                  <div className={classes.overlay}>Gallery</div>
                </Link>
              </Card>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div>
                <Card className={classes.card}>
                  <Link to="/aboutUs">
                    <img
                      src={about}
                      className={classes.image}
                      alt="About US"
                      title="About US"
                    />
                    <div className={classes.overlaySmall}>About us</div>
                  </Link>
                </Card>
              </div>
              <div style={{ paddingTop: 28 }}>
                <Card className={classes.card}>
                  <Link to="/contactUs">
                    <img
                      src={contact}
                      className={classes.image}
                      alt="Contact US"
                      title="Contact US"
                    />
                    <div className={classes.overlaySmall}>Contact Us</div>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.Home2}>
        <Typography variant="h1" className={classes.h1}>
          Our Best Selling Product
        </Typography>
        <Divider variant="inset" className={classes.smallDivider} />
        <br />
        <br />
        {isLoading ? (
          <SpinnerInfinity
            size={100}
            thickness={100}
            speed={100}
            color="rgba(57, 113, 172, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        ) : (
          <Grid
            container
            spacing={2}
            className={classes.productGrid}
            justifyContent="center"
            alignItems="center"
          >
            {props.bestSelling.map((elem) => (
              <Grid item xs="auto" key={elem._id}>
                <ProductCard img={elem.img} name={elem.name}></ProductCard>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
