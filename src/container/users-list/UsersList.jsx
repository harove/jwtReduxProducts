import React, { useEffect } from "react";
import { userList } from "../../store/users/actions";
import { useDispatch, useSelector } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  useEffect(() => {
    dispatch(userList());
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <div>{user.name}</div>;
      })}
    </div>
  );
}

export default UsersList;
