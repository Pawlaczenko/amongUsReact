import React from 'react';
import styles from './PlayersItem.module.scss';

function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const PlayerItem = ({ name, role, color }) => {

    const images = importAllImages(require.context('./../../../assets/images', false, /\.png/));
    const imageKey = `guy_${color}.png`;

    return (
        <li>
            <p>{name}</p>
            <img
                src={images[imageKey].default}
                alt={color}
            />
        </li>
    )

};

export default PlayerItem;