import React from "react";
import styled from "@emotion/styled";
import { useThemeUI } from "theme-ui";
import { Link } from "gatsby";
import Logo from "./Logo";

const Header: React.FC = () => {
  const { theme } = useThemeUI();

  return (
    <HeaderContainer>
      <NavigationContainer>
        <nav>
          <NavigationList>
            <li>
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <li>
              <NavLink
                to="/products"
                activeStyle={{
                  borderBottom: `2px solid ${theme.colors.text}`
                }}
              >
                Products
              </NavLink>
            </li>
          </NavigationList>
        </nav>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  top: ${props => props.theme.space[0]};
  height: ${props => props.theme.sizes["24"]};
  background: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndices["50"]};
  box-shadow: ${props => props.theme.shadows.md};
`;

const NavigationContainer = styled.div`
  margin: ${props => props.theme.space[3]} auto;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin: ${props => props.theme.space[5]} auto
      ${props => props.theme.space[4]};
    max-width: ${props => props.theme.sizes["2xl"]};
  }
  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: ${props => props.theme.sizes["4xl"]};
  }
  @media (min-width: ${props => props.theme.breakpoints[3]}) {
    max-width: ${props => props.theme.sizes["6xl"]};
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.space[0]};
  margin: ${props => props.theme.space[0]};
  > li {
    align-self: center;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  &:hover,
  &:focus {
    border-bottom: 2px solid ${props => props.theme.colors.muted};
  }
`;
