import React from 'react';

const CommentList = ({ comments}) => (
    <>
        <h3>Comments</h3>
        {comments.map((comment, key) =>(
            <div key={key}>
                <h2>{comment.username}</h2>
                <h2>{comment.comments}</h2>
            </div>
            
        ))}
      
    </>
)

export default CommentList;