import React from 'react';
import styles from './PlayersWrapper.module.scss';
import PlayersItem from './PlayersItem/PlayersItem';

const PlayersWrapper = props => (
    <>
        <h2 className={styles.count}>Players: {props.players.length}/10</h2>

        <ul className={styles.wrapper}>
            {props.players.map(item => (
                <PlayersItem key={item.color} {...item} />
            ))}
        </ul>
    </>
);

export default PlayersWrapper;