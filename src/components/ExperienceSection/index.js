import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import yogiLogo from '../../assets/images/experience/cam-yogi.png'
import hriLogo from '../../assets/images/experience/hrilabmedium.jpg'
import hciLogo from '../../assets/images/experience/hci.png'
import Stores123Logo from '../../assets/images/experience/storeslogo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
        <ExperienceUnit
            logo={Stores123Logo}
            colour='#E5473B'
            title='123Stores'
            link='https://www.123storesecommerce.com/'
            timeperiod='November 2018 - Present'
            subtitle='Automated the process of transferring data from supplier catalogs to the desired data format for 123Stores database. Collected and analyzed terabytes of data to infer market trends and competitor strategies and continously delivered micro patches to the price adjustment algorithm to accomodate for newly discovered patterns.'
          />
          <ExperienceUnit
            logo={yogiLogo}
            colour='#E5473B'
            title='Yogi Network'
            link='https://www.camyogi.in/'
            timeperiod='July 2018 - October 2018'
            subtitle='Built an ecommerce site from scratch (NodeJS, React, MongoDB and Mongoose), and a simple admin tool (ElectronJS, NodeJS, React, MongoDB and Mongoose) and database management system that provided a GUI implementation of a lot of functionalities provided by MongooseJS.'
          />
          <ExperienceUnit
            logo={hriLogo}
            colour='#FFFFFF'
            title='Tufts HRI Lab'
            link='https://hrilab.tufts.edu/'
            timeperiod='June 2016 - August 2016'
            subtitle="Worked on the NASA space rover challenge, on testing and improving the rover's mapping and navigating capabilities on 3-d unmapped enviornments (simulated planets with auto-generated random terrain)."
          />
          <ExperienceUnit
            logo={hciLogo}
            colour='#FFFFFF'
            title='Tufts HCI Lab'
            link='http://hci.cs.tufts.edu/'
            timeperiod='June 2017 - August 2017'
            subtitle="Worked on an developing the front and back end software for experiement that sent electrical impulses to test subjects when their eye movements indicated that they were about to lose concentration during reading comprehension."
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
