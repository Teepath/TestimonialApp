import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    //   margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    margin: "auto",
  },
  paper: {
    height: 140,
    width: 100,
  },
  input: {
    width: "50%",
    margin: "0.2rem",
  },
  textArea: {
    width: "50%",
    height: "auto",
    margin: "0.2rem",
  },

  button: {
    width: "20%",
    margin: "2rem",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function InputForn({ setState, state, handleSubmit, handleImageAsFile }) {
  const classes = useStyles();

  const users = ["vendor", "customer"];

  return (
    <Grid xs={12} sm="12" md="12">
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="fullname"
          name="fullname"
          value={state.fullname}
          className={classes.input}
          label="Fullname"
          variant="filled"
          fullWidth
          onChange={(e) => setState({ ...state, fullname: e.target.value })}
        />
        <TextField
          id="location"
          name="location"
          label="Location"
          className={classes.input}
          value={state.location}
          variant="filled"
          onChange={(e) => setState({ ...state, location: e.target.value })}
        />
        <TextField
          id="usertype"
          name="usertype"
          className={classes.input}
          select
          label=" Please select your user's type"
          value={state.usertype}
          onChange={(e) => setState({ ...state, usertype: e.target.value })}
        >
          {users.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextareaAutosize
          className={classes.textArea}
          rows={4}
          id="experience"
          name="experience"
          value={state.experience}
          rowsMax={4}
          aria-label="Your Exeprience"
          placeholder="Write to us your experience"
          onChange={(e) => setState({ ...state, experience: e.target.value })}
        />
        <TextField
          type="file"
          label="Please Upload Picture"
          onChange={handleImageAsFile}
        />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Primary
        </Button>
      </form>
    </Grid>
  );
}

export default InputForn;
