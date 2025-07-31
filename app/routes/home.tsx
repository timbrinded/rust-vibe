import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import { Button } from "../components/ui/button";

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
        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 shadow-lg font-semibold">
          <Link to="/">
            Visit My Rust Fan Page 🦀
          </Link>
        </Button>
      </div>
    </div>
  );
}
