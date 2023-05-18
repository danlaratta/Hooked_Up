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
    max-height: 58rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`

const Friend = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
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

const Name = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
`

const OnlineFriends = () => {

    const friends = [
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
        {
            name: 'Dan Laratta',
            img: Me,
        },
    ]

    return (
        <Container>
            <Wrapper>
                <Title> Online Friends </Title>
                <FriendsContainer>
                    {
                        friends.map((friend) => (
                            <Friend>
                                <ProfileImg src={friend.img} />
                                <Name> {friend.name} </Name>
                            </Friend>
                        ))
                    }
                </FriendsContainer>
                
            </Wrapper>
        </Container>
    );
}

export default OnlineFriends;