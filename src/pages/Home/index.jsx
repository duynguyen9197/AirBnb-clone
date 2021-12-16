import React, { useEffect } from "react";
import ExploreNearby from "./ExploreNearby";
import ExploreToExp from "./ExploreToExp";
import HomeBanner from "./HomeBanner";
import News from "./News";
import Stay from "./Stay";
import useStyles from "./style";


const Home = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={classes.root}>
      <HomeBanner />
      <ExploreNearby />
      <Stay />
      <News />
      <ExploreToExp />

    </div>
  );
};

export default Home;
