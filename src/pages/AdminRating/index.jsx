import {
  Box,
  Button,
  IconButton,
  TablePagination,
  TextField,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import { useConfirm } from "material-ui-confirm";
import SearchBar from "material-ui-search-bar";
import moment from "moment";
import { useSnackbar } from "notistack";
import queryString from "query-string";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import NO_AVATAR from "../../assets/img/NO_AVATAR.png";
import ButtonSubmit from "../../components/ButtonSubmit";
import { removeAccents } from "../../constants/config";
import {
  AddRatingAction,
  DeleteRatingAction,
  DetailRatingAction,
} from "../../store/action/RentRoomsAction";
import useStyles from "./style";

const AdminRating = () => {
  const location = useLocation();
  const params = queryString.parse(location.search);
  const dispatch = useDispatch();
  const [showContentAdd, setShowContentAdd] = useState(false);
  const [contentRating, setContentRating] = useState("");
  const classes = useStyles({ showContentAdd });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searched, setSearched] = useState("");
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  const tableHeader = ["Author", "Avatar", "Comment", "Created_at", ""];
  useEffect(() => {
    dispatch(DetailRatingAction(params?.roomId));
  }, [params?.roomId, dispatch]);
  const { detailRating } = useSelector((state) => state.RentRoomsReducer);
  const filteredRows = detailRating.filter((row) => {
    return removeAccents(row?.content).includes(searched.toLowerCase());
  });
  const cancelSearch = () => {
    setSearched("");
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const handleAddContentRating = () => {
    if (contentRating === "") return;
    setShowContentAdd(false);
    setContentRating("");
    dispatch(
      AddRatingAction(params?.roomId, { content: contentRating }, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      })
    );
  };

  const handleDeleteRating = (idRating) => {
    confirm({
      description: (
        <Typography variant="body2">
          By clicking DELETE, this rating will be deleted
        </Typography>
      ),
      confirmationText: <Button color="secondary">DELETE</Button>,
      cancellationText: <Button color="primary">CANCLE</Button>,
    })
      .then(() =>
        dispatch(
          DeleteRatingAction(params?.roomId, idRating, (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          })
        )
      )
      .catch(() => console.log("deletion canclled"));
  };
  return (
    <div>
      {detailRating.length > 0 ? (
        <Fragment>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" color="primary">
              {detailRating[0]?.roomId?.name}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setShowContentAdd(true)}
              className={classes.btnAdd}
            >
              Thêm đánh giá
            </Button>
          </Box>

          <div className={classes.contentAdd}>
            <div className={classes.contentAdd__title}>
              <Typography variant="body2">Thêm đánh giá</Typography>
              <IconButton onClick={() => setShowContentAdd(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <TextField
              multiline
              rows={4}
              name="content"
              variant="outlined"
              label="Content"
              className={classes.add__rating}
              value={contentRating}
              onChange={(e) => setContentRating(e.target.value)}
            />

            <Box width="20%">
              <ButtonSubmit text="Thêm" handleSubmit={handleAddContentRating} />
            </Box>
          </div>

          <SearchBar
            value={searched}
            onChange={(searchVal) => setSearched(searchVal)}
            onCancelSearch={() => cancelSearch()}
            placeholder="Search by content"
            className={classes.inputSearch}
          />
          <TableContainer component={Paper} className={classes.container}>
            <Table
              className={classes.table}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {tableHeader.map((item) => (
                    <TableCell align="left" padding="normal">
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((rating) => (
                    <TableRow
                      key={rating._id}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                    >
                      <TableCell align="left">{rating?.userId?.name}</TableCell>
                      <TableCell align="left">
                        <img
                          src={rating?.userId?.avatar || NO_AVATAR}
                          alt="avatar"
                          className={classes.avatar}
                        />
                      </TableCell>

                      <TableCell align="left" className={classes.user__rating}>
                        {rating?.content}
                      </TableCell>
                      <TableCell align="left">
                        {moment(rating?.created_at).format("LLL")}
                      </TableCell>
                      <TableCell align="left">
                        <IconButton
                          color="secondary"
                          onClick={() => handleDeleteRating(rating._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={
              filteredRows?.length > 0
                ? filteredRows?.length
                : detailRating?.length
            }
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Fragment>
      ) : (
        <div>
          <div>
            <Box display="flex" justifyContent="space-between">
              {!showContentAdd && (
                <Typography variant="body2">
                  Phòng này chưa có đánh giá
                </Typography>
              )}
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setShowContentAdd(true)}
                className={classes.btnAdd}
              >
                Thêm đánh giá
              </Button>
            </Box>

            <div className={classes.contentAdd}>
              <div className={classes.contentAdd__title}>
                <Typography variant="body2">Thêm đánh giá</Typography>
                <IconButton onClick={() => setShowContentAdd(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
              <TextField
                multiline
                rows={4}
                name="content"
                variant="outlined"
                label="Content"
                className={classes.add__rating}
                value={contentRating}
                onChange={(e) => setContentRating(e.target.value)}
              />

              <Box width="20%">
                <ButtonSubmit
                  text="Thêm"
                  handleSubmit={handleAddContentRating}
                />
              </Box>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRating;
