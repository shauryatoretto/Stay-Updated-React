import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
  },
  link: {
    backgroundColor: "#3f51b5",
    padding: 10,
    margin: 10,
    textDecoration: "none",
  },
  drawer: {
    alignItems: "center",
    justifyContent: "center",
    color: "#3f51b5",
  },
  about: {
      textDecoration: "None",
      color: "#fff",
      fontSize: "1.2rem"
  },
  button: {
    backgroundColor: "#3f51b5",
    color: "white",
    margin: 20,
    marginRight: 100,
    fontSize: 20,
    "&:hover": {
      background: "#3f51b5",
    },
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    open === false ? setOpen(true) : setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Stay Updated - {props.name}
          </Typography>
          <a className={classes.about} href="https://shauryasuman.netlify.app/">Contact</a>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleToggle}
        className={classes.drawer}
      >
        <Link to="/" className={classes.link}>
          <Button className={classes.button}>Top Headlines</Button>
        </Link>
        <Link to="/business" className={classes.link}>
          <Button className={classes.button}>Business</Button>
        </Link>
        <Link to="/entertainment" className={classes.link}>
          <Button className={classes.button}>Entertainment</Button>
        </Link>
        <Link to="/health" className={classes.link}>
          <Button className={classes.button}>Health</Button>
        </Link>
        <Link to="/science" className={classes.link}>
          <Button className={classes.button}>Science</Button>
        </Link>
        <Link to="/sports" className={classes.link}>
          <Button className={classes.button}>Sports</Button>
        </Link>
        <Link to="/technology" className={classes.link}>
          <Button className={classes.button}>Technology</Button>
        </Link>
      </Drawer>
    </div>
  );
}
