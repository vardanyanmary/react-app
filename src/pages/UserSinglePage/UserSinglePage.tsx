import { Link, useParams } from "react-router-dom";
import UserCard from "../../Components/UserCard/UserCard";
import { useUsers } from "../../Components/hooks/useUsers";
import { useEffect } from "react";

interface UserSinglePageProps {
    id:string
}

const UserSinglePage = () => {
  const { id } = useParams<Partial<UserSinglePageProps>>();
  const { isLoading, selectedData, error , getUser} = useUsers();

  useEffect(() => {
    if (!selectedData) {
      getUser(Number(id));
    }
  }, [getUser, id, selectedData]);

  if (error) {
    return <div className="CommentSinglePage">{error}</div>;
  }

  return (
    <div className="AlbumSinglePage">
      {!isLoading && selectedData ? (
        <>
          <UserCard user={selectedData} />
          <Link to={`/users`}> Back </Link>
        </>
      ) : (
        <p> Loading ... </p>
      )}
    </div>
  );
};

export default UserSinglePage;
