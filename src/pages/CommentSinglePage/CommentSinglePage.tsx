import { Link, redirect, useParams } from "react-router-dom";
import { useComment } from "../../Components/hooks/CommentHooks/useComment";
import CommentCard from "../../Components/CommentCard/CommentCard";
import './CommentSinglePage'

interface CommentSinglePageProps {
  id: string; //string , because from link
}

const CommentSinglePage = () => {
  const { id } = useParams<Partial<CommentSinglePageProps>>();
  const { comment } = useComment(Number(id));

  if (isNaN(Number(id))) {
    redirect("comments");
  }

//   if (comment === undefined) {
//     return <p>Loading...</p>;
//   }

  return(
    <div className="CommentSinglePage">
        {comment?(
            <>
                <CommentCard comment={comment}/>
                <Link to={`/comments`}> Back </Link>
            </>
        ):(
            <p> Comment not found</p>
        )}
    </div>
  )
};

export default CommentSinglePage;
