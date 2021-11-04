import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What can I do for you?" />

        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Website Design"
            desc="I can create UI design for the website that will have eye-catching unique look."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I can develop websites that have high performance and blazing fast responsive speed."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I can develop mobile apps. Same as website design but on mobile platforms ;)"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
