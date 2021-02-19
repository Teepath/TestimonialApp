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
    position: "absolute",
    top: "500px",
    left: "100px",
    right: "100px",
    margin: "auto",
    padding: "20px",
  },

  title: {
    display: "flex",
    justifyContent: "flex-start",
    position: "absolute",
    top: "220px",
  },

  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    position: "absolute",
    top: "20px",
  },
  gridWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "25px",
  },

  infoText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-between",
    position: "absolute",
    top: "250px",
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
    position: "absolute",
    top: "300px",
    width: "300px",
  },
}));

function ViewPage() {
  const classes = useStyles();
  const [userData, setUserDate] = useState([]);

  const displayUserData = () => {
    db.collection("testimonials")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let document = { id: doc.id, ...doc.data() };
          setUserDate((prevState) => [...prevState, document]);
        });
        // console.log(documents);
      });
  };

  console.log(userData);

  useEffect(() => {
    let display = displayUserData();
  }, []);

  return (
    <div className={classes.root}>
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
              <img src={res.imageUrl} className={classes.image} alt="picture" />
              <Typography variant="h6" className={classes.title}>
                {res.fullname}
              </Typography>
              <div className={classes.infoText}>
                <p className={classes.location}>{res.location}</p>
                <p className={classes.customer}> {res.usertype}</p>
              </div>
              <div className={classes.experience}>
                <p>{res.experience}</p>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default ViewPage;
