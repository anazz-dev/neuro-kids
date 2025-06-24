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

        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialLink
            href="https://www.instagram.com/neuroscience4kids.books/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ verticalAlign: 'middle', marginRight: 4 }}
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
            @neuroscience4kids.books
          </SocialLink>
       </FooterSection>

      <FooterSection>
        <FooterTitle>Follow Us</FooterTitle>
        <SocialLink
          href="https://www.youtube.com/@NeuroscienceForKids?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ verticalAlign: 'middle', marginRight: 4 }}
          >
            <path d="M23.499 6.203a2.999 2.999 0 0 0-2.112-2.118C19.78 3.5 12 3.5 12 3.5s-7.78 0-9.387.585a3 3 0 0 0-2.112 2.118A31.53 31.53 0 0 0 0 12a31.53 31.53 0 0 0 .501 5.797 2.999 2.999 0 0 0 2.112 2.118C4.22 20.5 12 20.5 12 20.5s7.78 0 9.387-.585a3 3 0 0 0 2.112-2.118A31.53 31.53 0 0 0 24 12a31.53 31.53 0 0 0-.501-5.797zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
          </svg>
          Neuroscience4Kids
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


