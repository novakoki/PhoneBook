import React, {Component} from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactLetterSection.css'

export default class ContactLetterSection extends Component {
  render() {
    return (
      <li className="contactLetterSection" >
        <h3 className={styles.letter}>{this.props.letter}</h3>
        <ul className={styles.list}>
          {this.props.contacts.map(result => {
            return <Contact key={result.name} picsrc={result.picsrc} >{result.name}</Contact>
          })}
        </ul>
      </li>
    );
  }
}