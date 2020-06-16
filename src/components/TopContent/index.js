import React from 'react';
import { Container, SecondaryNewsCardContainer } from './styles';
import PrimaryNewsCard from '../NewsCards/PrimaryNewsCard';
import SecondaryNewsCard from '../NewsCards/SecondaryNewsCard';

const TopContent = () => {
    return (
        <Container>
            <PrimaryNewsCard />
            <PrimaryNewsCard />
            <SecondaryNewsCardContainer>
                <SecondaryNewsCard />
                <SecondaryNewsCard />
            </SecondaryNewsCardContainer>
        </Container>
    );
};

export default TopContent;
