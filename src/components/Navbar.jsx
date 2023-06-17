import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../avatar.png";
import Footer from "./Footer.jsx";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import {
  ArrowForward,
  Apps,
  AssignmentInd,
  EmojiPeople,
  // ContactMail,
  Home,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  StyledClickableMenuDiv,
  StyledClickableNavDiv,
} from "./subComponents/StyledClickableDivs";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  forwardArrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
    marginLeft: "auto",
  },
  name: {
    color: "tan",
    marginRight: "auto",
    fontSize: "12px",
    backgroundColor: "transparent",
    "&:hover, &:focus": {
      backgroundColor: () => "tan",
      color: "#222",
    },
  },
  toolBar: {
    justifyContent: "end",
  },
  menuSliderContainer: {
    background: "#511",
    height: "100%",
    width: 250,
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    height: theme.spacing(13),
    width: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <EmojiPeople />, listText: "Overview", listPath: "/overview" },
  {
    listIcon: <AssignmentInd />,
    listText: "Experience",
    listPath: "/resume",
  },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  // { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Steve LeValley" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <StyledClickableMenuDiv>
            <ListItem
              button
              key={i}
              className={classes.listItem}
              onClick={() => setOpen(false)}
              component={Link}
              to={item.listPath}
            >
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText primary={item.listText} />
            </ListItem>
          </StyledClickableMenuDiv>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolBar}>
            <Tooltip title="Click to Copy">
              <Button
                variant="contained"
                className={classes.name}
                onClick={() =>
                  window.navigator.clipboard.writeText("slevalley@gmail.com")
                }
              >
                Contact - SLeValley@gmail.com
              </Button>
            </Tooltip>
            <StyledClickableNavDiv onClick={() => setOpen(true)}>
              <Typography variant="h5" className={classes.title}>
                Portfolio
              </Typography>
              <IconButton>
                <ArrowForward className={classes.forwardArrow} />
              </IconButton>
            </StyledClickableNavDiv>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
