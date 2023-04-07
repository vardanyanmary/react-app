import { Link, redirect, useParams } from "react-router-dom";
import CommentCard from "../../Components/CommentCard/CommentCard";
import "./CommentSinglePage.scss";
import { useComments } from "../../Components/hooks/useComments";
import { useEffect } from "react";

interface CommentSinglePageProps {
  id: string; //string , because from link
}

const CommentSinglePage = () => {
  const { id } = useParams<Partial<CommentSinglePageProps>>();
  const { selectedData, getComment, isLoading } = useComments();

  if (isNaN(Number(id))) {
    redirect("comments");
  }

  useEffect(() => {
    if (!selectedData) {
      getComment(Number(id));
    }
  }, [getComment, id, selectedData]);

  return (
    <div className="CommentSinglePage">
      {!isLoading && selectedData
      ? (
        <>
          <CommentCard comment={selectedData} />
          <Link to={`/comments`}> Back </Link>
        </>
      ) : (
        <p> Loading ... </p>
      )}
    </div>
  );
};

export default CommentSinglePage;
