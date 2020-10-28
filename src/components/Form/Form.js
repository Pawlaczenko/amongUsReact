import React from 'react';
import styles from './Form.module.scss';
import RadioColor from './RadioColor/RadioColor';

const Form = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'purple', 'black', 'brown', 'cyan', 'lime', 'white'];
    return (
        <div className={styles.wrapper}>
            <form className={styles.form}>
                <label htmlFor="role" className={styles.add}>
                    Add
                <select name="role" id="role" className={styles.select}>
                        <option value="0">A CREWMATE</option>
                        <option value="1">AN IMPOSTOR</option>
                    </select>
                </label>
                <label className={styles.label} htmlFor="name">Name</label>
                <input className={styles.input} type="text" required></input>
                <label className={styles.label} htmlFor="color">Color</label>
                <div className={styles.colors}>
                    {
                        colors.map(color => (
                            <RadioColor key={color} color={color} />
                        ))
                    }
                </div>
                <button>add +</button>
            </form>
        </div>
    );
};

export default Form;