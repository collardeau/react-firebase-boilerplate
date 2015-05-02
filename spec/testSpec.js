var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var stubRouterContext = require('../app/utils/stubRouterContext');
var AppContainer = require('../app/components/AppContainer');

describe('AppContainer', () => {
    it('renders', () => {
        let Subject = stubRouterContext(AppContainer);
        let element = TestUtils.renderIntoDocument(<Subject />);
        expect(element).toBeTruthy();
    });
});

describe("Test", () => {

    it("should work", function() {

        expect(false).toBe(false);
    });

});

