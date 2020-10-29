import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlayersItem.module.scss';

function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const PlayerItem = ({ name, role, color, handleDelete }) => {

    const images = importAllImages(require.context('./../../../assets/images', false, /\.png/));
    const imageKey = `guy_${color}.png`;

    return (
        <li className={styles.player} onClick={handleDelete} id={color}>
            <p
                className={`${styles.name} ${role ? styles.impostor : styles.crewmate}`}>
                {name}
            </p>
            <img
                className={styles.image}
                src={images[imageKey].default}
                alt={color}
            />
        </li>
    )
};

PlayerItem.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
}

export default PlayerItem;