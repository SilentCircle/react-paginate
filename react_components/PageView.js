'use strict';

import React from 'react';

export default class PageView extends React.Component {
  render() {
    let linkClassName = this.props.pageLinkClassName;
    let cssClassName = this.props.pageClassName;
    let onClick = this.props.onClick;

    if (this.props.selected) {
      if (typeof(cssClassName) !== 'undefined') {
        cssClassName = cssClassName + ' ' + this.props.activeClassName;
      } else {
        cssClassName = this.props.activeClassName;
      }
    }

    const KEY_ENTER = 13;
    const handleKeyPaginate = (event) => {
      if (event.keyCode == KEY_ENTER) {
        onClick(event);
      }
    };

    return (
      <li onClick={onClick} className={cssClassName}>
        <a tabIndex="0" onKeyUp={handleKeyPaginate} className={linkClassName}>
          {this.props.page}
        </a>
      </li>
    );
  }
};
