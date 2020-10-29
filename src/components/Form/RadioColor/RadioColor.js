import React from 'react';
import styles from './RadioColor.module.scss';

const RadioColor = ({ color, isDisabled }) => (
    <label className={styles.label}>
        <span className={styles.wrapper}>
            <input
                type="radio"
                name="color"
                value={color}
                className={styles.input}
                required
                disabled={isDisabled}
            />
            <span className={`${styles.control} ${styles[color]}`}></span>
        </span>
    </label>
);

export default RadioColor;