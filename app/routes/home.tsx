import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Welcome />
      <div className="text-center mt-8">
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-colors shadow-lg font-semibold"
        >
          Visit My Rust Fan Page 🦀
        </Link>
      </div>
    </div>
  );
}
