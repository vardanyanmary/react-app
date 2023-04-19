import { Link, redirect, useParams } from "react-router-dom";
import { useEffect } from "react";
import PostCard from "Components/UI/PostCard/PostCard";
import { usePosts } from "Components/hooks/usePosts";
import cls from "./PostDetail.module.scss";

interface PostPageParams {
  id: string;
}

const PostDetail = () => {
  const { id } = useParams<Partial<PostPageParams>>();
  const { selectedData, getPost, isLoading , error } = usePosts();

  if (isNaN(Number(id))) {
    redirect("posts");
  }

  useEffect(() => {
    if (!selectedData) {
      getPost(Number(id));
    }
  }, [getPost, id, selectedData]);

  if (error) {
    return <div className={cls.PostDetail}>{error}</div>;
  }

  return (
    <div className={cls.PostDetail}>
      {!isLoading && selectedData ? (
        <>
          <PostCard post={selectedData} />
          <Link to={`/posts`}> Back </Link>
        </>
      ) : (
        <p> Loading ... </p>
      )}
    </div>
  );
  {
    /* return (
    <div className="PostDetail">
      <div>
        {post
          ? <PostCard post={post} />
          : <p>Loading...</p>
        }

         // <h2>{post.title}</h2>
        // <p>{post.body}</p>
        // <Link to={`/posts`}> Back </Link> 
      </div>
    </div>
  );
};*/
  }
};

export default PostDetail;
