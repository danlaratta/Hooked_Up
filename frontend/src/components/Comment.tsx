import { useState } from 'react';
import styled from 'styled-components/macro';
import Me from '../assets/Me.jpg';
import { BsHandThumbsUpFill, BsFillChatDotsFill } from 'react-icons/bs';

const Container = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 0.8rem;
`

const ImageSection = styled.div`
    flex: 1;
`

const ProfileImg = styled.img`
    width: 100%;
    border-radius: 50%;
`

const CommentSection = styled.div`
    flex: 11;
`

const CommentContainer = styled.div`
    background-color: var(--gray);
    padding: 1.5rem;
    border-radius: 1rem;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Name = styled.span`
    font-size: 1.8rem;
    font-weight: 600;
`

const CreatedAt = styled.div`
    font-size: 1.4rem;
    color: var(--dark-gray);
`

const Content = styled.div`
    margin-top: 1rem;
`

const Text = styled.p`
    font-size: 1.6rem;
    margin-top: 0.5rem;
`

const Actions = styled.div<CountProps>`
    width: ${props => props.likeCount > 0 || props.replyCount > 0 ? '45%' : '25%' };
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
`

const ActionItems = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

const LikeText = styled.span<CountProps>`
    font-size: 1.4rem;
    color: ${props => props.liked ? 'teal' : 'var(--dark-gray)'};
    font-weight: 700;
    padding: 0.5rem;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        background-color: var(--gray);
        border-radius: 0.5rem;
    }
`

const ReplyText = styled.span`
    font-size: 1.4rem;
    color: var(--dark-gray);
    font-weight: 700;
    padding: 0.5rem;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        background-color: var(--gray);
        border-radius: 0.5rem;
    }
`

const LikeCount = styled.span<CountProps>`
    opacity: ${props => props.likeCount > 0 ? '1' : '0' };
    font-size: 1.4rem;
    color: var(--dark-gray);
`

const ReplyCount = styled.span<CountProps>`
    opacity: ${props => props.replyCount > 0 ? '1' : '0' };
    font-size: 1.4rem;
    color: var(--dark-gray);
`


type CountProps = {
    liked: boolean;
    likeCount: number;
    replyCount: number;
}

const Comment = () => {

    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likes, setLikes] = useState<number>(2);
    const [replies, setReplies] = useState<number>(1);

    const handleLikeClick = () => {
        if(isLiked === true) {
            setLikes(likes - 1);
        }
        else if(isLiked === false) {
            setLikes(likes + 1);
            console.log("Unliked");
        }

        setIsLiked(!isLiked);
    }

    return (
        <Container>
            <Wrapper>
                <ImageSection>
                    <ProfileImg src={Me} />
                </ImageSection>

                <CommentSection>
                    <CommentContainer>
                        <Details> 
                            <Name> Dan Laratta </Name>
                            <CreatedAt> 1d </CreatedAt>
                        </Details>

                        <Content>
                            <Text>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                            </Text>
                        </Content>
                    </CommentContainer>

                    <Actions liked={isLiked} likeCount={likes} replyCount={replies}>
                        <ActionItems>
                            <LikeText onClick={handleLikeClick} liked={isLiked} likeCount={likes} replyCount={replies}> Like </LikeText>
                            <LikeCount liked={isLiked} likeCount={likes} replyCount={replies}> {likes} {likes > 1 ? 'Likes' : 'Like'} </LikeCount>
                        </ActionItems>
                        
                        <ActionItems>
                            <ReplyText> Reply </ReplyText>
                            <ReplyCount liked={isLiked} replyCount={replies} likeCount={likes}> {replies} {replies > 1 ? 'Replies' : 'Reply' } </ReplyCount>
                        </ActionItems>
                    </Actions>
                </CommentSection>
            </Wrapper>
        </Container>
    );
}

export default Comment;