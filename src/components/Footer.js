import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #FFD700;
`;

const FooterText = styled.p`
  color: #ecf0f1;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const SocialLink = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #FFD700;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #bdc3c7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Neuroscience4Kids</FooterTitle>
          <FooterText>
            Making neuroscience fun and accessible for children through engaging activity books.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>
            Have questions about our neuroscience activity books? We'd love to hear from you!
          </FooterText>
          <FooterText>
            Email: info.neuroscience4kids@gmail.com
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialLink href="https://www.instagram.com/neuroscience4kids.books/" target="_blank" rel="noopener noreferrer">
            Instagram: @neuroscience4kids.books
          </SocialLink>
        </FooterSection>

      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} Neuroscience4Kids. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;


