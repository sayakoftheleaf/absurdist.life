import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          Software engineer by Profession and Passion. Undergrad at Tufts. Passionate about Cyber Security, Deep learning and Quantum Computing. Reads up on Philosophy and Film Theory from time to time. You can read my musings <a href="https://blog.absurdist.life">here</a>.
          <div className="emoji">
          👨‍🎓 &nbsp; 🤖 &nbsp; 💻 &nbsp; 🏓 &nbsp; 📚 &nbsp;
          </div>
        </div>
      </div>
    )
  }
}

export default About
