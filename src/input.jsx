import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Input extends PureComponent {
    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(e) {
        const { onEnter } = this.props;

        const ENTER_CODE = 13;

        if (e.keyCode === ENTER_CODE) {
            onEnter(e.target.value);

            e.target.value = '';
        }
    }

    render() {
        const { className } = this.props;
        return (
            <input
                className={className}
                onKeyDown={this.onKeyDown} />
        )
    }
}

Input.defaultProps = {
    onEnter: () => null
}


Input.propTypes = {
    onEnter: PropTypes.func,
    className: PropTypes.string
}

export default Input;
