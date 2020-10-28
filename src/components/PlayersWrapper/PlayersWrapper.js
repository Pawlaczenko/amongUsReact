import React from 'react';
import styles from './PlayersWrapper.module.scss';
import PlayersItem from './PlayersItem/PlayersItem';

const PlayersWrapper = props => (
    <div className={styles.wrapper}>
        <h2 className={styles.count}>Players: {props.players.length}/10</h2>

        <ul className={styles.list}>
            {props.players.map(item => (
                <PlayersItem key={item.color} handleDelete={props.deleteFn} {...item} />
            ))}
        </ul>
    </div>
);

export default PlayersWrapper;