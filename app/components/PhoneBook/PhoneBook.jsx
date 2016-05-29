import React, {Component} from 'react';
import ContactList from '../ContactList/ContactList';
import Sidebar from '../SideBar/SideBar';
import Header from '../Header/Header';
import styles from './PhoneBook.css';

export default class PhoneBook extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], size: 0, activeLetter: ''};
  }
  
  handleSideBarClick(e) {
    this.setState({activeLetter: e.target.innerText});
  }
  
  componentDidMount() {
    this.setState({
      data: data,
      size: data.reduce((acc, cur) => {
        return acc + cur.contacts.length
      }, 0)
    });
  }
  
  render() {
    return (
      <div>
        <Header size={this.state.size} />
        <ContactList data={this.state.data} activeLetter={this.state.activeLetter} />
        <Sidebar onSideBarClick= {this.handleSideBarClick.bind(this)} />
      </div>
    );
  }
}

var data = [
  {
    letter: 'A',
    contacts: [
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '爱因斯坦'
      },
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '奥本海默'
      }
    ]
  },
  {
    letter: 'B',
    contacts: [
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '玻恩'
      },
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '玻尔'
      }
    ]
  },
  {
    letter: 'D',
    contacts: [
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '狄拉克'
      },
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '德布罗意'
      }
    ]
  },
  {
    letter: 'F',
    contacts: [
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '费米'
      },
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '费曼'
      }
    ]
  },
  {
    letter: 'H',
    contacts: [
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '海森堡'
      }
    ]
  },
  {
    letter: 'X',
    contacts: [
      {
        picsrc: 'http://placekitten.com/g/54/54',
        name: '薛定谔'
      }
    ]
  }
];
