import { useState } from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Logo1 from '../assets/Logo-Green-White1.svg';
import Logo2 from '../assets/Logo-Green-White2.svg';
import Me from '../assets/Me.jpg';
import { HiHome } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';
import { IoSearch, IoFish, IoNotifications } from 'react-icons/io5';
import { GiBoatFishing } from 'react-icons/gi';

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: 0rem 0.2rem 0.8rem #919090;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 10;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    padding: 0.5rem 0rem;
`

const Section = styled.div`
    display: flex;
    align-items: center;
`

const LogoContainer = styled.div`
    display: flex;
    width: 15%;
`

const Logo = styled.img`
    width: 65%;
`

const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

const SearchIcon = styled.div`
    position: absolute;
    top: 57%;
    left: 1rem;
    transform: translateY(-50%);
    color: var(--dark-gray);
    font-size: 1.4rem;
` 

const SearchBar = styled.input`
    height: 100%;
    padding: 0.75rem 2.5rem;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    background-color: #e3e2e2;

    ::placeholder {
        color: var(--dark-gray);
        opacity: 1;
    }
`

const Nav = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-around;
`

const NavItem = styled.div`
    display: flex;
    align-items: center;
`

const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--dark-gray);
`

const NavLinks = styled(NavLink)`
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--dark-gray);
    font-weight: 500;

    &:hover {
        color: teal;
        cursor: pointer;
    }

    &.active {
        color: teal;
    }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
`

const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5%;
`

const ProfileImg = styled.img`
    width: 10%;
    border-radius: 50%;
`

const Name = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.5%;
`

const Button = styled.button`
    width: 20%;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1rem 0rem;
    border-radius: 1rem;
    border: 0.2rem solid teal;
    cursor: pointer;
`

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    return (
        <Container>
            <Wrapper>
                <Section style={{flex: 3, justifyContent: 'flex-start'}}>
                    <LogoContainer>
                        <NavLink to='/'> <Logo src={Logo1} alt='Logo' /> </NavLink>
                    </LogoContainer>

                    <SearchContainer>
                        <SearchIcon> <IoSearch /> </SearchIcon>
                        <SearchBar type='search' placeholder='Search' />
                    </SearchContainer>
                </Section>

                <Section style={{flex: 6, justifyContent: 'center'}}>
                    <Nav>
                        <NavItem>
                            <NavLinkContainer>
                                <NavLinks to='/'> 
                                    <IconContainer>
                                        <HiHome />
                                    </IconContainer>
                                    Home 
                                </NavLinks>
                            </NavLinkContainer>
                        </NavItem>

                        <NavItem>
                            <NavLinkContainer>
                                <NavLinks to='/friends'> 
                                    <IconContainer >
                                        <FaUserFriends />
                                    </IconContainer>
                                    Friends 
                                </NavLinks>
                            </NavLinkContainer>
                        </NavItem>

                        <NavItem>
                            <NavLinkContainer>
                                <NavLinks to='/fish-log'> 
                                    <IconContainer>
                                        < IoFish />
                                    </IconContainer>
                                    Fish Log 
                                </NavLinks>
                            </NavLinkContainer>
                        </NavItem>

                        <NavItem>
                            <NavLinkContainer>
                                <NavLinks to='/events'> 
                                    <IconContainer style={{fontSize: '3rem'}}>
                                        <GiBoatFishing />
                                    </IconContainer>
                                    Events 
                                </NavLinks>
                            </NavLinkContainer>
                        </NavItem>

                        <NavItem>
                            <NavLinkContainer>
                                <NavLinks to='/notifcations'> 
                                    <IconContainer>
                                        <IoNotifications />
                                    </IconContainer>
                                    Notifcations 
                                </NavLinks>
                            </NavLinkContainer>
                        </NavItem>
                    </Nav>
                </Section>

                <Section style={{flex: 3, justifyContent: 'flex-end'}}>
                    { loggedIn ? 
                        <SectionContainer>
                            <ProfileImg src={Me} />
                            <Name> Dan </Name>
                        </SectionContainer>

                        :

                        <ButtonContainer>
                            <Button style={{backgroundColor: "#fff", color: "var(--primary"}}> Join </Button>
                            <Button style={{backgroundColor: "teal", color: "#fff"}}> Sign In </Button>
                        </ButtonContainer>
                    }   
                </Section>
            </Wrapper>
        </Container>
    );
}

export default Navbar;