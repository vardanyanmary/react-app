import { Link, redirect, useParams } from "react-router-dom";
import { usePost } from "../../Components/hooks/usePost";
import PostCard from "../../Components/PostCard/PostCard";
import './PostDetail.scss';

interface PostPageParams {
  id: string
}

const PostDetail = () => {

  const { id } = useParams<Partial<PostPageParams>>()
  const { post } = usePost(Number(id)) 

  if (isNaN(Number(id))) {
       redirect('posts')
  }

  return (
    <div className="PostDetail">
        {post? (<>
                 <PostCard post={post} />
                 <Link to={`/posts`}> Back </Link> 
                </>)
                : <p> post not found</p>
        }
    </div>
)
 {/* return (
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
};*/}
}

export default PostDetail;
