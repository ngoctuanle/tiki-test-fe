import React from 'react';
import TopSection from "./TopSection";
import GameSection from "./GameSection";

class Container extends React.Component {
    render() {
        return (
            <div>
                <TopSection />
                <GameSection />
            </div>
        )
    }
}

export default Container;