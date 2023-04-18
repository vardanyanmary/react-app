import { User } from "../../api/Services/UsersService/types";
import './UserCard.scss'

interface UserCardProps {
  user: User;
  navigateSingleUserPage?: (user: User) => void;
}

const UserCard = ({ user, navigateSingleUserPage }: UserCardProps) => {

    if (navigateSingleUserPage) {
        return (
          <p
            className="UserCard withNavigation"
            onClick={() => navigateSingleUserPage(user)}
          >
            {user.name}
          </p>
        ); 
      }

    return (
    <div className="UserCard">
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
      <p>{user.email} - {user.phone} </p>
    </div>
  );
};

export default UserCard;
