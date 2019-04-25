import React from 'react';
import {Grid} from "@material-ui/core";
import { Person, PersonOutline } from "@material-ui/icons";

class GameSection extends React.Component {
    render(){
        return (
            <Grid container>
                <React.Fragment>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        <PersonOutline />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={4}>
                        <PersonOutline />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        <PersonOutline />
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        <Person />
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                </React.Fragment>
            </Grid>
        );
    }
}

export default GameSection;