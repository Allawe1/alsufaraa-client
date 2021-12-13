import { Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import { useDispatch, connect } from "react-redux";
import { getProductGategorys } from "../../redux/actions/productGategory";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { SpinnerInfinity } from "spinners-react";
const mapStateToProps = (state) => {
  return {
    productGategorys: state.productGategorys,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductGategorys: () => dispatch(getProductGategorys()),
  };
};

function Product(props) {
  const [isLoading, setLoading] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    props.getProductGategorys();
    if (props.productGategorys) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.main}>
      <Typography variant="h2" className={classes.h2}>
        Welcome to our Products!
      </Typography>
      <Divider variant="inset" className={classes.bigDivider} />
      <Typography variant="h1" className={classes.h1}>
        Choose what you are looking for
      </Typography>
      <Divider variant="inset" className={classes.smallDivider} />
      {isLoading ? (
        <SpinnerInfinity
          size={100}
          thickness={100}
          speed={100}
          color="rgba(57, 113, 172, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <Grid container spacing={8} justifyContent="center" alignItems="center">
          {props.productGategorys.map((elem) => (
            <ProductCard {...elem} key={elem._id} />
          ))}
        </Grid>
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
