import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Person } from "@material-ui/icons";
import CardViewModel from "../models/CardViewModel";

class YourPlayer extends React.Component{
    static propTypes = {
        player_no: PropTypes.string.isRequired
    };

    render() {
        const { player_no, players_deck } = this.props;

        return (
            <div className='game-section-player'>
                <Person style={{ fontSize: 70 }}/>
                <br/>
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        players_deck: state.GameReducer.players_deck,
    }
};

export default connect(mapStateToProps)(YourPlayer);