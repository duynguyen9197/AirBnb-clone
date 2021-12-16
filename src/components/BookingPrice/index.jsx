import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { formMoney } from "../../utilities/helper";
import useStyles from "./style";

const BookingPrice = ({ detailRoom, totalDate }) => {
  const totalPrice = () => {
    return totalDate < 7
      ? formMoney(detailRoom?.price * totalDate + 100000)
      : totalDate > 30
        ? formMoney(detailRoom?.price * (totalDate - 5) + 100000)
        : formMoney(detailRoom?.price * (totalDate - 1) + 100000);
  };
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.booking__payment}>
        <div className={classes.booking__payment__content}>
          <Typography variant="body2">
            {formMoney(detailRoom?.price)} x {totalDate} đêm
          </Typography>
          <Typography variant="span">
            {formMoney(detailRoom?.price * totalDate)}
          </Typography>
        </div>
        <div className={classes.booking__payment__content}>
          {totalDate < 7 ? null : totalDate < 30 ? (
            <Fragment>
              <Typography variant="body2" className={classes.booking__saleFor}>
                Giảm giá theo tuần
              </Typography>
              <Typography variant="span">
                -{formMoney(detailRoom?.price)}
              </Typography>
            </Fragment>
          ) : (
            <Fragment>
              <Typography variant="body2">Giảm giá theo tháng </Typography>
              <Typography variant="span" className={classes.booking__saleFor}>
                - {formMoney(detailRoom?.price * 5)}
              </Typography>
            </Fragment>
          )}
        </div>
        <div className={classes.booking__payment__content}>
          <Typography variant="body2" className={classes.service__fees}>Phí dịch vụ</Typography>
          <Typography variant="span"> {formMoney(100000)}</Typography>
        </div>
      </div>
      <div className={classes.booking__payment__content}>
        <Typography variant="h4">Tổng</Typography>
        <Typography variant="h4">{totalPrice()}</Typography>
      </div>
    </Fragment>
  );
};

export default BookingPrice;
