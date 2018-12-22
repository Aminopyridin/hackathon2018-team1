import React from 'react';
import styles from './style.css';

export default class Memory extends React.Component {
    render () {
        return (
            <div className={styles.memory}>
                <h1>Мем.Ори!</h1>

                <div className={styles.cell} />
            </div>
        );
    }
}