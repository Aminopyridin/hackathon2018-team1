import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.opened = props.opened;
        this.cardType = props.cardType;
        this.id = props.id;
        this.onClick = () => {
            props.onClick(this);
        };

    }
    render () {
        return (
            <div className={this.opened ? styles.ball1 : styles.cell} onClick={this.onClick}>
                {this.cardType}
            </div>
        );
    }
}

Card.propTypes = {
    opened: PropTypes.bool,
    onClick: PropTypes.func,
    cardType: PropTypes.number,
    id: PropTypes.number,
};

export default Card;