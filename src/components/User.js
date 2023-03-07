import React from "react";

const User = ({ user }) => {
  return (
    <ul>
      <li className="hover:text-sky-700 duration-300 cursor-pointer  ">
        {user.first_name}
      </li>
    </ul>
  );
};

export default User;
