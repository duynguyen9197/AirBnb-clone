import { Typography } from "@material-ui/core";
import { TreeItem } from "@material-ui/lab";
import useStyles from "./style";

const ContentTreeItem = (props) => {
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,

    ...other
  } = props;
  const classes = useStyles({ color, bgColor });

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption">{labelInfo}</Typography>
        </div>
      }
      {...other}
    />
  );
};

export default ContentTreeItem;
