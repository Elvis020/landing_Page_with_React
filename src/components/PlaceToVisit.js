import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "../ImageCard";
import places from "../static/places";
import useWindowPosition from "../hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

function PlaceToVist() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div id="place-to-visit" className={classes.root}>
      {places.map((item, index) => (
        <ImageCard key={index} place={item} checked={checked} />
      ))}
    </div>
  );
}

export default PlaceToVist;
