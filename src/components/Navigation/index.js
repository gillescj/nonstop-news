import React from 'react';
import {
    Container,
    Logo,
    CategoryList,
    CategoryDropdown,
    CountryDropdown,
} from './styles';
import acceptedCountries from 'utils/acceptedCountries';

const sortedCountries = acceptedCountries.sort((a, b) => {
    return a.name > b.name;
});

const Navigation = () => {
    const renderedCountryOptions = sortedCountries.map((country) => {
        return <option key={country.code}>{country.name}</option>;
    });

    return (
        <Container>
            <Logo>Nonstop News</Logo>
            <CategoryList>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Health</li>
                <li>Science</li>
                <li>Sports</li>
                <li>Technology</li>
            </CategoryList>
            <CategoryDropdown>
                <option>General</option>
                <option>Business</option>
                <option>Entertainment</option>
                <option>Health</option>
                <option>Science</option>
                <option>Sports</option>
                <option>Technology</option>
            </CategoryDropdown>
            <CountryDropdown>{renderedCountryOptions}</CountryDropdown>
        </Container>
    );
};

export default Navigation;
