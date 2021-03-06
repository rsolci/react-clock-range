import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClockRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: {
        x: 0,
        y: 0,
        showing: false
      }
    }
  }

  getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);

    return {x, y};
  }

  mouseMove = (event) => {
    let point = this.svg.createSVGPoint();
    point.x = event.clientX; point.y = event.clientY;
    const svgPoint = point.matrixTransform(this.svg.getScreenCTM().inverse());
    const newPoint = {
      x: svgPoint.x,
      y: svgPoint.y
    }
    this.setState({
      cursor: Object.assign({}, this.state.cursor, newPoint)
    })
  }

  mouseEnter = () => {
    this.setState({
      cursor: Object.assign({}, this.state.cursor, {showing: true})
    })
  }

  mouseLeave = () => {
    this.setState({
      cursor: Object.assign({}, this.state.cursor, {showing: false})
    })
  }

  render() {
    const point = this.getCoordinatesForPercent(0);
    return (
      <svg ref={element => this.svg = element} viewBox='-1 -1 2 2' preserveAspectRatio='xMidYMid meet'
        style={{transform: 'rotate(-0.25turn)'}}
        xmlns="http://www.w3.org/2000/svg">
        <circle cx='0' cy='0' r='0.9' stroke='black' strokeWidth='0.03' fill='none'
          onMouseMove={this.mouseMove} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} />
        {this.state.cursor.showing &&
          <circle cx={this.state.cursor.x} cy={this.state.cursor.y}
            r='0.03' stroke='blue' strokeWidth='0.015' fill='none' />
        }
        <rect x={point.x} y={point.y} width='0.01' height='0.05' />
      </svg>
    )
  }
}

//
// <path d='M 1 0 A 1 1 0 0 1 0.8 0.59 L 0 0'></path>

ClockRange.propTypes = {

}

export default ClockRange;