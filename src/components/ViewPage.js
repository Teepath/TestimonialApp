import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import image from "../assets/img/christian.jpg";
import config from "../config/config";

const db = config.firestore;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    borderRadius: "10%",
    backGroundColor: "#FFFFFF",
    position: "relative",

    margin: "auto",
    padding: "20px",
  },

  title: {
    display: "flex",
    justifyContent: "flex-start",
    // position: "relative",
    // top: "232px",
  },

  imageWraper: {
    position: "relative",
    lef: "0px",
    top: "10px",
    bottom: "100px",
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  },
  gridWrapper: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    padding: "25px",
    position: "relative",
  },

  infoText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-between",
    // position: "relative",
    // top: "250px",
  },

  location: {
    position: "static",
    width: "53px",
    height: "18px",
    top: "6px",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "15px",
    color: "#535353",
  },

  customer: {
    left: "7px",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "16px",
    color: "#0D019A",
  },
  experience: {
    position: "relative",
    top: "300px",
    width: "300px",
  },
}));

function ViewPage({ load, userData }) {
  const classes = useStyles();

  console.log(userData);

  return (
    <div className={classes.root}>
      {load ? "Loading...." : null}
      <Grid container>
        {userData &&
          userData.map((res) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              className={classes.gridWrapper}
              key={res.id}
            >
              <div className={classes.imageWraper}>
                <img
                  src={res.imageUrl}
                  className={classes.image}
                  alt="picture"
                />
                <div>
                  <Typography variant="h6">{res.fullname}</Typography>
                </div>
                <div className={classes.infoText}>
                  <p className={classes.location}>{res.location}</p>
                  <p className={classes.customer}> {res.usertype}</p>
                </div>
                <p>{res.experience}</p>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default ViewPage;
