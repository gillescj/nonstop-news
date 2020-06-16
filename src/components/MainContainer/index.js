import React from 'react';
import { Container, SecondaryNewsCardContainer } from './styles';
import PrimaryNewsCard from '../NewsCards/PrimaryNewsCard';
import SecondaryNewsCard from '../NewsCards/SecondaryNewsCard';

const MainContainer = () => {
    return (
        <Container>
            <PrimaryNewsCard
                sourceName="FXStreet"
                author="Yohay Elam"
                title="Forex Today: Double stimulus talk downs dollar ahead of Powell's power-play, US retail sales"
                description={`Here is what you need to know on Tuesday, June 16: The market mood is \"risk-on\" once again, as the Federal Reserve announced buying corporate bonds an`}
                publishedAt="2020-06-16T06:07:43Z"
                url="https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607"
            />
            <PrimaryNewsCard
                sourceName="FXStreet"
                author="Yohay Elam"
                title="Forex Today: Double stimulus talk downs dollar ahead of Powell's power-play, US retail sales"
                description={`Here is what you need to know on Tuesday, June 16: The market mood is \"risk-on\" once again, as the Federal Reserve announced buying corporate bonds an`}
                publishedAt="2020-06-16T06:07:43Z"
                url="https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607"
            />
            <SecondaryNewsCardContainer>
                <SecondaryNewsCard
                    sourceName="FXStreet"
                    author="Yohay Elam"
                    title="Forex Today: Double stimulus talk downs dollar ahead of Powell's power-play, US retail sales"
                    description={`Here is what you need to know on Tuesday, June 16: The market mood is \"risk-on\" once again, as the Federal Reserve announced buying corporate bonds an`}
                    publishedAt="2020-06-16T06:07:43Z"
                    url="https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607"
                />
                <SecondaryNewsCard
                    sourceName="FXStreet"
                    author="Yohay Elam"
                    title="Forex Today: Double stimulus talk downs dollar ahead of Powell's power-play, US retail sales"
                    description={`Here is what you need to know on Tuesday, June 16: The market mood is \"risk-on\" once again, as the Federal Reserve announced buying corporate bonds an`}
                    publishedAt="2020-06-16T06:07:43Z"
                    url="https://www.fxstreet.com/news/forex-today-double-stimulus-talk-downs-dollar-ahead-of-powells-power-play-us-retail-sales-202006160607"
                />
            </SecondaryNewsCardContainer>
        </Container>
    );
};

export default MainContainer;
