import React from "react";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
import { users } from "../_mock_/users";

const Container = () => {
  const { userId } = useParams();

  return (
    <div>
      <Profile user={users[userId - 1]} />
    </div>
  );
};

export default Container;
