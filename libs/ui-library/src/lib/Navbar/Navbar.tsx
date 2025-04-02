import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1976d2;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link).withConfig({
  shouldForwardProp: (prop: string | number) => prop !== 'active'
})<{ active?: boolean }>`
  color: ${props => props.active ? '#1976d2' : '#666'};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(25, 118, 210, 0.1);
  }
`;

interface NavItem {
  path: string;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Social Dashboard</Logo>
        <NavLinks>
          {items.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              active={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}; 