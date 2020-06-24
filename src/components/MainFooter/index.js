import React from 'react';
import { Container, Attribution, CountryContainer } from './styles';
import acceptedCountries from 'utils/acceptedCountries';

const MainFooter = () => {
    const renderedCountryLinks = acceptedCountries.map((country) => {
        return <h4 key={country.code}>{country.name}</h4>;
    });

    return (
        <Container>
            <Attribution>
                Made possible with{' '}
                <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
                    NewsAPI
                </a>
            </Attribution>
            <CountryContainer>{renderedCountryLinks}</CountryContainer>
        </Container>
    );
};

export default MainFooter;
