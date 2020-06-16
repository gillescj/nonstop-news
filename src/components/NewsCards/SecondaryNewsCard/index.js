import React from 'react';
import { Container, SubContent, TextContent } from './styles';
import placeholderImage from 'assets/images/placeholder-image.jpg';

const SecondaryNewsCard = ({
    id,
    sourceName,
    author,
    title,
    publishedAt,
    url,
    urlToImage,
    description,
}) => {
    return (
        <Container>
            <h3>{title}</h3>
            <SubContent>
                <img src={placeholderImage} alt="gg" />
                <TextContent>
                    <div>{author}</div>
                    <div>{publishedAt}</div>
                </TextContent>
            </SubContent>
        </Container>
    );
};

export default SecondaryNewsCard;
