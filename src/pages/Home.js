import React from 'react';
import styled from 'styled-components';
import BrainCover from '../assets/images/Brain-Cover.png';
import NeuronCover from '../assets/images/Neuron-Cover.png';
import HearingCover from '../assets/images/Hearing-Cover.png';
import SightCover from '../assets/images/Sight-Cover.png';
import SensesCover from '../assets/images/Senses-Cover.png';
import TouchCover from '../assets/images/Touch-Cover.png';
import SmellCover from '../assets/images/Smell-Cover.png';
import TasteCover from '../assets/images/Taste-Cover.png';
import NinaPhoto from '../assets/images/1704476110801.jpeg';
import AhmadPhoto from '../assets/images/bbef6a80-3474-406a-958d-2728db5e2f88.jpeg';

const HomeContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BooksSection = styled(Section)`
  background-color: #f9f9f9;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BookCard = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BookCover = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const BookContent = styled.div`
  padding: 1.5rem;
`;

const AgeTag = styled.div`
  background-color: #ffd700;
  color: #333;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  display: inline-block;
  margin-bottom: 1rem;
`;

const BookTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const BookDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BookButton = styled.a`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff5252;
  }
`;

const MissionSection = styled(Section)`
  background-color: white;
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

const FeaturesSection = styled(Section)`
  background-color: #f5f5f5;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #6e8efb;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const CreatorsSection = styled(Section)`
  background-color: #f5f5f5;
`;

const CreatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CreatorCard = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const CreatorPhoto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #6e8efb;
`;

const CreatorName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const CreatorRole = styled.h4`
  font-size: 1.2rem;
  color: #6e8efb;
  margin-bottom: 1.5rem;
`;

const CreatorBio = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CreatorLink = styled.a`
  color: #6e8efb;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TestimonialsSection = styled(Section)`
  background-color: #f9f9f9;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialItem = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: #333;
`;

const TestimonialRole = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

const Home = () => {
  const books = [
    {
      id: 1,
      title: 'Brain: Neuroscience for Kids',
      image: BrainCover,
      link: 'https://shorturl.at/KsToc',
      ageRange: 'For 7-14 Years',
      description: 'Explore the amazing world of the brain through fun activities, puzzles, and colorful illustrations designed for children.'
    },
    {
      id: 2,
      title: 'Neuron: Neuroscience for Kids',
      image: NeuronCover,
      link: 'https://shorturl.at/6FXEt',
      ageRange: 'For 7-14 Years',
      description: 'Learn about neurons, the building blocks of the brain, through engaging activities and fascinating facts.'
    },
    {
      id: 3,
      title: 'Hearing: Neuroscience for Kids',
      image: HearingCover,
      link: 'https://shorturl.at/FlyuD',
      ageRange: 'For 7-14 Years',
      description: 'Discover how our ears work and how sound travels to our brain in this interactive activity book.'
    },
    {
      id: 4,
      title: 'Sight: Neuroscience for Kids',
      image: SightCover,
      link: 'https://shorturl.at/XHivx',
      ageRange: 'For 7-14 Years',
      description: 'Explore the wonders of vision and how our eyes communicate with our brain through fun activities.'
    },
    {
      id: 5,
      title: 'Senses: Neuroscience for Kids',
      image: SensesCover,
      link: 'https://shorturl.at/JJRQS',
      ageRange: 'For 7-14 Years',
      description: 'Learn about all five senses and how they help us understand the world around us in this comprehensive activity book.'
    },
    {
      id: 6,
      title: 'Touch: Neuroscience for Kids',
      image: TouchCover,
      link: null,
      ageRange: 'Coming Soon',
      description: 'Discover the fascinating world of touch and how our skin and brain work together to perceive sensations.'
    },
    {
      id: 7,
      title: 'Smell: Neuroscience for Kids',
      image: SmellCover,
      link: null,
      ageRange: 'Coming Soon',
      description: 'Explore the amazing sense of smell and how our nose and brain identify countless odors.'
    },
    {
      id: 8,
      title: 'Taste: Neuroscience for Kids',
      image: TasteCover,
      link: null,
      ageRange: 'Coming Soon',
      description: 'Unravel the mysteries of taste and how our tongue and brain differentiate between sweet, sour, salty, bitter, and umami.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Neuroscience for Kids</HeroTitle>
          <HeroSubtitle>
            Engaging activity books that make learning about the brain fun and accessible for children ages 7-14
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <BooksSection id="books">
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Our Activity Books</SectionTitle>
            <SectionDescription>
              Discover our collection of neuroscience activity books designed to spark curiosity and make learning about the brain engaging and fun.
            </SectionDescription>
          </SectionHeader>
          
          <BooksGrid>
            {books.map(book => (
              <BookCard key={book.id}>
                <BookCover src={book.image} alt={`${book.title} cover`} />
                <BookContent>
                  <AgeTag>{book.ageRange}</AgeTag>
                  <BookTitle>{book.title}</BookTitle>
                  <BookDescription>{book.description}</BookDescription>
                  {book.link ? (
                    <BookButton href={book.link} target="_blank" rel="noopener noreferrer">
                      View on Amazon
                    </BookButton>
                  ) : (
                    <BookButton as="span" style={{ cursor: 'not-allowed', backgroundColor: '#cccccc' }}>
                      Coming Soon
                    </BookButton>
                  )}
                </BookContent>
              </BookCard>
            ))}
          </BooksGrid>
        </SectionContent>
      </BooksSection>

      <MissionSection id="mission">
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionDescription>
              At Neuroscience4Kids, our mission is to inspire the next generation of scientists, doctors, and curious minds by making neuroscience accessible, engaging, and fun for children ages 7-14.
            </SectionDescription>
          </SectionHeader>
          
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
      </MissionSection>

      <CreatorsSection id="team">
        <SectionContent>
          <SectionHeader>
            <SectionTitle>Meet the Team</SectionTitle>
            <SectionDescription>
              The talented individuals behind our neuroscience activity books for children.
            </SectionDescription>
          </SectionHeader>
          
          <CreatorsGrid>
            <CreatorCard>
              <CreatorPhoto src={NinaPhoto} alt="Nina Atari" />
              <CreatorName>Nina Atari</CreatorName>
              <CreatorRole>Educational Content Designer & Creative Director</CreatorRole>
              <CreatorBio>
                Nina Atari is the creative force behind the Neuroscience4Kids activity books. With her background in education and passion for making complex topics accessible to children, Nina designs engaging activities and creates the visual elements that bring neuroscience concepts to life. Her innovative approach to educational content ensures that children not only learn but enjoy the process of discovery.
              </CreatorBio>
              <CreatorLink href="https://www.linkedin.com/in/nina-atari-7021b0207/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </CreatorLink>
            </CreatorCard>
            
            <CreatorCard>
              <CreatorPhoto src={AhmadPhoto} alt="Dr. Ahmad Nazzal" />
              <CreatorName>Dr. Ahmad Nazzal</CreatorName>
              <CreatorRole>Scientific Advisor & Medical Consultant</CreatorRole>
              <CreatorBio>
                Dr. Ahmad Nazzal, MD, PhD, brings his extensive medical knowledge and scientific expertise to ensure all content in the Neuroscience4Kids books is accurate and up-to-date. His background in neuroscience and commitment to education helps translate complex brain concepts into age-appropriate information. Dr. Nazzal reviews all materials to maintain the highest standards of scientific integrity while keeping the content engaging for young minds.
              </CreatorBio>
              <CreatorLink href="https://www.linkedin.com/in/drahmadnazzal/" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </CreatorLink>
            </CreatorCard>
          </CreatorsGrid>
        </SectionContent>
      </CreatorsSection>

      <TestimonialsSection id="testimonials">
        <SectionContent>
          <SectionHeader>
            <SectionTitle>What Parents & Educators Say</SectionTitle>
            <SectionDescription>
              Hear from parents and educators who have used our neuroscience activity books with their children and students.
            </SectionDescription>
          </SectionHeader>
          
          <TestimonialsGrid>
            <TestimonialItem>
              <TestimonialText>
                "These activity books have transformed how my students engage with neuroscience concepts. The colorful illustrations and hands-on activities make complex ideas accessible and fun! My third-graders are now excited about brain science and constantly asking questions about how their minds work."
              </TestimonialText>
              <TestimonialAuthor>Elena Popescu</TestimonialAuthor>
              <TestimonialRole>Elementary Science Teacher</TestimonialRole>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialText>
                "My 9-year-old daughter loves the Brain activity book. She's constantly sharing fascinating facts about the brain with everyone she meets. It's wonderful to see her so excited about science! These books have sparked what I believe will be a lifelong interest in neuroscience."
              </TestimonialText>
              <TestimonialAuthor>Omar Al-Mansoori</TestimonialAuthor>
              <TestimonialRole>Parent</TestimonialRole>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialText>
                "As a pediatric occupational therapist, I use these books to help children understand their sensory processing. The Senses book in particular has been invaluable in my practice. The activities are thoughtfully designed and the scientific content is accurate while remaining accessible to young minds."
              </TestimonialText>
              <TestimonialAuthor>Priya Sharma</TestimonialAuthor>
              <TestimonialRole>Pediatric Occupational Therapist</TestimonialRole>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialText>
                "I homeschool my three children, and these neuroscience books have been a perfect addition to our science curriculum. The activities keep them engaged while teaching important concepts about the brain and nervous system. The books are well-structured and build knowledge progressively."
              </TestimonialText>
              <TestimonialAuthor>Valentina Rojas</TestimonialAuthor>
              <TestimonialRole>Homeschool Educator</TestimonialRole>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialText>
                "As a school librarian, I'm always looking for engaging educational resources. These neuroscience books are a fantastic find! They're popular with students and teachers alike, and they do an excellent job of simplifying complex topics without losing scientific accuracy. Highly recommended for any school library."
              </TestimonialText>
              <TestimonialAuthor>Thuy Nguyen</TestimonialAuthor>
              <TestimonialRole>School Librarian</TestimonialRole>
            </TestimonialItem>
            
            <TestimonialItem>
              <TestimonialText>
                "My son, who is usually reluctant to read, absolutely devoured the Neuron book! The interactive elements and clear explanations made neuroscience exciting for him. As a parent and neuroscience enthusiast myself, I appreciate the effort put into making these books both fun and informative."
              </TestimonialText>
              <TestimonialAuthor>Dalia Rahimi</TestimonialAuthor>
              <TestimonialRole>Parent & Neuroscience Enthusiast</TestimonialRole>
            </TestimonialItem>
          </TestimonialsGrid>
        </SectionContent>
      </TestimonialsSection>
    </HomeContainer>
  );
};

export default Home;


