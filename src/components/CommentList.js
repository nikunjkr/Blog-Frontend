import React from 'react';

const CommentList = ({ comments}) => (
    <>
        <h3>Comments</h3>
        {comments.map((comment, key) =>(
            <div key={key}>
                <h2>{comments.username}</h2>
                <h2>{comments.comment}</h2>
            </div>
            
        ))}
      
    </>
)

export default CommentList;