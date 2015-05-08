const React = require('react');

class Line extends React.Component {

    handleClick() {
        console.log("click");
    }

    render() {

        return (

            <div>
                <svg width="500" height="200">
                    <line onClick={this.handleClick.bind(this)}
                          x1={this.props.x1}
                          x2={this.props.x2}
                          y1={this.props.y1}
                          y2={this.props.y2}
                          stroke={this.props.stroke}
                          strokeWidth={this.props.strokeWidth}
                        />
                </svg>
            </div>
        )
    }
}

module.exports = Line;