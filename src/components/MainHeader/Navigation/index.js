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
        { code: 'regional', name: 'National' },
        { code: 'business', name: 'Business' },
        { code: 'entertainment', name: 'Entertainment' },
        { code: 'health', name: 'Health' },
        { code: 'science', name: 'Science' },
        { code: 'sports', name: 'Sports' },
        { code: 'technology', name: 'Technology' },
    ];

    const renderedCategoryList = categoryNameList.map((category) => {
        return (
            <li
                key={category.code}
                onClick={() =>
                    dispatch(changeCategory({ code: category.code, name: category.name }))
                }
            >
                {category.name}
            </li>
        );
    });

    const renderedCategoryOptions = categoryNameList.map((category) => {
        return (
            <option
                key={category.code}
                onClick={() =>
                    dispatch(changeCategory({ code: category.code, name: category.name }))
                }
            >
                {category.name}
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
            <Logo
                onClick={() =>
                    dispatch(changeCategory({ code: 'regional', name: 'National' }))
                }
            >
                Nonstop News
            </Logo>
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
