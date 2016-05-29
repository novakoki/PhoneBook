import React, {Component} from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <svg width="40" height="40" stroke="black" fill="black">
          <line x1="10" x2="30" y1="13" y2="13"></line>
          <line x1="10" x2="30" y1="20" y2="20"></line>
          <line x1="10" x2="30" y1="27" y2="27"></line>
        </svg>
        <h1 className={styles.title}>联系人<span className={styles.size}>{this.props.size}</span></h1>
        <svg width="40" height="40" stroke="black" strokeWidth="0.1" fill="black">
          <text x="10" y="30" fontSize="36">+</text>
        </svg>
      </header>
    )
  }
}