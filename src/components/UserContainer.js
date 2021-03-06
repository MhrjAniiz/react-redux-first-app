import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function UserContainer() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>user list</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

export default UserContainer;
