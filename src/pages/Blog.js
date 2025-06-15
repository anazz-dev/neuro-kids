import React from 'react';
import styled from 'styled-components';
import BlogCard from '../components/BlogCard';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const BlogDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Placeholder image for blog posts
const placeholderImage = 'https://via.placeholder.com/800x450?text=Neuroscience+For+Kids';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How the Brain Works: A Guide for Kids',
      image: placeholderImage,
      excerpt: 'Learn about the different parts of the brain and how they work together to help you think, feel, and move.',
      category: 'Brain Basics',
      date: 'June 1, 2025',
      slug: 'how-the-brain-works'
    },
    {
      id: 2,
      title: 'Fun Neuroscience Experiments to Try at Home',
      image: placeholderImage,
      excerpt: 'Discover simple and safe experiments that demonstrate how your brain and senses work together.',
      category: 'Activities',
      date: 'May 15, 2025',
      slug: 'neuroscience-experiments'
    },
    {
      id: 3,
      title: 'The Science of Memory: How We Remember Things',
      image: placeholderImage,
      excerpt: 'Explore how your brain stores and recalls information, and learn tips to improve your memory.',
      category: 'Memory',
      date: 'May 1, 2025',
      slug: 'science-of-memory'
    },
    {
      id: 4,
      title: 'How Our Eyes and Brain Work Together',
      image: placeholderImage,
      excerpt: 'Discover the amazing journey of how light enters your eyes and becomes images in your brain.',
      category: 'Vision',
      date: 'April 15, 2025',
      slug: 'eyes-and-brain'
    },
    {
      id: 5,
      title: 'The Amazing World of Neurons',
      image: placeholderImage,
      excerpt: 'Learn about neurons, the special cells that carry messages throughout your body and brain.',
      category: 'Neurons',
      date: 'April 1, 2025',
      slug: 'world-of-neurons'
    },
    {
      id: 6,
      title: 'How Music Affects Your Brain',
      image: placeholderImage,
      excerpt: 'Explore how listening to and playing music changes your brain and helps you learn.',
      category: 'Music & Brain',
      date: 'March 15, 2025',
      slug: 'music-and-brain'
    }
  ];

  return (
    <BlogContainer>
      <BlogHeader>
        <BlogTitle>Neuroscience Blog</BlogTitle>
        <BlogDescription>
          Explore fascinating articles about neuroscience written especially for kids and parents. Learn about the brain, nervous system, and how our amazing minds work!
        </BlogDescription>
      </BlogHeader>
      
      <BlogGrid>
        {blogPosts.map(post => (
          <BlogCard 
            key={post.id}
            title={post.title}
            image={post.image}
            excerpt={post.excerpt}
            category={post.category}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
