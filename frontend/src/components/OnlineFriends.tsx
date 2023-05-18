import styled from 'styled-components/macro';
import Me from '../assets/Me.jpg';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
    border-radius: 1rem;
    border: 0.2rem solid var(--border);
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

const Title = styled.h1`
    color: var(--dark-gray);
    padding-left: 1rem;
    padding-top: 1rem;
`

const FriendsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
`

const Friend = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    padding: 1rem;
    border-radius: 1rem;

    &:hover {
        background-color: var(--gray);
        cursor: pointer;
    }
`

const ProfileImg = styled.img`
    width: 23%;
    border-radius: 50%;
`

const OnlineDot = styled.div`
    height: 1.4rem;
    width: 1.4rem;
    background-color: #31a24c;
    border: 0.22rem solid #fff;
    border-radius: 50%;
    position: absolute;
    margin-left: 3.5rem;
    margin-top: 4.5rem;
`

const Name = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
`

const OnlineFriends = () => {
    return (
        <Container>
            <Wrapper>
                <Title> Online Friends </Title>
                <FriendsContainer>
                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>

                    <Friend>
                        <ProfileImg src={Me} />
                        <OnlineDot /> 
                        <Name> Dan Laratta </Name>
                    </Friend>
                </FriendsContainer>
                
            </Wrapper>
        </Container>
    );
}

export default OnlineFriends;