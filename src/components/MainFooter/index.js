import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCountry } from 'store/settings';
import { Container, Attribution, CountryContainer } from './styles';
import { acceptedCountriesList, acceptedCountriesObject } from 'utils/acceptedCountries';

const MainFooter = () => {
    const dispatch = useDispatch();

    const renderedCountryLinks = acceptedCountriesList.map((country) => {
        return (
            <h4
                key={country.code}
                onClick={() =>
                    dispatch(changeCountry(acceptedCountriesObject[country.code]))
                }
            >
                {country.name}
            </h4>
        );
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
