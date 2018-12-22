import React from 'react';
import styles from './style.css';

export default class Memory extends React.Component {
    render() {
        return (
            <div className={styles.game}>
                <h1 className={styles.title}>Мем.Ори!</h1>
                <div className={styles.field}>
                    <div className={styles.memory}>
                        <div className={`${styles.cell} ${styles.ball1}`}/>
                        <div className={`${styles.cell} ${styles.ball2}`}/>
                        <div className={`${styles.cell} ${styles.ball3}`}/>
                        <div className={`${styles.cell} ${styles.ball4}`}/>
                        <div className={`${styles.cell} ${styles.ball5}`}/>
                        <div className={`${styles.cell} ${styles.ball6}`}/>
                        <div className={`${styles.cell} ${styles.ball7}`}/>
                        <div className={`${styles.cell} ${styles.ball8}`}/>
                        <div className={styles.cell}/>
                        <div className={styles.cell}/>
                        <div className={styles.cell}/>
                        <div className={styles.cell}/>
                        <div className={styles.cell}/>
                        <div className={styles.cell}/>
                        <div className={styles.cell}/>
                        <div className={styles.cell}/>
                    </div>
                </div>
            </div>
        );
    }
}