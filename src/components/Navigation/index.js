import React from 'react';
import {
    Container,
    Logo,
    SectionsContainer,
    CategoryList,
    CategoryDropdown,
    CountryDropdown,
    SectionDropdown,
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
            <SectionsContainer>
                <CategoryList>
                    <li>Business</li>
                    <li>Entertainment</li>
                    <li>Health</li>
                    <li>Science</li>
                    <li>Sports</li>
                    <li>Technology</li>
                </CategoryList>
                <CategoryDropdown defaultValue="Categories">
                    <option disabled hidden>
                        Categories
                    </option>
                    <option>General</option>
                    <option>Business</option>
                    <option>Entertainment</option>
                    <option>Health</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Technology</option>
                </CategoryDropdown>
                <CountryDropdown defaultValue="Countries">
                    <option disabled hidden>
                        Countries
                    </option>
                    {renderedCountryOptions}
                </CountryDropdown>
                <SectionDropdown defaultValue="Sections">
                    <optgroup label="Categories">
                        <option disabled hidden>
                            Sections
                        </option>
                        <option>General</option>
                        <option>Business</option>
                        <option>Entertainment</option>
                        <option>Health</option>
                        <option>Science</option>
                        <option>Sports</option>
                        <option>Technology</option>
                    </optgroup>
                    <optgroup label="Countries">{renderedCountryOptions}</optgroup>
                </SectionDropdown>
            </SectionsContainer>
        </Container>
    );
};

export default Navigation;
