import React from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';

const NewsLabelBanner = () => {
    const settings = useSelector((state) => state.settings);

    return (
        <Container>
            {settings.country.name}
            {settings.category.code !== 'regional' ? ' ' + settings.category.name : null}
        </Container>
    );
};

export default NewsLabelBanner;
