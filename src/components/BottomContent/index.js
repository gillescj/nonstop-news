import React from 'react';
import { Container } from './styles';
import SecondaryNewsCard from '../NewsCards/SecondaryNewsCard';

const BottomContent = () => {
    const twelveNewsCards = (
        <>
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
            <SecondaryNewsCard />
        </>
    );
    return <Container>{twelveNewsCards}</Container>;
};

export default BottomContent;
