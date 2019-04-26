import React from 'react';
import {CircularProgress, Grid} from '@material-ui/core';

class Splash extends React.Component {
    render(){
        return(
            <Grid
                container
                style={{flexGrow:1}}
                justify='center'
                alignItems='center'
                direction='row'
            >
                <Grid item xs={12} md={4}>
                    <Grid
                        container
                        direction='column'
                        alignItems='center'
                        justify='center'
                        style={{paddingTop: 100}}
                    >
                        <CircularProgress size={100}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Splash;
