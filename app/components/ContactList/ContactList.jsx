import React, {Component} from 'react';
import ContactLetterSection from '../ContactLetterSection/ContactLetterSection';
import styles from './ContactList.css'

export default class ContactList extends Component {
  componentDidUpdate () {
    if (this.props.activeLetter != '') {
      var top = 0, exist = false;
      for (var i = 0; i < this.props.data.length; i++) {
        if (this.props.data[i].letter != this.props.activeLetter) {
          top += (20+ this.props.data[i].contacts.length*73-1) ;
        } else {
          exist = true;
          break;
        }
      };
      console.log(top);
      if (exist) {
        this.refs.list.scrollTop = top;
      }
    }
  }
  
  render() {
    return (
      <ul className={styles.list} ref="list">
        {this.props.data.map(result => {
          return <ContactLetterSection key={result.letter} contacts={result.contacts} letter={result.letter} />
        })}
      </ul>
    );
  }
}