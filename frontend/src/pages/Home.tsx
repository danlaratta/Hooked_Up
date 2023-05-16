import { useState } from 'react';
import styled from 'styled-components/macro';
import ProfileCard from '../components/ProfileCard';
import NewPost from '../components/NewPost';
import PostModal from '../components/PostModal';
import Posts from '../components/Posts';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 65%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 2.5%;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Home = () => {

    return (
        <Container>
            <Wrapper>
                <Section style={{flex: 2.5}}>
                    <ProfileCard />
                </Section>

                <Section style={{flex: 7}}>
                    <NewPost />

                    <FeedContainer>
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                        <Posts />
                    </FeedContainer>
                    
                </Section>

                <Section style={{flex: 2.5}}>
                    dfad
                </Section>
            </Wrapper>
        </Container>
    );
}

export default Home;