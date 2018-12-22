import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.opened = props.opened;
        this.onClick = props.onClick;
    }
    render () {
        return (
            <div className={this.opened ? styles.cardFront : styles.cardBack} onClick={this.onClick}>
            </div>
        );
    }
}

Card.propTypes = {
    opened: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Card;