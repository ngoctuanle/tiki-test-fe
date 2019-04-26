import React from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import TopSection from "./TopSection";
import GameSection from "./GameSection";
import Splash from "./Splash";
import {getDeckRequest, getDeckSuccess, requestFail} from "../actions";
import {getNewDeck} from "../services/DeckServices";
import DeckViewModel from "../models/DeckViewModel";

class Container extends React.Component {
    componentDidMount() {
        this.props.dispatch(getDeckRequest({}));
        getNewDeck()
            .then((res: DeckViewModel) => {
                this.props.dispatch(getDeckSuccess({deck: res}));
            })
            .catch(e => {
                console.log(e);
                this.props.dispatch(requestFail(e))
            })
    }

    render() {
        if (this.props.waiting) {
            return <Splash/>
        }

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
                        <TopSection/>
                        <br/>
                        <GameSection/>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        waiting: state.DeckReducer.waiting
    }
};

export default connect(mapStateToProps)(Container);