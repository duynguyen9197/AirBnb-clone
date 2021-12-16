import {
  Button,
  IconButton,
  TablePagination,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useConfirm } from "material-ui-confirm";
import SearchBar from "material-ui-search-bar";
import moment from "moment";
import { useSnackbar } from "notistack";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import NO_AVATAR from "../../assets/img/NO_AVATAR.png";
import { removeAccents } from "../../constants/config";
import {
  deleteUserAction,
  getListUser,
} from "../../store/action/ManageUserAction";
import useStyles from "./style";

const AdminUser = ({ handleToggleUser }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);
  const { userList } = useSelector((state) => state.ManageUserReducer);
  const history = useHistory();
  const confirm = useConfirm();
  const [searched, setSearched] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const tableHeader = [
    "Name",
    "Avatar",
    "Email",
    "Birth Day",
    "Gender",
    "Type",
    "Address",
    "",
  ];
  const handleDeleteUser = (idUser) => {
    confirm({
      description: (
        <Typography variant="body2">
          By clicking DELETE, this user will be deleted
        </Typography>
      ),
      confirmationText: <Button color="secondary">DELETE</Button>,
      cancellationText: <Button color="primary">CANCLE</Button>,
    })
      .then(() =>
        dispatch(
          deleteUserAction(idUser, (mes) => {
            enqueueSnackbar(mes, { variant: "success" });
          })
        )
      )
      .catch(() => console.log("deletion canclled"));
  };

  const filteredRows = userList.filter((row) => {
    return removeAccents(row?.name).includes(searched.toLowerCase());
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

  return (
    <Fragment>
      <SearchBar
        value={searched}
        onChange={(searchVal) => setSearched(searchVal)}
        onCancelSearch={() => cancelSearch()}
        placeholder="Search by name"
        className={classes.inputSearch}
      />
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
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
              ?.map((user) => (
                <TableRow key={user._id} hover role="checkbox" tabIndex={-1}>
                  <TableCell align="left">{user?.name}</TableCell>
                  <TableCell align="left">
                    <img
                      src={user?.avatar || NO_AVATAR}
                      alt="avatar"
                      className={classes.avatar}
                    />
                  </TableCell>
                  <TableCell align="left">{user?.email}</TableCell>
                  <TableCell align="left">
                    {moment(user?.birthday).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell align="left">
                    {user?.gender === true ? "Male" : "Female"}
                  </TableCell>
                  <TableCell align="left">{user?.type}</TableCell>
                  <TableCell align="left">{user?.address}</TableCell>
                  <TableCell align="left">
                    <IconButton
                      color="primary"
                      onClick={(e) => {
                        history.push(`/admin/user/edit/${user._id}`);
                        handleToggleUser(e, ["1"]);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteUser(user._id)}
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
          filteredRows?.length > 0 ? filteredRows?.length : userList?.length
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Fragment>
  );
};

export default AdminUser;
