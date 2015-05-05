const React = require('react');
const d3 = require('d3');

class D3Container extends React.Component {

    componentDidMount() {

        let w = 100, h = 100;

        let svg = d3.select(".d3-container")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.append("circle")
            .attr("cx", w/4)
            .attr("cy", w/4)
            .attr("r", 25)
            .style("fill", "purple");

        svg.append("circle")
            .attr("cx", w/4*3)
            .attr("cy", w/4*3)
            .attr("r", 25)
            .style("fill", "blue")
    }

    render() {

        return (
            <div className="container d3-container">
                <h1>D3 Action</h1>
            </div>
        )
    }

}

module.exports = D3Container;