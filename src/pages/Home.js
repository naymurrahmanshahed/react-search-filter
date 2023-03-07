import Users from "../components/Users";

const Home = ({ query }) => {
  return (
    <div className="container mx-auto py-20 grid place-items-center">
      <Users query={query} />
    </div>
  );
};

export default Home;
