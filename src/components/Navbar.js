const Navbar = () => {
  return (
    <div className="navbar container h-20 border-b border-gray-800 text-gray-100 mx-auto flex items-center justify-center ">
      <input
        type="text"
        placeholder="search...."
        className=" bg-transparent border border-gray-700 rounded-md outline-none px-4 py-2 focus:border-sky-400 "
      />
    </div>
  );
};

export default Navbar;
