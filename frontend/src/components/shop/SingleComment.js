import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Rating from "@mui/material/Rating";
import classes from './SingleComment.module.scss'
import male from "../../assets/male.png";
import female from "../../assets/female.png";
const SingleComment = (props) => {
    return (
        <div className={classes.singleComment}>
            <div className={classes.top}>
                <Avatar alt='Avatar' className={classes.avatar} style={{ height: '50px', width: '50px' }} src={props.gender === "female" ? female : male} />
                <div className={classes.profile}>
                    <p className={classes.name} >{props.username}</p>
                    <Rating value={props.grade} readOnly size='small' />
                </div>
            </div>
            <div className={classes.bottom}>
                <h2 className={classes.comment}>{props.comment}</h2>
            </div>
        </div>
    )
}

export default SingleComment
