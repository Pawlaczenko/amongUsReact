import React from 'react';
import styles from './PlayersWrapper.module.scss';
import PlayersItem from './PlayersItem/PlayersItem';

const PlayersWrapper = props => (
    <>
        <h2 className={styles.count}>Players: 2/10</h2>

        <ul>
            {props.players.map(item => (
                <PlayersItem key={item.color} {...item} />
            ))}
        </ul>
    </>
);

export default PlayersWrapper;