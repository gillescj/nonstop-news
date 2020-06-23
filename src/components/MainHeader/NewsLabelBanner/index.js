import React from 'react';
import { Container } from './styles';

const NewsLabelBanner = ({ category, country }) => {
    return (
        <Container>
            {country}
            {category !== 'General' ? ' ' + category : null}
        </Container>
    );
};

export default NewsLabelBanner;
