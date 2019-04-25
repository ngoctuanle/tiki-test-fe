import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

class TopSection extends React.Component {
    render(){
        const { players } = this.props;
        return (
            <div className='top-section-container'>
                <div className='top-section-button'>
                    <Button variant="contained" color="primary" >
                        Shuffle
                    </Button>
                </div>
                <div className='top-section-button'>
                    <Button variant="contained" color="primary" className='top-section button'>
                        Draw
                    </Button>
                </div>
                <div className='top-section-button'>
                    <Button variant="contained" color="primary"className='top-section button' >
                        Reveal
                    </Button>
                </div>
                <div className='top-section-score-broad'>
                    {`Your score: ${players['1'] || 0}`}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    players: state.GameReducer.players
});

export default connect(mapStateToProps)(TopSection);