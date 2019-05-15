import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>

        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="last">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

      </footer>
    );
  }
}

export default Footer;
