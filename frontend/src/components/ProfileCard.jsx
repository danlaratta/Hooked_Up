import styled from 'styled-components/macro';
import Me from '../assets/Me.jpg';

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 60rem;
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
    border: 0.3rem solid #fff;
    border-radius: 50%;
`

const ColorSection = styled.div`
    flex: 2;
    width: 100%;
    background-color: teal;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border: 0.2rem solid #e0dfdc;
    border-bottom: none;
`

const DataSection = styled.div`
    flex: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border: 0.2rem solid #e0dfdc;
    border-top: none;
`

const Name = styled.h1`
    font-size: 2rem;
    padding-top: 5rem;
`

const DataItem = styled.div`
    flex: 1;
    width: 100%;
    border-top: 0.2rem solid #e0dfdc;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

const Label = styled.span`
    font-size: 1.8rem;
    font-weight: 500;
`

const Data = styled.span`
    font-size: 1.6rem;
    color: var(--dark-gray);
`

const ProfileCard = () => {
    return (
        <Container>
            <Wrapper>

                <ImageContainer>
                    <ProfileImg src={Me} />
                </ImageContainer>

                <ColorSection> </ColorSection>

                <DataSection>
                    <DataItem style={{borderTop: 'none'}}>
                        <Name> Dan Laratta </Name>
                    </DataItem>

                    <DataItem>
                        <Label> Friends </Label>
                        <Data> 123 </Data>
                    </DataItem>

                    <DataItem>
                        <Label> Fish Logged </Label>
                        <Data> 15 </Data>
                    </DataItem>

                    <DataItem>
                        <Label> Fished Locations </Label>
                        <Data> 4 </Data>
                    </DataItem>
                </DataSection>
            </Wrapper>
        </Container>
    );
}

export default ProfileCard;