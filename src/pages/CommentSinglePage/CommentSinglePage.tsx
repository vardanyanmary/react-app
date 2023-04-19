import { Link, redirect, useParams } from "react-router-dom";
import { useEffect } from "react";
import CommentCard from "Components/UI/CommentCard/CommentCard";
import { useComments } from "Components/hooks/useComments";
import cls from "./CommentSinglePage.module.scss";

interface CommentSinglePageProps {
  id: string; //string , because from link
}

const CommentSinglePage = () => {
  const { id } = useParams<Partial<CommentSinglePageProps>>();
  const { selectedData, getComment, isLoading, error } = useComments();

  if (isNaN(Number(id))) {
    redirect("comments");
  }

  useEffect(() => {
    if (!selectedData) {
      getComment(Number(id));
    }
  }, [getComment, id, selectedData]);

  if (error) {
    return <div className={cls.CommentSinglePage}>{error}</div>;
  }
  
  return (
    <div className={cls.CommentSinglePage}>
      {!isLoading && selectedData ? (
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
