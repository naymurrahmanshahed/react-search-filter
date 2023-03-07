import User from "./User";
import { users } from "../user";
const Users = ({ query }) => {
  return (
    <div className=" grid grid-cols-7 gap-2 ">
      {users
        .filter((user) => user.first_name.toLowerCase().includes(query))
        .map((user) => (
          <User key={user.id} user={user} />
        ))}
    </div>
  );
};

export default Users;
