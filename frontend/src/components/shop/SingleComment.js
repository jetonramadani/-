/* eslint-disable */
import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import Rating from "@mui/material/Rating";
import classes from './SingleComment.module.scss'
const SingleComment = () => {
    return (
        <div>
            <div className={classes.top}>
                <Avatar alt='Avatar' className={classes.avatar} />
                <div className={classes.profile}>
                    <p className={classes.name}>Guxim Selmani</p>
                    <Rating value={2} readOnly size='small' />
                </div>
            </div>
            <div className={classes.bottom}>
                <p className={classes.comment}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
        </div>
    )
}

export default SingleComment
