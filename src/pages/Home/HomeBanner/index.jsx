import React from 'react';
import useStyles from './style';
import bgImgW960 from '../../../assets/img/bgImgW960.webp';
import bgImgW774 from '../../../assets/img/bgImgW774.webp';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const HomeBanner = () => {

    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'))
    const classes = useStyles({ bgImgW774, bgImgW960, isTablet })
    return (
        <div className={classes.banner}>
        </div>
    );
};

export default HomeBanner;