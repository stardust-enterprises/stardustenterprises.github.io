import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/branding/logo/full.svg" className="logo" alt="logo" />

        <ul className="links">
          <li>
            <a
              href="/github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub}/> GitHub
            </a>
          </li>
          <li>
            <a
              href="/discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord}/> Discord
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
