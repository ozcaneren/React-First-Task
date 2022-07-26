import axios from "axios";

const getData = async (userId) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return { users: user, posts: post };
};

export default getData;