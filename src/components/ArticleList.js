import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        <Link  key={key} to={`/article/${article.name}`}>
            <div>
            <h5 ><b>{article.title}</b></h5><br/>
            <h5>{article.content[0].substring(0, 150)}...</h5>
            </div>
        </Link>
    ))}
    </>
);

export default ArticlesList;