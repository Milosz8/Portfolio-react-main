import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
  }
  .para {
    margin-left: 0;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Miłosz Siemek</h1>
          <PText>
            Web designer and developer from Małopolska. I always make websites
            that have unique designs and also has a good performance rate.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
            // dajemy w [] bo przesyłamy tablice
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+48 513562671',
                path: '/tel:+48513562671',
              },
              {
                title: 'milosz.s8888@gmail.com',
                path: 'mailto:milosz.s8888@gmail.com',
              },
              {
                title: 'Jawiszowice Ul. Olszyny 38 32-626 Małopolska Poland',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
              {
                title: 'LinkedIn',
                path: 'http://linkedin.com',
              },
              {
                title: 'Github',
                path: 'http://github.com',
              },
            ]}
          />
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Miłosz Siemek | Designed by Miłosz Siemek</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
