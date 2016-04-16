import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class NavButton extends Component {
  handleClick(e) {
    let {url, action} = this.props;

    action && action(e);
    this.context.router.push(url);
  }

  render() {
    let {text} = this.props;

    return (
      <Button onClick={this.handleClick.bind(this)}  bsStyle="primary">
        {text}
      </Button>
    );
  }
}

NavButton.contextTypes = {
  router: React.PropTypes.object.isRequired
};

NavButton.propTypes = {
  url: React.PropTypes.string.isRequired,
  action: React.PropTypes.func,
  text: React.PropTypes.string
};

NavButton.defaultProps = {
  text: 'Next'
};

export default NavButton;

