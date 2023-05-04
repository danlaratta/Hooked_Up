import { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Logo1 from '../assets/Logo-Green-White1.svg';
import Logo2 from '../assets/Logo-White-Green1.svg';
import Logo3 from '../assets/Logo-Green-White2.svg';
import Logo4 from '../assets/Logo-White-Green2.svg';
import { HiHome } from 'react-icons/hi';
import { FaUserFriends } from 'react-icons/fa';
import { IoSearch, IoFish, IoNotifications } from 'react-icons/io5';
import { GiBoatFishing } from 'react-icons/gi';

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
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
    color: #5f6163;
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
        color: #5f6163;
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
    flex-direction: column;
    justify-content: center;

    &:hover {
        color: var(--primary);
        cursor: pointer;
    }
`

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
`

const NavLink = styled.div`
    font-size: 1.4rem;
`




const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Section style={{flex: 3, justifyContent: 'flex-start'}}>
                    <LogoContainer>
                        <Logo src={Logo3} alt='Logo' />
                    </LogoContainer>

                    <SearchContainer>
                        <SearchIcon> <IoSearch /> </SearchIcon>
                        <SearchBar type='search' placeholder='Search' />
                    </SearchContainer>
                </Section>

                <Section style={{flex: 6, justifyContent: 'center'}}>
                <Nav>
                        <NavItem>
                            <IconContainer>
                                <HiHome />
                            </IconContainer>

                            <NavLink> Home </NavLink>
                        </NavItem>

                        <NavItem>
                            <IconContainer>
                                <FaUserFriends />
                            </IconContainer>

                            <NavLink> Friends </NavLink>
                        </NavItem>

                        <NavItem>
                            <IconContainer>
                                < IoFish />
                            </IconContainer>

                            <NavLink> Fish Log </NavLink>
                        </NavItem>

                        <NavItem>
                            <IconContainer style={{fontSize: '3rem'}}>
                                <GiBoatFishing />
                            </IconContainer>

                            <NavLink> Events </NavLink>
                        </NavItem>

                        <NavItem>
                            <IconContainer>
                                <IoNotifications />
                            </IconContainer>

                            <NavLink> Notifcations </NavLink>
                        </NavItem>
                    </Nav>
                </Section>

                <Section style={{flex: 3, justifyContent: 'flex-end'}}>
                    
                </Section>
            </Wrapper>
        </Container>
    );
}

export default Navbar;