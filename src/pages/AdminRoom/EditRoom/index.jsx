import {
  Box,
  Button,
  Card,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import TextFieldComponent from "../../../components/Login/TextField";
import {
  DeleteRoomAction,
  UpdateDetailRoomAction,
  UpdateImageRoomAction,
} from "../../../store/action/RentRoomsAction";
import useStyles from "./style";

const schema = yup.object().shape({
  name: yup.string().required("*Name is required"),
  description: yup.string().required("*Description is required"),
  price: yup.number().required("*Price is required"),
  bedRoom: yup.number().required("*Price is required"),
  bath: yup.number().required("*Price is required"),
  guests: yup.number().required("*Price is required"),
});
const EditRoom = ({ room, params }) => {
  const classes = useStyles();
  const confirm = useConfirm();
  const dispatch = useDispatch();
  const [image, setImage] = useState(room?.image);
  const [fileData, setFileData] = useState({ image: null });
  const { enqueueSnackbar } = useSnackbar();

  const [checkbox, setCheckBox] = useState({
    elevator: room?.elevator,
    hotTub: room?.hotTub,
    pool: room?.pool,
    indoorFireplace: room?.indoorFireplace,
    dryer: room?.dryer,
    gym: room?.gym,
    kitchen: room?.kitchen,
    wifi: room?.wifi,
    heating: room?.heating,
    cableTV: room?.cableTV,
  });

  const formik = useFormik({
    validateOnMount: true,
    validationSchema: schema,
    enableReinitialize: true,
    initialValues: {
      name: room?.name,
      guests: room?.guests,
      bedRoom: room?.bedRoom,
      bath: room?.bath,
      description: room?.description,
      price: room?.price,
      locationId: params?.locationId,
    },
  });

  const handleChangeCheckBox = (event) => {
    setCheckBox({ ...checkbox, [event.target.name]: event.target.checked });
  };
  const handleDeleteRoom = (idroom) => {
    confirm({
      description: (
        <Typography variant="body2">
          By clicking DELETE, this room will be deleted
        </Typography>
      ),
      confirmationText: <Button color="secondary">DELETE</Button>,
      cancellationText: <Button color="primary">CANCLE</Button>,
    })
      .then(() =>
        dispatch(
          DeleteRoomAction(idroom, params?.locationId, (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          })
        )
      )
      .catch(() => console.log("deletion canclled"));
  };
  const handleChangeFile = async (e) => {
    await setFileData({ image: e.target.files[0] });
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImage(e.target.result);
      };
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    const formData = new FormData();
    formData.append("room", fileData.image);
    dispatch(
      UpdateDetailRoomAction(
        room?._id,
        { ...formik.values, ...checkbox },
        params?.locationId,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        }
      )
    );
    if (fileData?.image !== null) {
      dispatch(UpdateImageRoomAction(room?._id, formData, params?.locationId));
    }
  };
  return (
    <Box m={3}>
      <form onSubmit={handleSubmitForm}>
        <div className={classes.root}>
          <Box display="flex" width="100%">
            <Card className={classes.card}>
              <CardMedia image={image} className={classes.card__image}>
                <div className={classes.card__hover}>
                  <div className={classes.card__upload__image}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      name="image"
                      onChange={handleChangeFile}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        Upload
                      </Button>
                    </label>
                  </div>
                </div>
              </CardMedia>
            </Card>
            <Box pl={3}>
              <div className={classes.name}>
                <Typography variant="body2">Name</Typography>

                <TextFieldComponent
                  variant="outlined"
                  name="name"
                  {...formik}
                  valueInput={formik.values.name}
                  errorInput={formik.errors.name}
                  touchedInput={formik.touched.name}
                />
              </div>
              <div className={classes.description}>
                <Typography variant="body2">Description</Typography>
                <TextField
                  multiline
                  rows={4}
                  name="description"
                  variant="outlined"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && (
                  <Typography variant="span" color="secondary">
                    {formik.errors.description}
                  </Typography>
                )}
              </div>
            </Box>
            <Box pl={3} alignSelf="center">
              <Box className={classes.input__numbers__room}>
                <TextFieldComponent
                  variant="outlined"
                  label="Price"
                  name="price"
                  {...formik}
                  valueInput={formik.values.price}
                  errorInput={formik.errors.price}
                  touchedInput={formik.touched.price}
                  fontSize="small"
                />
              </Box>
              <Box className={classes.input__numbers__room}>
                <TextFieldComponent
                  variant="outlined"
                  label="Bed Room"
                  name="bedRoom"
                  {...formik}
                  valueInput={formik.values.bedRoom}
                  errorInput={formik.errors.bedRoom}
                  touchedInput={formik.touched.bedRoom}
                  fontSize="small"
                />
              </Box>
              <Box pt={2} className={classes.input__numbers__room}>
                <TextFieldComponent
                  variant="outlined"
                  label="Guests"
                  name="guests"
                  {...formik}
                  valueInput={formik.values.guests}
                  errorInput={formik.errors.guests}
                  touchedInput={formik.touched.guests}
                  fontSize="small"
                />
              </Box>
              <Box pt={2} className={classes.input__numbers__room}>
                <TextFieldComponent
                  variant="outlined"
                  label="Bath Room"
                  name="bath"
                  {...formik}
                  valueInput={formik.values.bath}
                  errorInput={formik.errors.bath}
                  touchedInput={formik.touched.bath}
                  fontSize="small"
                />
              </Box>
            </Box>
          </Box>

          <Grid container style={{ marginLeft: 25 }}>
            <Grid item xs={5}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.elevator}
                    onChange={handleChangeCheckBox}
                    name="elevator"
                    color="primary"
                  />
                }
                label="Elevator"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.hotTub}
                    onChange={handleChangeCheckBox}
                    name="hotTub"
                    color="primary"
                  />
                }
                label="Hot Tub"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.pool}
                    onChange={handleChangeCheckBox}
                    name="pool"
                    color="primary"
                  />
                }
                label="Pool"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.indoorFireplace}
                    onChange={handleChangeCheckBox}
                    name="indoorFireplace"
                    color="primary"
                  />
                }
                label="Indoor Fireplace"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.dryer}
                    onChange={handleChangeCheckBox}
                    name="dryer"
                    color="primary"
                  />
                }
                label="Dryer"
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.gym}
                    onChange={handleChangeCheckBox}
                    name="gym"
                    color="primary"
                  />
                }
                label="Gym"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.kitchen}
                    onChange={handleChangeCheckBox}
                    name="kitchen"
                    color="primary"
                  />
                }
                label="Kitchen"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.wifi}
                    onChange={handleChangeCheckBox}
                    name="wifi"
                    color="primary"
                  />
                }
                label="Wifi"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.heating}
                    onChange={handleChangeCheckBox}
                    name="heating"
                    color="primary"
                  />
                }
                label="Heating"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.cableTV}
                    onChange={handleChangeCheckBox}
                    name="cableTV"
                    color="primary"
                  />
                }
                label="CableTV"
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.content__actions}>
          <Button
            className={classes.btnDelete}
            variant="contained"
            onClick={() => handleDeleteRoom(room?._id)}
          >
            Delete
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.btnUpdate}
            onClick={handleSubmitForm}
          >
            Update
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default EditRoom;
