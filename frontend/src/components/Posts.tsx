import { useState } from 'react'; 
import styled from 'styled-components/macro';
import Me from '../assets/Me.jpg';
import { BsThreeDots } from 'react-icons/bs';
import { BsHandThumbsUpFill, BsHandThumbsUp, BsChatDots } from 'react-icons/bs';
import Comment from './Comment';

const Container = styled.div`
    width: 100%;
    border-radius: 1rem;
    background-color: #fff;
    border: 0.2rem solid var(--border);
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
`

const TopSection = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 2%;
`

const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 0.5rem; */
`

const User = styled.div`
    font-size: 2rem;
    font-weight: 600;
`

const CreatedAt = styled.div`
    font-size: 1.4rem;
    color: var(--dark-gray);
`

const IconContainer = styled.div`
    height: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    color: var(--dark-gray);
    cursor: pointer;
    border-radius: 50%;
    padding: 0.5rem;

    &:hover {
        background-color: var(--gray);
    }
`

const ProfileImg = styled.img`
    width: 15%;
    border-radius: 50%;
`

const ContentSection = styled.div`
    flex: 8;
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Text = styled.p`
    font-size: 1.6rem;
    padding-bottom: 1rem;
`

const ContentImg = styled.img`
    max-width: 100%;
    max-height: 60rem;
    object-fit: cover;
    border-radius: 1rem;
`

const InteractionSection = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;
`

const InteractionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-top: 1rem;
`

const LikeText = styled.span`
    font-size: 1.2rem;
`

const LikeIcon = styled.div`
    font-size: 2.2rem;
    cursor: pointer;
    color: teal;
`

const CommentText = styled.span`
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

/*
const InteractionSection = styled.div`
    flex: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0rem 2rem;
`

const InteractionItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const InteractionText = styled.span`
    font-size: 1.2rem;
    padding-top: 1rem;
`

const Divider = styled.div`
    width: 100%;
    height: 0.1rem;
    background-color: var(--border);
`

const InteractionIcon = styled.div`
    font-size: 2.2rem;
    cursor: pointer;
    color: teal;
`
*/

const CommentSection = styled.div<ShowCommentsProps>`
    width: 100%;
    display: ${props => props.showComments ? 'flex' : 'none'};
    flex-direction: column;
    border-top: 0.15rem solid var(--border);
    padding-top: 1rem;
`

const NewComment = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const CommentInput = styled.input`
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 1.5rem;
    border: 0.15rem solid #b2b2b2;
    outline: none;
`

const Comments = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
`



type ShowCommentsProps = {
    showComments: boolean
}

const Posts = () => {

    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likes, setLikes] = useState<number>(123);
    const [showComments, setShowComments] = useState<boolean>(false);
    const [comments, setComments] = useState<number>(13);

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
    
    const handleCommentClick = () => {
        setShowComments(!showComments);
    }

    return (
        <Container>
            <Wrapper>
                <TopSection> 
                    <LeftSection>
                        <ProfileImg src={Me} />

                        <PostInfo>
                            <User> Dan Laratta </User>
                            <CreatedAt> 3h </CreatedAt>
                        </PostInfo>
                    </LeftSection>

                    <IconContainer> <BsThreeDots /> </IconContainer>
                </TopSection>

                <ContentSection> 
                    <Text> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </Text>

                    <ContentImg src={Me} />
                </ContentSection>

                <InteractionSection> 
                    <InteractionItem>
                        <LikeIcon onClick={handleLikeClick}> { isLiked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />} </LikeIcon>
                        <LikeText> {likes} Likes </LikeText>
                    </InteractionItem>

                    <InteractionItem>
                        <CommentText onClick={handleCommentClick}> {comments} Comments </CommentText>
                    </InteractionItem>
                </InteractionSection>

                {/* <InteractionSection> 
                    <InteractionItem>
                        <InteractionText> 123 Likes </InteractionText>
                        <InteractionText> 13 Comments </InteractionText>
                    </InteractionItem>

                    <Divider />

                    <InteractionItem style={{width: '97%'}}>
                        <InteractionIcon onClick={() => { setIsLiked(!isLiked) }}> { isLiked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />} </InteractionIcon>
                        <InteractionIcon style={{transform: 'scaleX(-1)', marginRight: '1.5rem'}}> <BsChatDots /> </InteractionIcon>
                    </InteractionItem>
                </InteractionSection> */}

                <CommentSection showComments={showComments}>
                    <NewComment>
                        <ProfileImg src={Me} style={{width: '9%'}} />
                        <CommentInput type='text' placeholder='Write a comment...' />
                    </NewComment>

                    <Comments>
                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />
                    </Comments>
                </CommentSection>
            </Wrapper>
        </Container>
    );
}

export default Posts;