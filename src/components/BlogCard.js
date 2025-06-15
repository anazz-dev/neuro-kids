import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogCardContainer = styled.article`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogCategory = styled.span`
  background-color: #6e8efb;
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #333;
`;

const BlogExcerpt = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 0.9rem;
`;

const ReadMoreLink = styled(Link)`
  color: #6e8efb;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BlogCard = ({ title, image, excerpt, category, date, slug }) => {
  return (
    <BlogCardContainer>
      <BlogImage src={image} alt={title} />
      <BlogContent>
        <BlogCategory>{category}</BlogCategory>
        <BlogTitle>{title}</BlogTitle>
        <BlogExcerpt>{excerpt}</BlogExcerpt>
        <BlogMeta>
          <span>{date}</span>
          <ReadMoreLink to={`/blog/${slug}`}>
            Read More →
          </ReadMoreLink>
        </BlogMeta>
      </BlogContent>
    </BlogCardContainer>
  );
};

export default BlogCard;
