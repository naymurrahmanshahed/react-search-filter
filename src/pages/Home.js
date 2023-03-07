import Table from "../components/Table";
import Users from "../components/Users";
import { users } from "../user";

const keys = ["first_name", "last_name", "email"];

const Home = ({ query }) => {
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="container mx-auto py-10 ">
      {/* <Users query={query} /> */}
      <Table users={search(users)} />
    </div>
  );
};

export default Home;
