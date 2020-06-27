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
                <a
                    href="https://www.currentsapi.services/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Currents API
                </a>
            </Attribution>
            <CountryContainer>{renderedCountryLinks}</CountryContainer>
        </Container>
    );
};

export default MainFooter;
