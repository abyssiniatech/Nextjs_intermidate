import Linkpage from './Link';

const Header = () => {
  return (
    <div className="bg-indigo-900 p-4 flex justify-between items-center ">
      <h1>My website</h1>
      <Linkpage />
    </div>
  );
};

export default Header;
