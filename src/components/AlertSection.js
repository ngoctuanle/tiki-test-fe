import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {Button} from "@material-ui/core";
import {gameNextRound, gameResetRound} from "../actions";
import {ROUNDS_NUM} from "../constants";

class AlertSection extends React.Component {
    onNextRound = (e) => {
        e.preventDefault();
        this.props.dispatch(gameNextRound({}));
    };

    onResetRound = (e) => {
        e.preventDefault();
        this.props.dispatch(gameResetRound({}));
    };

    render() {
        const { round_no, players_win, players_score } = this.props;

        const maxScore = _.max(_.map(players_score));
        const playerWins = [];
        Object.keys(players_score).forEach(player_no => {
            if (players_score[player_no] === maxScore) playerWins.push(player_no)
        });

        return (
            <div style={{ textAlign: 'center' }}>
                {(round_no + 1 !== ROUNDS_NUM && players_win.length > 0)
                    ? <div>
                        {`Congratulation player ${players_win.join(' & ')}`}
                    </div>
                    : null}
                {(round_no + 1 === ROUNDS_NUM )
                    ? <div>
                        {`Player ${playerWins.join(' & ')} Win!`}
                    </div>
                    : null}
                <br />
                {round_no + 1 !== ROUNDS_NUM
                    ? <Button variant="contained" color="primary" onClick={this.onNextRound} >
                        Next Round >
                    </Button>
                    : <Button variant="contained" color="primary" onClick={this.onResetRound} >
                        New Game
                    </Button>}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        players_deck: state.GameReducer.players_deck,
        players_score: state.GameReducer.players_score,
        players_win: state.GameReducer.players_win,
        round_no: state.GameReducer.round_no
    }
};

export default connect(mapStateToProps)(AlertSection);

