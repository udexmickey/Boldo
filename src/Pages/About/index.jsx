import React from 'react'
import TeamCard, { TeamCard2 } from '../../Component/TeamCard'
import './about.scss'

export default function AboutPage() {
  return (
    <div className='about__container__wrapper'>
      <div id="about">
        <div className="about-container">
          <div className="about__head">About</div>
          <div className="about__body">
            <div className="about__title">We love to make great things, things that matter.</div>
            <div className="about__content">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</div>
          </div>
        </div>
      </div>

      <div id="numbers">
      <div className="">
          <div className="numbers__head">Our numbers</div>
          <div className="numbers__body">
            <div className="numbers__content">Handshake infographic mass market crowdfunding iteration.</div>
            <div className="numbers__counts">
              <div className="numbers__counts__one">
                <div className="counts__value">120m</div>
                <div className="counts__title">Cool feature title</div>
              </div>
              <div className="numbers__counts__two">
                <div className="counts__value">10.000</div>
                <div className="counts__title">Cool feature title</div>
              </div>
              <div className="numbers__counts__three">
                <div className="counts__value">240</div>
                <div className="counts__title">Cool feature title</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="story">
        <div className="">
          <div className="story__head">Our story</div>
          <div className="story__body">
            <div className="story__title">Handshake infographic mass market crowdfunding iteration.</div>
            <div className="story__content">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </div>
          </div>
        </div>
      </div>
      <div id="team">
        <div className="">
          <div className="team__head">Our team</div>
          <div className="team__title">The people behind the work</div>
          <div className="team__body">
            <div className="team__content">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </div>
            <div className="team__counts">
              <TeamCard className={'team__players'} />
            </div>
            <TeamCard2 className={'team__players'} />
          </div>
        </div>
      </div>
      <div id="blog">Our blog</div>
    </div>
  )
}
