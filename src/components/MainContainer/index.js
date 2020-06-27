import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from 'store/articles';
import { Container } from './styles';
import TopContent from '../TopContent';
import MiddleContent from '../MiddleContent';
import BottomContent from '../BottomContent';

const MainContainer = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settings);
    const articles = useSelector((state) => state.articles.list);
    const loading = useSelector((state) => state.articles.loading);

    useEffect(() => {
        dispatch(loadArticles(settings.category, settings.country.code));
    }, [settings.category, settings.country.code, dispatch]);

    const formattedArticles = articles.map((article) => {
        return {
            source: {
                id: null,
                name: null,
            },
            id: article.id,
            category: article.category,
            language: article.language,
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.image,
            publishedAt: article.published,
        };
    });

    const imageFilteredArticles = formattedArticles.filter((article) => {
        return article.urlToImage !== null && article.urlToImage !== 'None';
    });

    const nonImageFilteredArticles = formattedArticles.filter((article) => {
        return article.urlToImage === null || article.urlToImage === 'None';
    });

    const imageArticles = [
        ...imageFilteredArticles.slice(0, 20),
        ...nonImageFilteredArticles.slice(12),
    ];

    const middleTextArticles = [
        ...nonImageFilteredArticles.slice(0, 12),
        ...imageFilteredArticles.slice(20),
    ];

    return (
        <Container>
            {loading ? (
                'Loading'
            ) : (
                <>
                    <TopContent topArticles={imageArticles.slice(0, 4)} />
                    <MiddleContent
                        middleImageArticles={imageArticles.slice(4, 8)}
                        middleTextArticles={middleTextArticles.slice(0, 12)}
                    />
                    <BottomContent bottomArticles={imageArticles.slice(8, 20)} />
                </>
            )}
        </Container>
    );
};

export default MainContainer;
