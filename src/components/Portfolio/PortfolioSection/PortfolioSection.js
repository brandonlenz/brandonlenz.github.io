import React, { Component } from 'react';

import './PortfolioSection.module.css'

class PortfolioSection extends Component {

    state = {
        open: true
    };

    toggleSection = () => (
        this.setState({ open: ! this.state.open })
    );

    render() {
        return (
            <>
                <h3 onClick={this.toggleSection}>{this.props.name}</h3>
                {this.state.open ? this.props.children : null}
            </>
        );
    }
}

export default PortfolioSection;
