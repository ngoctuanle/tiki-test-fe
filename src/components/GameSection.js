import React from 'react';
import {Grid} from "@material-ui/core";
import AnotherPlayer from "./AnotherPlayer";
import YourPlayer from "./YourPlayer";

class GameSection extends React.Component {
    render(){
        return (
            <Grid container>
                <React.Fragment>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        <AnotherPlayer player_no={'3'} />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={4}>
                        <AnotherPlayer player_no={'2'} />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        <AnotherPlayer player_no={'4'} />
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        <YourPlayer player_no={'1'} />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </React.Fragment>
            </Grid>
        );
    }
}

export default GameSection;