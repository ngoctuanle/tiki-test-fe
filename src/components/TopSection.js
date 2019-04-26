import React from 'react';
import { connect } from 'react-redux';
import {Button, CircularProgress} from '@material-ui/core';
import _ from 'lodash';
import {
    shuffleDeckRequest,
    shuffleDeckSuccess,
    requestFail,
    drawDeckRequest,
    drawDeckSuccess,
    gameSetDeck,
    revealCard, gameResetRound, gameSetScore
} from "../actions";
import {shuffleDeck, drawDeck} from "../services/DeckServices";
import DeckViewModel from "../models/DeckViewModel";
import {BET_SCORE, PLAYERS_NUM} from "../constants";
import CardViewModel from "../models/CardViewModel";

class TopSection extends React.Component {
    constructor(props) {
        super(props);
        this.normal = true;
    }

    onShuffle = () => {
        const deck: DeckViewModel = this.props.deck;

        this.props.dispatch(shuffleDeckRequest({}));
        shuffleDeck(deck.deck_id)
            .then(res => {
                this.props.dispatch(shuffleDeckSuccess({deck: res}));
                if (!this.normal) {
                    this.normal = true;
                    this.onDraw();
                }
            })
            .catch(e => {
                console.log(e);
                this.props.dispatch(requestFail(e))
            })
    };

    onDraw = () => {
        const deck: DeckViewModel = this.props.deck;

        this.props.dispatch(drawDeckRequest({}));
        const drawPromises = [];
        for(let i = 0; i < PLAYERS_NUM; i++) {
            drawPromises.push(drawDeck(deck.deck_id).then(res => { return res }));
        }
        Promise.all(drawPromises).then(response => {
            response.forEach((deck, index) => {
               this.props.dispatch(gameSetDeck({deck: deck, player_no: `${index + 1}`}))
            });
            this.props.dispatch(drawDeckSuccess({deck: response[response.length - 1]}));
        })
    };

    onReveal = () => {
        const { players_deck } = this.props;
        if (Object.keys(players_deck).length > 0) {
            const playerScores = {};
            Object.keys(players_deck).forEach(playerNo => {
               const playerCards = players_deck[playerNo].cards;
               playerScores[playerNo] = {
                   jqk: _.sumBy(playerCards, (card: CardViewModel) => this.checkJQK(card.value)),
                   value: this.getPoint(_.sumBy(playerCards, (card: CardViewModel) => this.convertValue(card.value)))
               }
            });

            const playerWins = [];
            const maxValue = _.max(_.map(playerScores, item => item.value));
            Object.keys(playerScores).forEach(playerId => {
               const playerScore = playerScores[playerId];
               if (playerScore.jqk === 3) playerWins.push(playerId);
               if (playerScore.value === maxValue && playerScore.jqk !== 3) playerWins.push(playerId);
            });

            const plusPoint = (PLAYERS_NUM * BET_SCORE) / (playerWins.length);
            playerWins.forEach(player_no => {
                this.props.dispatch(gameSetScore({player_no, score: Math.round(plusPoint)}))
            });

            this.props.dispatch(revealCard({players_win: playerWins}));
        } else {
            alert('Please Draw Card First!')
        }
    };

    getPoint = (value) => {
        return Number(`${value}`[`${value}`.length - 1]);
    };

    checkJQK = (value) => {
        switch (value) {
            case "JACK":
            case "QUEEN":
            case "KING":
                return 1;
            default:
                return 0;
        }
    };

    convertValue = (value) => {
        switch (value) {
            case "ACE":
                return 1;
            case "JACK":
            case "QUEEN":
            case "KING":
                return 10;
            default:
                return Number(value);
        }
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        const { deck } = this.props;
        if (deck && deck.error && this.normal) {
            this.normal = false;
            const c = window.confirm(`${deck.error}. Do you want to shuffle card? Cancel to new game.`);
            if (c) {
                this.onShuffle()
            } else {
                this.props.dispatch(gameResetRound({}));
            }
        }
    }

    render(){
        const { players_score, round_no , revealed, waiting_cards } = this.props;

        return (
            <div>
                <div className='top-section-container'>
                    <div className='top-section-button'>
                        <Button variant="contained" color="primary" onClick={this.onShuffle} disabled={revealed || waiting_cards}>
                            Shuffle {waiting_cards && <CircularProgress />}
                        </Button>
                    </div>
                    <div className='top-section-button'>
                        <Button variant="contained" color="primary" onClick={this.onDraw} disabled={revealed || waiting_cards}>
                            Draw {waiting_cards && <CircularProgress />}
                        </Button>
                    </div>
                    <div className='top-section-button'>
                        <Button variant="contained" color="primary" onClick={this.onReveal} disabled={revealed || waiting_cards}>
                            Reveal {waiting_cards && <CircularProgress />}
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
    players_deck: state.GameReducer.players_deck,
    round_no: state.GameReducer.round_no,
    revealed: state.GameReducer.revealed,
    deck: state.DeckReducer.deck,
    waiting_cards: state.DeckReducer.waiting_cards
});

export default connect(mapStateToProps)(TopSection);