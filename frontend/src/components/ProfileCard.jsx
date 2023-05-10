import styled from 'styled-components/macro';
import Me from '../assets/Me.jpg';

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 50rem;
    position: relative;
`

const ImageContainer = styled.div`
    width: 100%;
    position: absolute;
    top: 3rem;
    display: flex;
    justify-content: center;
`

const ProfileImg = styled.img`
    width: 40%;
    border: 0.2rem solid #fff;
    border-radius: 50%;
`

const ColorSection = styled.div`
    flex: 2.5;
    width: 100%;
    background-color: var(--primary);
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
`

const DataSection = styled.div`
    flex: 9.5;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
`

const ProfileCard = () => {
    return (
        <Container>
            <Wrapper>

                <ImageContainer>
                    <ProfileImg src={Me} />
                </ImageContainer>

                <ColorSection>
                    d
                </ColorSection>

                <DataSection>
                    d
                </DataSection>
            </Wrapper>
        </Container>
    );
}

export default ProfileCard;