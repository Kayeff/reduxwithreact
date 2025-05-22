import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authentication";

export default function Header() {
  const isLoggedIn = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logout());
  }

  return (
    <header className="w-full flex items-center justify-between p-10 border-b border-seasalt/20">
      <h1 className="tracking-tighter text-2xl">Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul className="flex items-center gap-4">
            <li className="tracking-tight">
              <a href="/">My Products</a>
            </li>
            <li className="tracking-tight">
              <a href="/">My Sales</a>
            </li>
            <li className="tracking-tight">
              <button
                className="cursor-pointer px-6 py-2 bg-seasalt text-rich-black w-max place-self-end rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
