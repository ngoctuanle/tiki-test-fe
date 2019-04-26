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
        const { player_no, players_score, players_deck } = this.props;

        if (players_deck[player_no] && players_deck[player_no].error) {
            alert(players_deck[player_no].error);
        }

        return (
            <div className='game-section-player'>
                <PersonOutline style={{ fontSize: 70 }} />
                <div className='top-section-score-broad'>
                    {`Player ${player_no} score: ${players_score[player_no] || 0}`}
                </div>
                <div className='game-section-deck'>
                    {((players_deck[player_no] || {}).cards || []).map((card: CardViewModel) => {
                        return (
                            <div className='game-section-deck-card'>
                                <img
                                    alt={''}
                                    key={card.image}
                                    src={card.images.png}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players_score: state.GameReducer.players_score,
        players_deck: state.GameReducer.players_deck,
    }
};

export default connect(mapStateToProps)(AnotherPlayer);