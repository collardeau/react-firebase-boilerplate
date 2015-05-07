const React = require('react');

class Line extends React.Component {

    constructor () {
        super();
        this.state = {
            x1:"",
            x2:"100",
            y1:"100",
            y2:"20",
            stroke:"black",
            strokeWidth:"10"
            }
    }

    componentDidMount() {
        this.setState({
            x1:parseInt(this.props.x1),
            x2:"100",
            y1:"100",
            y2:"20",
            stroke:"black",
            strokeWidth:"10"
        });
    }

    handleClick() {
        var i = 1;
        var foo = setInterval(() => {
            //console.log("Hello");
            this.setState({
                x1: this.state.x1 += 1
            });
            i++;
        }, 1000/60);

        setTimeout(function(){ clearInterval(foo)}, 6000);
        //this.props.stroke = "yellow";
        //this.forceUpdate();

    }

    render() {

        return (
            <svg width="500" height="200">

                <line onClick={this.handleClick.bind(this)}
                      x1={this.state.x1}
                      x2={this.props.x2}
                      y1={this.props.y1}
                      y2={this.props.y2}
                      stroke={this.props.stroke}
                      strokeWidth={this.props.strokeWidth}
                    />

            </svg>
        )
    }
}

module.exports = Line;