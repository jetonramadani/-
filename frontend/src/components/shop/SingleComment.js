/* eslint-disable */
import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Rating from "@mui/material/Rating";
import classes from './SingleComment.module.scss'
const SingleComment = (props) => {
    return (
        <div>
            <div className={classes.top}>
                <Avatar alt='Avatar' className={classes.avatar} style={{ height: '50px', width: '50px' }} />
                <div className={classes.profile}>
                    <p className={classes.name} >{props.username}</p>
                    <Rating value={props.grade} readOnly size='small' />
                </div>
            </div>
            <div className={classes.bottom}>
                <p className={classes.comment}>{props.comment}</p>
            </div>
        </div>
    )
}

export default SingleComment
