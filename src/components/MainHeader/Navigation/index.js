import React from 'react';
import { useDispatch } from 'react-redux';
import { changeCategory, changeCountry } from 'store/settings';
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
    const dispatch = useDispatch();

    const categoryNameList = [
        'General',
        'Business',
        'Entertainment',
        'Health',
        'Science',
        'Sports',
        'Technology',
    ];

    const renderedCategoryList = categoryNameList.slice(1).map((category) => {
        return (
            <li key={category} onClick={() => dispatch(changeCategory(category))}>
                {category}
            </li>
        );
    });

    const renderedCategoryOptions = categoryNameList.map((category) => {
        return (
            <option key={category} onClick={() => dispatch(changeCategory(category))}>
                {category}
            </option>
        );
    });

    const renderedCountryOptions = sortedCountries.map((country) => {
        return (
            <option
                key={country.code}
                onClick={() =>
                    dispatch(changeCountry({ code: country.code, name: country.name }))
                }
            >
                {country.name}
            </option>
        );
    });

    return (
        <Container>
            <Logo onClick={() => dispatch(changeCategory('General'))}>Nonstop News</Logo>
            <SectionsContainer>
                <CategoryList>{renderedCategoryList}</CategoryList>
                <CategoryDropdown
                    defaultValue="Categories"
                    onChange={(event) => (event.target.value = 'Categories')}
                >
                    <option disabled hidden>
                        Categories
                    </option>
                    {renderedCategoryOptions}
                </CategoryDropdown>
                <CountryDropdown
                    defaultValue="Countries"
                    onChange={(event) => (event.target.value = 'Countries')}
                >
                    <option disabled hidden>
                        Countries
                    </option>
                    {renderedCountryOptions}
                </CountryDropdown>
                <SectionDropdown
                    defaultValue="Sections"
                    onChange={(event) => (event.target.value = 'Sections')}
                >
                    <optgroup label="Categories">
                        <option disabled hidden>
                            Sections
                        </option>
                        {renderedCategoryOptions}
                    </optgroup>
                    <optgroup label="Countries">{renderedCountryOptions}</optgroup>
                </SectionDropdown>
            </SectionsContainer>
        </Container>
    );
};

export default Navigation;
