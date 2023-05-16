import { useState } from 'react';
import styled from 'styled-components/macro';
import Me from '../assets/Me.jpg';

const Container = styled.div`
    width: 100%;
    border-radius: 1rem;
    background-color: #fff;
    border: 0.2rem solid var(--border);
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5%;
    padding: 2rem 0rem;
`

const ProfileImg = styled.img`
    width: 6.5%;
    border-radius: 50%;
`

const Post = styled.div`
    width: 60%;
    background-color: var(--gray);
    border-radius: 3rem;
    padding: 1rem 3rem;
    border: 0.2rem solid var(--border);

    &:hover {
        cursor: pointer;
    }
`

const Placeholder = styled.span`
    font-size: 1.8rem;
    color: var(--dark-gray);
`

const NewPost = () => {

    const [postModal, setPostModal] = useState<boolean>(false);

    return (
        <Container>
            <Wrapper>
                <ProfileImg src={Me} />
                
                <Post onClick={() => setPostModal(!postModal)}> 
                    <Placeholder> Share a post </Placeholder> 
                </Post>
            </Wrapper>
        </Container>
    );
}

export default NewPost;