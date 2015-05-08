const React = require('react');
const d3 = require('d3');

let Line = require('./Line');

class D3Container extends React.Component {

    componentDidMount() {

        let dataset = [5, 15, 40, 60, 75, 90];

        let w = 400, h = 100;

        let svg = d3.select(".d3-container").append("svg").attr("width", w).attr("height", h);

        svg.append("line").
            attr({
                x1: 0, x2: 0,
                y1: 20, y2: 20,
                "id": "line"
            })
            .style({
                stroke: "black",
                "stroke-width": 10
            })
            .transition()
            .duration(2000)
            .attr({
                x2: w
            });

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append('circle')
                .attr({
                    cx: (d,i) => d*w/100,
                    cy: 20,
                    r: 10,
                    "class": "circle"
                })
            .style("fill", "orange")
            .on("click", function() {
                d3.select(this).transition().attr({
                    r: 15
                })
                .ease("elastic")
                .transition().attr({r:10})
        })
    }

    render() {

        return (
            <div className="container d3-container">
                <h1>D3 Action</h1>
                <Line
                    x1="20" x2="100"
                    y1="100" y2="20"
                    stroke="black"
                    strokeWidth="10" />
            </div>
        )
    }

}

module.exports = D3Container;

