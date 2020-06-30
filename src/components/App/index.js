import React from 'react';
import { Container } from './style';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainContainer from '../MainContainer';
import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';

const App = () => {
    return (
        <Container>
            <MainHeader />
            <Switch>
                <Route path={'/:country'} exact component={MainContainer} />
                <Route path={'/:country/:category'} exact component={MainContainer} />
                <Redirect to={'/ca'} />
            </Switch>

            <MainFooter />
        </Container>
    );
};

export default App;
