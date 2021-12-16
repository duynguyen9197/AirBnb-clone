import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import clsx from "clsx";
import React, { Fragment } from "react";
import { useRouteMatch } from "react-router";
import useStyles from "./style";

const GuestCount = ({ numbersFilter, setNumbersFilter }) => {
  const classes = useStyles();
  const matchUrl = useRouteMatch();
  const detailpageRoute = matchUrl.path === "/detail/:roomId";

  const handleAddAdult = () => {
    if (numbersFilter._adult >= 9) return;
    setNumbersFilter({ ...numbersFilter, _adult: numbersFilter._adult + 1 });
  };
  const handleMinusAdult = () => {
    if (detailpageRoute && numbersFilter._adult < 2) return;
    if (numbersFilter._adult < 1) return;
    setNumbersFilter({ ...numbersFilter, _adult: numbersFilter._adult - 1 });
  };
  const handleAddBaby = () => {
    if (numbersFilter._children >= 5) return;
    setNumbersFilter({
      ...numbersFilter,
      _children: numbersFilter._children + 1,
    });
  };
  const handleMinusBaby = () => {
    if (numbersFilter._children < 1) return;
    setNumbersFilter({
      ...numbersFilter,
      _children: numbersFilter._children - 1,
    });
  };
  const handleAddToddler = () => {
    if (numbersFilter._toddler > 3) return;
    setNumbersFilter({
      ...numbersFilter,
      _toddler: numbersFilter._toddler + 1,
    });
  };
  const handleMinusToddler = () => {
    if (numbersFilter._toddler < 1) return;
    setNumbersFilter({
      ...numbersFilter,
      _toddler: numbersFilter._toddler - 1,
    });
  };
  return (
    <Fragment>
      {/*  Adult */}
      <div className={classes.content}>
        <Typography variant="h5" className={classes.filter__name}>
          Người lớn
        </Typography>
        <Box>
          <button
            className={
              numbersFilter._adult >= 1
                ? classes.filter__btn
                : clsx(classes.filter__btn, classes.filter__btn__disabled)
            }
            onClick={handleMinusAdult}
          >
            -
          </button>
          <Typography variant="span">{numbersFilter._adult}</Typography>
          <button
            className={
              numbersFilter._adult < 9
                ? classes.filter__btn
                : clsx(classes.filter__btn, classes.filter__btn__disabled)
            }
            onClick={handleAddAdult}
          >
            +
          </button>
        </Box>
      </div>

      {/* Baby */}

      <div className={classes.content}>
        <Typography variant="h5" className={classes.filter__name}>
          Trẻ em
          <Typography variant="body2">Độ tuổi 2-12</Typography>
        </Typography>
        <Box>
          <button
            className={
              numbersFilter._children > 0
                ? classes.filter__btn
                : clsx(classes.filter__btn, classes.filter__btn__disabled)
            }
            onClick={handleMinusBaby}
          >
            -
          </button>
          <Typography variant="span">{numbersFilter._children}</Typography>
          <button
            className={
              numbersFilter._children < 5
                ? classes.filter__btn
                : clsx(classes.filter__btn, classes.filter__btn__disabled)
            }
            onClick={handleAddBaby}
          >
            +
          </button>
        </Box>
      </div>

      {/* Toddler */}
      <div className={classes.content}>
        <Typography variant="h5" className={classes.filter__name}>
          Em bé
          <Typography variant="body2">Dưới 2</Typography>
        </Typography>

        <Box>
          <button
            className={
              numbersFilter._toddler > 0
                ? classes.filter__btn
                : clsx(classes.filter__btn, classes.filter__btn__disabled)
            }
            onClick={handleMinusToddler}
          >
            -
          </button>
          <Typography variant="span">{numbersFilter._toddler}</Typography>
          <button
            className={
              numbersFilter._toddler < 4
                ? classes.filter__btn
                : clsx(classes.filter__btn, classes.filter__btn__disabled)
            }
            onClick={handleAddToddler}
          >
            +
          </button>
        </Box>
      </div>

      <Typography variant="span">
        Tối đa 14 khách. Không tính em bé vào số lượng khách.
      </Typography>
    </Fragment>
  );
};

export default GuestCount;
