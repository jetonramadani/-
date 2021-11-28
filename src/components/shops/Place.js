/* eslint-disable */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "0.8rem",
        width: "100%",
        border: "1px solid black",
        maxWidth: "93%",
        backgroundColor: '#CFFFF6',
        "&:hover": {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
            opacity: 1,
            transition: '0.5s',
            cursor: 'pointer',
            backgroundColor: 'lightgreen'
        }

    },
    inline: {
        display: "inline"
    }
}));

const Place = (props) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fone-click-shopping&psig=AOvVaw25QsFlL8d4kbE988OADYcZ&ust=1638185994686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjGiMT8uvQCFQAAAAAdAAAAABAw"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Ali Connors
                            </Typography>
                            <br />
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
};

export default Place;
