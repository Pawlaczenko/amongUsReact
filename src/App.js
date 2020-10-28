import React from 'react';
import PlayersWrapper from './components/PlayersWrapper/PlayersWrapper';
import './index.css';

class App extends React.Component {

    state = {
        players: [
            {
                name: 'Partek',
                role: 0, //0-crewmate, 1-impostor
                color: 'red'
            },
            {
                name: 'Impostor',
                role: 1, //0-crewmate, 1-impostor
                color: 'lime'
            },
            {
                name: 'Policja',
                role: 1, //0-crewmate, 1-impostor
                color: 'blue'
            },
            {
                name: 'was',
                role: 0, //0-crewmate, 1-impostor
                color: 'brown'
            },
            {
                name: 'konix',
                role: 0, //0-crewmate, 1-impostor
                color: 'cyan'
            },
        ]
    }

    render() {
        return (
            <PlayersWrapper
                players={this.state.players}
            />
        )
    }
}

export default App;