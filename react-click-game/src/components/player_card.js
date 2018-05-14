import React, { Component } from 'react';

class PlayerCard extends Component {
  click = event => {
    this.props.handleIncrementScore(this.props.id);
    this.props.shufflePlayers();
  };

  render() {
    return (
      <div className="card" onClick={this.click}>
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default PlayerCard;
