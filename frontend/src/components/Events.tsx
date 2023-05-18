import styled from 'styled-components/macro';

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

const EventContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 1rem;

    &:hover {
        background-color: var(--gray);
        cursor: pointer;
    }
`

const Calendar = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    border: 0.2rem solid teal;
    border-radius: 1rem;
`

const Day = styled.div`
    flex: 7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
`

const Month = styled.div`
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border: 0.1rem solid teal;
    background-color: teal;
`

const Text = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
`

const Event = styled.div`
    display: flex;
    flex-direction: column;
`

const EventName = styled.h1`
    font-size: 1.6rem;
`

const Location = styled.span`
    font-size: 1.4rem;
    color: var(--dark-gray);
`

const Events = () => {

    const events = [
        {
            day: 28,
            month: 'June',
            event: 'Food Truck Festival',
            location: 'Downtown Toms River'
        },
        {
            day: 4,
            month: 'July',
            event: 'Dance Party',
            location: 'Beachcombers Bar & Grill'
        },
        {
            day: 17,
            month: 'August',
            event: 'Beat The Clock',
            location: 'Bar Anticipation'
        },
    ]

    return (
        <Container>
            <Wrapper>
                <Title> Upcoming Events </Title>

                {events.map((e) => (
                    <EventContainer>
                    <Calendar style={{flex: 3}}>
                        <Day> <Text> {e.day} </Text> </Day>
                        <Month> <Text style={{color: '#fff'}}> {e.month} </Text> </Month>
                    </Calendar>

                    <Event style={{flex: 9}}>
                        <EventName> {e.event} </EventName>
                        <Location> {e.location} </Location>
                    </Event>
                </EventContainer>
                ))}
            </Wrapper>
        </Container>
    );
}

export default Events;