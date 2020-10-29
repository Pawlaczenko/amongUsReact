import React from 'react';
import PlayersWrapper from './components/PlayersWrapper/PlayersWrapper';
import Form from './components/Form/Form';
import './index.css';

class App extends React.Component {

    state = {
        players: []
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

    addPlayer = e => {
        e.preventDefault();
        if (this.state.players.length === 10) return;
        console.log(e.target[0].value);
        const newPlayer = {
            name: e.target[1].value,
            role: parseInt(e.target[0].value),
            color: document.querySelector('input[name="color"]:checked').value
        }

        this.setState(prevState => ({
            players: [...prevState.players, newPlayer]
        }));

        e.target.reset();
    }

    checkDisabled = () => {
        const disabled = [];
        this.state.players.map(e => {
            disabled.push(e.color);
        });

        return disabled;
    }

    render() {
        return (
            <>
                <PlayersWrapper
                    players={this.state.players}
                    deleteFn={this.deletePlayer}
                />
                <Form
                    addFn={this.addPlayer}
                    disabledColors={this.checkDisabled()}
                />
            </>
        )
    }
}

export default App;