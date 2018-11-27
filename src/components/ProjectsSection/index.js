import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import litLogo from '../../assets/images/projects/lit_logo_v2.svg'
import arukiLogo from '../../assets/images/projects/aruki_sakura.png'
import nowutLogo from '../../assets/images/projects/NOWUT.png'
import playerMeLogo from '../../assets/images/projects/player-me.png'

class ProjectsSection extends React.Component {
  render () {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={arukiLogo}
            colour="#362F2F"
            title="Aruki"
            link="https://github.com/wesrer/Aruki_Desktop"
            timeperiod="2017 - Present"
            subtitle="A chess variant designed to hate a lot more permutations
                      per move than chess, so that brute force solutions aren't
                      viable for any AI playing the game. Current working on
                      designing a Neural Network Based ML AI to run on it. 
                      (Written in JS and uses ElectronJS and React)."
          />
          <ExperienceUnit
            logo={litLogo}
            colour="#484F57"
            title="LIT"
            // link = 
            timeperiod="2017 - Present"
            subtitle="A social networking platform that helps people navigate
                      the social and cultural prospects of a city. Built using
                      Native Android SDK, Firebase, and Google and Facebook SPI.
                      (Currently on Hold, will resume development soon)."
          />
          <ExperienceUnit
            logo={nowutLogo}
            colour="#FFFFFF"
            //colour="#312F31"
            title="NOWUT"
            link="https://github.com/wesrer/nowut"
            timeperiod="November 2018 - Present"
            subtitle="A cross compiler that compiles C source code to the
                      esoteric language BrainF*ck.
                      (written in Ruby) (Currently in development)."
          />
          <ExperienceUnit
            logo={playerMeLogo}
            colour="#2C2C2C"
            title="Player-Me"
            link="https://github.com/wesrer/Player-Me"
            timeperiod="November 2018 - Present"
            subtitle="An app that gamifies a player's life and provides rich
                      tools for managing habits, tasks and general life
                      goals and integrates them into an RPG setting with classic
                      elements like quests, missions, side quests, raids, parties
                      etc. and provides a rich, utility based CLI to do so.
                      (Written in Python)(Currently in development)"
           />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
