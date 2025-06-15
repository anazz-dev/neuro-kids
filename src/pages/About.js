import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #6e8efb;
  }
`;

const SectionContent = styled.div`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MissionItem = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const MissionIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6e8efb;
`;

const MissionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #333;
`;

const MissionDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <AboutTitle>About NeuroKids</AboutTitle>
        <AboutDescription>
          Making neuroscience fun and accessible for children through engaging activity books.
        </AboutDescription>
      </AboutHeader>
      
      <AboutSection>
        <SectionTitle>Our Story</SectionTitle>
        <SectionContent>
          <p>
            NeuroKids was born from a passion for making complex neuroscience concepts accessible and engaging for children. We believe that understanding how our brains work is fundamental to children's development and can spark a lifelong interest in science.
          </p>
          <br />
          <p>
            Our journey began with the creation of our first activity book, "Brain: Neuroscience for Kids," which quickly became popular among parents and educators. Encouraged by the positive response, we expanded our collection to include books on neurons, senses, hearing, and sight.
          </p>
          <br />
          <p>
            Each book is carefully designed to combine scientific accuracy with fun activities, colorful illustrations, and age-appropriate content. We work with neuroscientists, educators, and child development experts to ensure our materials are both educational and engaging.
          </p>
        </SectionContent>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>Our Mission</SectionTitle>
        <SectionContent>
          <p>
            At NeuroKids, our mission is to inspire the next generation of scientists, doctors, and curious minds by making neuroscience accessible, engaging, and fun for children ages 7-14.
          </p>
          
          <MissionGrid>
            <MissionItem>
              <MissionIcon>🔍</MissionIcon>
              <MissionTitle>Educate</MissionTitle>
              <MissionDescription>
                Provide scientifically accurate information about the brain and nervous system in an age-appropriate format.
              </MissionDescription>
            </MissionItem>
            
            <MissionItem>
              <MissionIcon>💡</MissionIcon>
              <MissionTitle>Inspire</MissionTitle>
              <MissionDescription>
                Spark curiosity and foster a love for science through engaging activities and colorful illustrations.
              </MissionDescription>
            </MissionItem>
            
            <MissionItem>
              <MissionIcon>🌟</MissionIcon>
              <MissionTitle>Empower</MissionTitle>
              <MissionDescription>
                Help children understand their own brains and bodies, empowering them with knowledge about how they learn and perceive the world.
              </MissionDescription>
            </MissionItem>
          </MissionGrid>
        </SectionContent>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>Our Approach</SectionTitle>
        <SectionContent>
          <p>
            We believe that learning happens best when children are actively engaged and having fun. That's why our activity books include:
          </p>
          <br />
          <ul>
            <li>Hands-on experiments and activities that demonstrate neuroscience concepts</li>
            <li>Colorful illustrations featuring friendly brain characters</li>
            <li>Puzzles and games that reinforce learning</li>
            <li>Simple explanations of complex concepts</li>
            <li>Age-appropriate content for children 7-14 years old</li>
          </ul>
          <br />
          <p>
            Our books are designed to be used at home or in the classroom, with or without adult supervision, making them versatile resources for parents and educators alike.
          </p>
        </SectionContent>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;
