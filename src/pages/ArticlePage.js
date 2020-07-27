import React from 'react';
import articles from './article-contents';
import ArticleList from '../components/ArticleList'
/*
    match contains params
*/
const ArticlePage = ({ match }) => {

    const name = match.params.name;

    //find name in articles of article-contents
    const article = articles.find(article => article.name === name)

    if(!article)
    {
        return (
            <h1>This article doesn't exist</h1>
        )
    }

    //
    const recommendedArticles = articles.filter(article=> article !== name)

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>
                    {paragraph}
                </p>
            ))}
           
            <p>
                <ArticleList articles = {recommendedArticles}/>
            </p>

        </>
    )
}

export default ArticlePage;