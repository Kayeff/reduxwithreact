import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";

export default function App() {
  const isLoggedIn = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  return (
    <main className="w-full min-h-screen bg-rich-black text-seasalt font-geist flex flex-col gap-10">
      <Header />
      {!isLoggedIn && <Auth />}
      <Counter />
    </main>
  );
}
