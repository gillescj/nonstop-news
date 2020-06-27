import React from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';

const NewsLabelBanner = () => {
    const settings = useSelector((state) => state.settings);

    return (
        <Container>
            {settings.country.name}
            {settings.category !== 'regional' ? ' ' + settings.category : null}
        </Container>
    );
};

export default NewsLabelBanner;
