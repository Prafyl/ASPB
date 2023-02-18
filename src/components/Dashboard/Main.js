import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <div className=" grid grid-cols-3 mt-24 bg-slate-800 p-4 text-center rounded-lg ">
        <div className="flex flex-col align-items justify-center align-middle p-6 h-48 m-5 rounded-lg bg-slate-400 border-4 text-4xl border-slate-900 ">
          <Link href="/questions/physics/1">
            <p className="truncate ">Physics</p>
          </Link>
        </div>
        <div className="flex flex-col align-items justify-center p-6 m-4 mt-5 h-48 rounded-lg bg-slate-400 text-4xl border-4 border-slate-900">
          <Link href="/questions/chemistry/1">
            <p className="truncate">Chemistry</p>
          </Link>
        </div>
        <div className="flex flex-col align-items justify-center p-6 m-4 mt-5 h-48 rounded-lg bg-slate-400 text-4xl border-4 border-slate-900">
          <Link href="/questions/maths/1">
            <p className="truncate">Maths</p>
          </Link>
        </div>
        <div className="flex flex-col align-items justify-center p-6 m-4  h-48 rounded-lg bg-slate-400 text-4xl border-4 border-slate-900">
          <Link href="/questions/computer/1">
            <p className="truncate">Computer</p>
          </Link>
        </div>
        <div className="flex text-5xl flex-col align-items justify-center p-6 m-4 h-48 rounded-lg bg-blue-600 border-4 border-slate-900 truncate">
          <Link href="/questions/main/1">
            <p className="truncate pt-16 pb-16">Start</p>
          </Link>
        </div>
        <div className="flex flex-col align-items justify-center p-6 m-4 h-48 rounded-lg bg-slate-400 text-4xl border-4 border-slate-900">
          <Link href="/questions/english/1">
            <p className="truncate">English</p>
          </Link>
        </div>
        <div className="flex flex-col align-items justify-center p-6 m-4 h-48 rounded-lg bg-slate-400 text-4xl border-4 border-slate-900">
          <Link href="/questions/physicsG/1">
            <p className="">Physics(General)</p>
          </Link>
        </div>
        <div className="flex flex-col align-items justify-center p-6 m-4 h-48 rounded-lg bg-slate-400 text-4xl border-4 border-slate-900 ">
          <Link href="/questions/chemistryG/1">
            <p className="">Chemistry(General)</p>
          </Link>
        </div>
        <div className="flex flex-col align-items justify-center p-6 m-4 h-48 rounded-lg bg-slate-400 text-4xl border-4 border-slate-900">
          <Link href="/questions/MathsG/1">
            <p className="">Maths(General)</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
