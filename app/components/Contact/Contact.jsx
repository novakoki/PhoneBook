import React, {Component} from 'react'
import styles from './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <li className={styles.contact} >
        <img className={styles.picture} src={this.props.picsrc}/>
        <p className={styles.name} >{this.props.children}</p>
      </li>
    );
  }
}