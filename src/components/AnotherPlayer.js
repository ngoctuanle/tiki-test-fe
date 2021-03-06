import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {PersonOutline} from "@material-ui/icons";
import CardViewModel from "../models/CardViewModel";

class AnotherPlayer extends React.Component{
    static propTypes = {
        player_no: PropTypes.string.isRequired
    };

    render() {
        const { player_no, players_score, players_deck, revealed, waiting_cards } = this.props;
        return (
            <div className='game-section-player'>
                <PersonOutline style={{ fontSize: 70 }} />
                <div className='top-section-score-broad'>
                    {`Player ${player_no} score: ${players_score[player_no] || 0}`}
                </div>
                {waiting_cards
                    ? null
                    : <div className='game-section-deck'>
                        {((players_deck[player_no] || {}).cards || []).map((card: CardViewModel) => {
                            return (
                                <div className='game-section-deck-card' key={card.image}>
                                    <img
                                        alt={''}
                                        key={card.image}
                                        src={card.images.png}
                                        style={{
                                            width: '100%',
                                            visibility: revealed ? null : 'hidden'
                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players_score: state.GameReducer.players_score,
        players_deck: state.GameReducer.players_deck,
        revealed: state.GameReducer.revealed,
        waiting_cards: state.DeckReducer.waiting_cards
    }
};

export default connect(mapStateToProps)(AnotherPlayer);