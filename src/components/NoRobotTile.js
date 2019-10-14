import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    icon: {
        width: '100px',
        height: '100px'
    }
}));

const NoRobotTile = () => {
    const classes = useStyles();
    return (
        <SvgIcon className={classes.icon} viewBox="0 0 100 100">
            <svg width="100px" height="100px">
                <rect width="100px" height="100px" rx="15" fill="#02d5d9" />
            </svg>
        </SvgIcon>
    );
};

export default NoRobotTile;

