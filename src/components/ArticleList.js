import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link  key={key} to={`/article/${article.name}`}>
            <div>
            <h3>{article.title}</h3>
            <h4>{article.content[0].substring(0, 150)}...</h4>
            </div>
        </Link>
    ))}
    </>
);

export default ArticlesList;