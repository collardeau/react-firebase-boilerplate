const React = require('react');

class AddItem extends React.Component {

  handleSubmit(e){
    if(e.keyCode === 13){
      var newItem = this.refs.newItem.getDOMNode().value;
      this.refs.newItem.getDOMNode().value = '';
      this.props.add(newItem);
    }
  }

  render(){
    return (
      <div>
        <input type="text" ref="newItem" placeholder="New Item" onKeyDown={this.handleSubmit}  />
      </div>
    )
  }

}

module.exports = AddItem;