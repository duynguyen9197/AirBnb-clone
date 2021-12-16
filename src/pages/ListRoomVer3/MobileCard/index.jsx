import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import useStyles from "./style";
import StarIcon from '@material-ui/icons/Star';
import { formMoney } from "../../../utilities/helper"


const MobileList = ({ listRooms, handleChangePage }) => {
    const classes = useStyles();

    return (
        <Fragment>
            {listRooms?.map((room, index) => (
                <Grid item xs={12}>
                    <div className={classes.card} onClick={() => handleChangePage(room._id)}>
                        <div className={classes.card__media}>
                            <img src={room.image} alt={room.name}
                                className={classes.card__media__img} />
                        </div>
                        <div className={classes.card__content}>

                            <div className={classes.card__content_evaluate}>
                                <span>
                                    <StarIcon className={classes.evaluate__icon} />
                                </span>
                                <span className={classes.evaluate__points}>
                                    {room.locationId.valueate}
                                </span>
                            </div>

                            <div className={classes.card__content__name}>
                                <h3>
                                    {room.name}
                                </h3>
                            </div>

                            <div className={classes.card__content__price}>
                                <p>
                                    {formMoney(room.price)} / <span>đêm</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>
            ))}
        </Fragment>
    );
};

export default MobileList;