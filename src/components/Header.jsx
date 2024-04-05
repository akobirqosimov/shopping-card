import { MdLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-600 py-5 fixed top-0 left-0 right-0 z-10">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-4xl text-white font-semibold">Shopping-Card</h1>
        </Link>
        <Link to={"/store"}>
          <MdLocalGroceryStore className="w-10 h-10 text-white" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
