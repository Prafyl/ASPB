import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Utils/Navbar";

export default function Home() {
  return (
    <div className="pb-10 bg-slate-800">
      <nav>
        <Navbar />
      </nav>

      <section>
        <Dashboard />
      </section>
    </div>
  );
}
