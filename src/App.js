import React from 'react';
import PlayersWrapper from './components/PlayersWrapper/PlayersWrapper';
import Form from './components/Form/Form';
import './index.css';

class App extends React.Component {

    state = {
        players: [
            {
                name: 'Partek',
                role: false, //false-crewmate, true-impostor
                color: 'red'
            },
            {
                name: 'Impostor',
                role: true, //false-crewmate, true-impostor
                color: 'lime'
            },
            {
                name: 'Policja',
                role: true, //false-crewmate, true-impostor
                color: 'blue'
            },
            {
                name: 'was',
                role: false, //false-crewmate, true-impostor
                color: 'brown'
            },
            {
                name: 'konix',
                role: false, //false-crewmate, true-impostor
                color: 'cyan'
            },
        ]
    }

    deletePlayer = e => {
        e.preventDefault();
        const playerId = e.currentTarget.id;
        let currentPlayers = this.state.players;

        const index = currentPlayers.findIndex(e => e.color === playerId);
        currentPlayers.splice(index, 1);

        this.setState({
            players: currentPlayers,
        });
    }

    render() {
        return (
            <>
                <PlayersWrapper
                    players={this.state.players}
                    deleteFn={this.deletePlayer}
                />
                <Form />
            </>
        )
    }
}

export default App;