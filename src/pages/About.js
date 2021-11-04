import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
    
  }
  .about__info__item {
    margin-bottom: 10rem;
   
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    margin-top:3rem;
  }
  @media only screen and (max-width: 768px){
    padding: 10rem 0;
    .top-section{
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading{
      font-size: 1.8rem;
    }
    .about__heading{
      font-size: 2.8rem;
      
    }

    .about__info__heading{
      font-size 3rem;
    }
  }
`;

function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Miłosz Siemek</span>
            </p>
            <h2 className="about__heading">A junior web dev</h2>
            <div className="about__info">
              <PText>
                I am from beautiful village - Jawiszowice. Small cottage in
                south of Poland in Małopolska. I'm in love with music and art
                since my childhood. I have band called SNOW. Im doing my part in
                it as a vocalist and guitarist. I'm always trying to compose
                music and art with my unique point of view.
                <br /> <br />
                I started coding in high school. Then i went on Informatics
                studies. Coding is kind of art for me so I'm trying to merge my
                hobbies and work in one. I find it very interesting and
                inspiring.
                <br />
                <br />
                Do you want to make world better and simplier place? Well... I
                don't know anything about it, but I can make you fast working,
                and not obviously esthetic web app.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="aboutImg" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem title="College" items={['PZSOMSIT 2 Oświęcim']} />
            <AboutInfoItem title="Varsity" items={['ATH Bielsko-Biała']} />
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'REACT']}
            />
            <AboutInfoItem title="BackEnd" items={['Node', 'PHP']} />
            <AboutInfoItem title="Design" items={['Gimp', 'Photoshop']} />
            <h1 className="about__info__heading">Experience</h1>
            <AboutInfoItem
              title="2017-2021"
              items={['Teacher in PCKTiB Oświęcim']}
            />
            <AboutInfoItem title="2021 - now" items={['Freelance at . . .']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

export default About;
