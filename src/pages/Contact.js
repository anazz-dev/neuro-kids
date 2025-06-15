import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: #6e8efb;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #5a7df9;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoIcon = styled.span`
  font-size: 1.5rem;
  color: #6e8efb;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
`;

const InfoLink = styled.a`
  color: #6e8efb;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactDescription>
          Have questions about our neuroscience activity books? Want to suggest a topic for a future book? We'd love to hear from you!
        </ContactDescription>
      </ContactHeader>
      
      <ContactGrid>
        <ContactForm>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput type="text" id="name" placeholder="Your name" />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" id="email" placeholder="Your email address" />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput type="text" id="subject" placeholder="What is this regarding?" />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea id="message" placeholder="Your message" />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <InfoCard>
            <InfoTitle>
              <InfoIcon>📧</InfoIcon>
              Email Us
            </InfoTitle>
            <InfoText>For general inquiries:</InfoText>
            <InfoLink href="mailto:info@neurokids.com">info@neurokids.com</InfoLink>
            <InfoText>For bulk orders:</InfoText>
            <InfoLink href="mailto:orders@neurokids.com">orders@neurokids.com</InfoLink>
          </InfoCard>
          
          <InfoCard>
            <InfoTitle>
              <InfoIcon>📱</InfoIcon>
              Follow Us
            </InfoTitle>
            <InfoText>Stay updated with our latest books and neuroscience news for kids:</InfoText>
            <div style={{ marginTop: '1rem' }}>
              <InfoLink href="#" style={{ marginRight: '1rem' }}>Facebook</InfoLink>
              <InfoLink href="#" style={{ marginRight: '1rem' }}>Twitter</InfoLink>
              <InfoLink href="#" style={{ marginRight: '1rem' }}>Instagram</InfoLink>
              <InfoLink href="#">Pinterest</InfoLink>
            </div>
          </InfoCard>
          
          <InfoCard>
            <InfoTitle>
              <InfoIcon>❓</InfoIcon>
              FAQ
            </InfoTitle>
            <InfoText>Find answers to commonly asked questions about our books:</InfoText>
            <InfoLink href="/faq">Visit our FAQ page</InfoLink>
          </InfoCard>
        </ContactInfo>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
