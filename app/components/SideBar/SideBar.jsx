import React, {Component} from 'react';
import styles from './SideBar.css';

export default class SideBar extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.list}>
          {letters.map(result => {
            return (
              <li key={result} className={styles.item} onClick={this.props.onSideBarClick}>{result}</li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

var letters = ['#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];