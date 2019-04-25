import React from 'react';
import { Grid } from '@material-ui/core';
import TopSection from "./TopSection";
import GameSection from "./GameSection";

class Container extends React.Component {
    render() {
        return (
            <Grid
                container
                className='center-container'
                justify='center'
            >
                <Grid item xs={12} md={6}>
                    <Grid
                        container
                        spacing={8}
                        alignItems='stretch'
                        direction='column'
                        justify='center'
                    >
                        <TopSection />
                        <GameSection />
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default Container;