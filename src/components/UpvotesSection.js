import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {

    const upvoteArticle = () => {
        fetch(`/api/article/${articleName}/upvote`, {
            method: 'post',
        })
            .then((result) => {
                console.log(result)
                return result.json();
            })
            .then((body) => {
                console.log(body)
                return setArticleInfo(body);

            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <button className='button-new' onClick={() => upvoteArticle()}>Upvote This</button>
            <p>This article is upvoted {upvotes}</p>
        </div>
    )


}
export default UpvotesSection;
