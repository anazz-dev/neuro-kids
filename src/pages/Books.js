import React from 'react';
import styled from 'styled-components';
import BookCard from '../components/BookCard';

// Import book cover images
import BrainCover from '../assets/images/Brain-Cover.png';
import NeuronCover from '../assets/images/Neuron-Cover.png';
import HearingCover from '../assets/images/Hearing-Cover.png';
import SightCover from '../assets/images/Sight-Cover.png';
import SensesCover from '../assets/images/Senses-Cover.png';

const BooksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BooksHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BooksTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const BooksDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const Books = () => {
  const booksData = [
    {
      id: 1,
      title: 'Brain: Neuroscience for Kids',
      image: BrainCover,
      description: 'Explore the amazing world of the brain through fun activities, puzzles, and colorful illustrations designed for children.',
      amazonLink: 'https://shorturl.at/KsToc',
      ageRange: 'For 7-14 Years'
    },
    {
      id: 2,
      title: 'Neuron: Neuroscience for Kids',
      image: NeuronCover,
      description: 'Learn about neurons, the building blocks of the brain, through engaging activities and fascinating facts.',
      amazonLink: 'https://shorturl.at/6FXEt',
      ageRange: 'For 7-14 Years'
    },
    {
      id: 3,
      title: 'Hearing: Neuroscience for Kids',
      image: HearingCover,
      description: 'Discover how our ears work and how sound travels to our brain in this interactive activity book.',
      amazonLink: 'https://shorturl.at/FlyuD',
      ageRange: 'For 7-14 Years'
    },
    {
      id: 4,
      title: 'Sight: Neuroscience for Kids',
      image: SightCover,
      description: 'Explore the wonders of vision and how our eyes communicate with our brain through fun experiments and activities.',
      amazonLink: 'https://shorturl.at/XHivx',
      ageRange: 'For 7-14 Years'
    },
    {
      id: 5,
      title: 'Senses: Neuroscience for Kids',
      image: SensesCover,
      description: 'Learn about all five senses and how they help us understand the world around us in this comprehensive activity book.',
      amazonLink: 'https://shorturl.at/JJRQS',
      ageRange: 'For 7-14 Years'
    }
  ];

  return (
    <BooksContainer>
      <BooksHeader>
        <BooksTitle>Neuroscience Activity Books</BooksTitle>
        <BooksDescription>
          Discover our collection of engaging activity books designed to help children learn about neuroscience in a fun and interactive way. Each book focuses on different aspects of the brain and nervous system.
        </BooksDescription>
      </BooksHeader>
      
      <BooksGrid>
        {booksData.map(book => (
          <BookCard 
            key={book.id}
            title={book.title}
            image={book.image}
            description={book.description}
            amazonLink={book.amazonLink}
            ageRange={book.ageRange}
          />
        ))}
      </BooksGrid>
    </BooksContainer>
  );
};

export default Books;
