import React, { useState, useEffect } from "react";
import articles from "./article-contents";
import ArticleList from "../components/ArticleList";
import CommentList from "../components/CommentList";
import AddCommentForm from "../components/AddComments";
import UpvotesSection from "../components/UpvotesSection";
/*
    match contains params
*/
const ArticlePage = ({ match }) => {
  const name = match.params.name;

  //articleInfo will populate its value from server
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  // to check for any new updates I used useEffect
  useEffect(() => {
    // const fetchData = async () =>{
    //     const result= await fetch( `/api/article/${name}`);
    //     const body= await result.json();

    //     setArticleInfo(body);

    // }
    // fetchData();

    fetch(`/api/article/${name}`)
      .then((result) => {
        return result.json();
      })
      .then((body) => {
        return setArticleInfo(body);
      })
      .catch((error) => {
        console.log("Some Eroor", error);
      });
  });

  //find name in articles of article-contents
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return <h1>This article doesn't exist</h1>;
  }

  //
  const recommendedArticles = articles.filter((article) => article !== name);

  return (
    <>
      <diV className="container-fluid" >
        <div className="row">
          <div className="col-3">
            <ArticleList articles={recommendedArticles} />
          </div>
          <div className="col-9">
            <h1>{article.title}</h1>
            {/* <h3>Article has {articleInfo.upvotes} upvotes </h3> */}
            <UpvotesSection
              articleName={name}
              upvotes={articleInfo.upvotes}
              setArticleInfo={setArticleInfo}
            />
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
            <CommentList comments={articleInfo.comments} />
            <AddCommentForm
              articleName={name}
              setArticleInfo={setArticleInfo}
            />
          </div>
        </div>
      </diV>

      <p></p>
    </>
  );
};

export default ArticlePage;
