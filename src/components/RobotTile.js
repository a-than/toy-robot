import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import toyRobot from '../img/toyRobot.png';

const useStyles = makeStyles(() => ({
    icon: {
        width: '100px',
        height: '100px'
    }
}));

const RobotTile = () => {
    const classes = useStyles();
    return <img src={toyRobot} className={classes.icon} alt="toyRobot" />;
};

export default RobotTile;