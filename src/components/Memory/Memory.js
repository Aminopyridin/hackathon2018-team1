import React from 'react';
import styles from './style.css';
import Card from "../Card/Card";
import PropTypes from 'prop-types'

const modes = {
    easy: {
        width: 5,
        height: 4,
    }
};

export default class Memory extends React.Component {
    constructor(props) {
        super(props);
        if(!modes[props.mode]) {
            this.mode = 'easy';
        }
        else {
            this.mode = props.mode;
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {renderCards()}
            </div>
        );
    }

    handleClick = event => {
        if(event.target.opened){
            event.target.opened=!event.target.opened;
        }
    }

}

Memory.propTypes = {
    mode: PropTypes.string,
};

function renderCards(onClick) {
    let cards = [];
    for(let i = 0; i < modes[this.mode].width*modes[this.mode].height; i++){
        cards.push(<Card opened={false} onClick={onClick}/>)
    }
    return cards;
}