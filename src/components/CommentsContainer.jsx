import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiCall } from 'redux/comments/actionComments';

const CommentsContainer = () => {
  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch()
  console.log('Comments: ', comments)

  React.useEffect(() => {
    apiCall(dispatch)()
  }, [])

  const displayApiData = comments.isLoading ? (
      <p>Loading ...</p>
    ) : comments.error ? (
      <p>{comments.error}</p>
    ) : (
      comments.comments.map(comment => {
        return (
            <div key={comment.id} className="comments">
                <p>{comment.body}</p>
            </div>
        )
      })
    )

  return (
    <aside className="text-start">
      <h2>Commentaires</h2>
      {displayApiData}
    </aside>
  );
};

export default CommentsContainer;