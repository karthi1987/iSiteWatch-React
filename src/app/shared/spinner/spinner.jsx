import React from 'react';

export default class Spinner extends React.Component {

  render() {

    const height = window.innerHeight;

    return (
      <div className="spinner" style={{ height }}>
        <div className="spinner-image"></div>
      </div>
    );

  }

}
