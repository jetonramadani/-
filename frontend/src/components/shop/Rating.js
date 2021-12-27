import * as React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon fontSize="large" />,
        label: 'Very Dissatisfied',

    },
    2: {
        icon: <SentimentDissatisfiedIcon fontSize="large" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon fontSize="large" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon fontSize="large" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon fontSize="large" />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};
const CustomRating = (props) => {
    const rateHandler = (event, value) => {
        props.onChange("grade", value)

    }
    return (
        <Rating
            name="highlight-selected-only"
            defaultValue={3}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
            value={props.value}
            onChange={rateHandler}
            size="large"
        />
    );
}

export default CustomRating;