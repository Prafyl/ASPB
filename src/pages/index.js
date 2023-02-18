import Dashboard from "../components/Dashboard/Dashboard";
import Navbar from "../components/Utils/Navbar";

export default function Home() {
  return (
    <div className="pb-10 bg-slate-800">
      <Navbar
        about={false}
        dashboard={true}
        leaderboard={false}
        analysis={false}
      />

      <section>
        <Dashboard />
      </section>
    </div>
  );
}
