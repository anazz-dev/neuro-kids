import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BookCardContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-bottom: 3px solid #f0f0f0;
`;

const BookContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BookTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const BookDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const BookButton = styled(Link)`
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #ff5252;
  }
`;

const AgeTag = styled.span`
  background-color: #ffd700;
  color: #333;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
`;

const BookCard = ({ title, image, description, amazonLink, ageRange }) => {
  return (
    <BookCardContainer>
      <BookImage src={image} alt={`${title} cover`} />
      <BookContent>
        <AgeTag>{ageRange}</AgeTag>
        <BookTitle>{title}</BookTitle>
        <BookDescription>{description}</BookDescription>
        <BookButton to={amazonLink} target="_blank" rel="noopener noreferrer">
          View on Amazon
        </BookButton>
      </BookContent>
    </BookCardContainer>
  );
};

export default BookCard;
