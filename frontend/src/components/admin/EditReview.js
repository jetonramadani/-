/* eslint-disable */
import { Button } from '@material-ui/core'
import React from 'react'

const EditReview = (props) => {
    return (
        <div>
            <h4>{props.username}</h4>
            <p>{props.comment}</p>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={props.onDelete.bind(this, props.id)}
            >
                Избриши
            </Button>
        </div>
    )
}

export default EditReview
