import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import {
    shuffleDeckRequest,
    shuffleDeckSuccess,
    requestFail,
    drawDeckRequest,
    drawDeckSuccess,
    gameSetDeck
} from "../actions";
import {shuffleDeck, drawDeck} from "../services/DeckServices";
import DeckViewModel from "../models/DeckViewModel";
import {PLAYERS_NUM} from "../constants";

class TopSection extends React.Component {
    onShuffle = (e) => {
        e.preventDefault();
        const deck: DeckViewModel = this.props.deck;

        this.props.dispatch(shuffleDeckRequest({}));
        shuffleDeck(deck.deck_id)
            .then(res => {
                this.props.dispatch(shuffleDeckSuccess({deck: res}));
            })
            .catch(e => {
                console.log(e);
                this.props.dispatch(requestFail(e))
            })
    };

    onDraw = (e) => {
        e.preventDefault();
        const deck: DeckViewModel = this.props.deck;

        this.props.dispatch(drawDeckRequest({}));
        const drawPromises = [];
        for(let i = 0; i < PLAYERS_NUM; i++) {
            drawPromises.push(drawDeck(deck.deck_id));
        }
        Promise.all(drawPromises).then(response => {
            response.forEach((deck, index) => {
               this.props.dispatch(gameSetDeck({deck: deck, player_no: `${index + 1}`}))
            });
            this.props.dispatch(drawDeckSuccess({deck: deck}));
        })
    };

    onReveal = (e) => {
        e.preventDefault();
    };

    render(){
        const { players_score, round_no, deck } = this.props;
        console.log(deck);
        return (
            <div>
                <div className='top-section-container'>
                    <div className='top-section-button'>
                        <Button variant="contained" color="primary" onClick={this.onShuffle} >
                            Shuffle
                        </Button>
                    </div>
                    <div className='top-section-button'>
                        <Button variant="contained" color="primary" onClick={this.onDraw} >
                            Draw
                        </Button>
                    </div>
                    <div className='top-section-button'>
                        <Button variant="contained" color="primary" onClick={this.onReveal}>
                            Reveal
                        </Button>
                    </div>
                    <div className='top-section-score-broad'>
                        {`Your score: ${players_score['1'] || 0}`}
                    </div>
                </div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    {`Round: ${round_no + 1}`}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    players_score: state.GameReducer.players_score,
    round_no: state.GameReducer.round_no,
    deck: state.DeckReducer.deck
});

export default connect(mapStateToProps)(TopSection);