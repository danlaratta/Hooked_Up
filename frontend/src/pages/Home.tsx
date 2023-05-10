import styled from 'styled-components/macro';
import ProfileCard from '../components/ProfileCard';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 80%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 2.5%;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Section style={{flex: 2.5}}>
                    <ProfileCard />
                </Section>

                <Section style={{flex: 7}}>
                    dfadf
                </Section>

                <Section style={{flex: 2.5}}>
                    dfad
                </Section>
            </Wrapper>
        </Container>
    );
}

export default Home;