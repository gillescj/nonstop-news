import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from 'store/articles';
import { Container } from './styles';
import TopContent from '../TopContent';
import MiddleContent from '../MiddleContent';
import BottomContent from '../BottomContent';

const MainContainer = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles.list);
    const loading = useSelector((state) => state.articles.loading);

    useEffect(() => {
        dispatch(loadArticles());
    }, []);

    return (
        <Container>
            {loading ? (
                'Loading'
            ) : (
                <>
                    <TopContent topArticles={articles.slice(0, 4)} />
                    <MiddleContent middleArticles={articles.slice(4, 20)} />
                    <BottomContent bottomArticles={articles.slice(20)} />
                </>
            )}
        </Container>
    );
};

export default MainContainer;
