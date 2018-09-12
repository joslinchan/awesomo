import React from 'react';
import ReactDOM from 'react-dom';
import tippy from 'tippy.js';

class ReactTippy extends React.Component {
  html = React.createRef()

  componentDidMount() {
    const { children, ...props } = this.props;
    this.tippyInstance = tippy.one(ReactDOM.findDOMNode(this), {
      ...props,
      html: this.html.current,
    });
  }

  componentDidUpdate() {
    if (!this.props.html) {
      this.tippyInstance.popper.querySelector('.tippy-content')[
        this.props.allowTitleHTML ? 'innerHTML' : 'textContent'
      ] = this.props.children.props.title;
    }
  }

  componentWillUnmount() {
    if (this.tippyInstance) {
      this.tippyInstance.destroy();
      this.tippyInstance = null;
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        {this.props.html && <div ref={this.html}>{this.props.html}</div>}
      </React.Fragment>
    );
  }
}

export default ReactTippy;
