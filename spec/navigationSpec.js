let React = require('react');
let TestUtils = require('react/lib/ReactTestUtils');
let Navigation = require('../app/components/Navigation');

describe('Navigation Component', () => {
    let component = TestUtils.renderIntoDocument(<Navigation />);

    it('renders', () => {
        expect(component).toBeTruthy()
    });


    it('has exactly one nav tag', () => {
        let element = TestUtils.scryRenderedDOMComponentsWithTag(component, 'nav');
        expect(element.length).toBe(1);
    });

    it('has state', () => {
        console.log(component);
        expect(component.state).toBeDefined();
    });

});

