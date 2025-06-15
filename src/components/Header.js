import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  span {
    color: #FFD700;
  }
`;

const BrainIcon = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #FFD700;
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <BrainIcon>🧠</BrainIcon>
          Neuroscience<span>4Kids</span>
        </Logo>
        
        <NavLinks>
          <NavLink onClick={() => scrollToSection('books')}>Books</NavLink>
          <NavLink onClick={() => scrollToSection('mission')}>Our Mission</NavLink>
          <NavLink onClick={() => scrollToSection('team')}>Team</NavLink>
          <NavLink onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
        </NavLinks>
        
        <MobileMenuButton aria-label="Menu">☰</MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
