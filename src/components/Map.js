import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImage from '../assets/images/map.png';

const MapStyles = styled.div`
  background: url(${MapImage}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Jawiszowice, Małopolska, Polska</PText>
          <a
            href="https://www.google.pl/maps/place/Jawiszowice/@49.9564252,19.1258369,14.5z/data=!4m5!3m4!1s0x4716bd7ee8e5b7ef:0x8c91e897f1567449!8m2!3d49.9566784!4d19.134163"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
