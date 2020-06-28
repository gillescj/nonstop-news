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
import { acceptedCountriesList, acceptedCountriesObject } from 'utils/acceptedCountries';

const sortedCountries = acceptedCountriesList.sort((a, b) => {
    return a.name > b.name;
});

const Navigation = () => {
    const dispatch = useDispatch();

    const categories = {
        list: [
            { code: 'regional', name: 'National' },
            { code: 'business', name: 'Business' },
            { code: 'entertainment', name: 'Entertainment' },
            { code: 'health', name: 'Health' },
            { code: 'science', name: 'Science' },
            { code: 'sports', name: 'Sports' },
            { code: 'technology', name: 'Technology' },
        ],
        object: {
            regional: { code: 'regional', name: 'National' },
            business: { code: 'business', name: 'Business' },
            entertainment: { code: 'entertainment', name: 'Entertainment' },
            health: { code: 'health', name: 'Health' },
            science: { code: 'science', name: 'Science' },
            sports: { code: 'sports', name: 'Sports' },
            technology: { code: 'technology', name: 'Technology' },
        },
    };

    const handleCategoryDropdownChange = (event) => {
        dispatch(changeCategory(categories.object[event.target.value]));
        event.target.value = 'Categories';
    };

    const handleCountryDropdownChange = (event) => {
        dispatch(changeCountry(acceptedCountriesObject[event.target.value]));
        event.target.value = 'Countries';
    };

    const handleSectionDropdownChange = (event) => {
        const sectionType =
            event.target.options[event.target.selectedIndex].parentNode.label;
        if (sectionType === 'Categories') {
            dispatch(changeCategory(categories.object[event.target.value]));
        } else if (sectionType === 'Countries') {
            dispatch(changeCountry(acceptedCountriesObject[event.target.value]));
        }
        event.target.value = 'Sections';
    };

    const renderedCategoryList = categories.list.map((category) => {
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

    const renderedCategoryOptions = categories.list.map((category) => {
        return (
            <option key={category.code} value={category.code}>
                {category.name}
            </option>
        );
    });

    const renderedCountryOptions = sortedCountries.map((country) => {
        return (
            <option key={country.code} value={country.code}>
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
                    onChange={(event) => handleCategoryDropdownChange(event)}
                >
                    <option disabled hidden>
                        Categories
                    </option>
                    {renderedCategoryOptions}
                </CategoryDropdown>
                <CountryDropdown
                    defaultValue="Countries"
                    onChange={(event) => handleCountryDropdownChange(event)}
                >
                    <option disabled hidden>
                        Countries
                    </option>
                    {renderedCountryOptions}
                </CountryDropdown>
                <SectionDropdown
                    defaultValue="Sections"
                    onChange={(event) => handleSectionDropdownChange(event)}
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
