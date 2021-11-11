import { Card, Divider, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { getProductGategorys } from "../../redux/actions/productGategory";
import ProductCard from "./ProductCard";
export function Product() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    dispatch(getProductGategorys());
  }, [dispatch]);

  var productGategorys = useSelector((state) => state.productGategorys);

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

      <Grid container spacing={8} justifyContent="center" alignItems="center">
        {productGategorys.map((elem) => (
          <ProductCard
            name={elem.name}
            img={elem.img}
            id={elem._id}
            key={elem._id}
          />
        ))}
      </Grid>
    </div>
  );
}
