import { useDispatch } from "react-redux";
import { authActions } from "../store/index";

export default function Auth() {
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(authActions.login());
  }

  return (
    <section className="w-full flex items-center justify-center flex-col gap-4">
      <h1 className="tracking-tighter text-4xl">Log In</h1>
      <form className="flex flex-col gap-4 border border-seasalt/20 rounded-xl p-5">
        <div className="w-full flex items-center justify-between gap-4">
          <label className="tracking-tight" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-seasalt/20 rounded-lg p-2 outline-none"
          />
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <label className="tracking-tight" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-seasalt/20 rounded-lg p-2 outline-none"
          />
        </div>
        <button
          onClick={handleLogin}
          className="cursor-pointer px-6 py-2 bg-seasalt text-rich-black w-max place-self-end rounded-lg"
        >
          Login
        </button>
      </form>
    </section>
  );
}
