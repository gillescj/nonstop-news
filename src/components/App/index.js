import React from 'react';
import { Container } from './style';
import MainContainer from '../MainContainer';
import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';

const App = () => {
    return (
        <Container>
            <MainHeader />
            <MainContainer />
            <MainFooter />
        </Container>
    );
};

export default App;
