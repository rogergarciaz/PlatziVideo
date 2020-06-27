import React, { PureComponent } from 'react';
import './generic-page.css';

class Extra extends PureComponent {
  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`, { id: random})
  }
  handleForwardClick = () => {
    this.props.history.goForward();
  }
  handleBackClick = () => {
    this.props.history.go(-1);
  }
  render() {
    return (
      <div className="Page NotFound">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Más Router</h1>
        <h2>Aquí puedes jugar con las funcionalidades de React y React-Router</h2>
        <button
          className="Button"
          onClick={this.handleForwardClick}
        >
          Ir a la siguiente ruta 👉
        </button>
        <button
          className="Button"
          onClick={this.handleBackClick}
        >
          Ir a la ruta anterior 👈
        </button>
        <button
          className="Button"
          onClick={this.handleRandomClick}
        >
          Video random 🍀
        </button>
      </div>
    )
  }
}

export default Extra;