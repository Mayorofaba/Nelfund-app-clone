// import Layout from '../components/layout'
import Tab from "../../components/tab/tab";
import React from "react";
import userData from "../../components/userdata/userdata.json";

export default function Profile() {
  const data = userData;
  const progress = Math.min(data.form.progress, 100);

  const circleRadius = 50;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className=" profilepage ml-[11em] mt-[10em] w-[70vw] mb-5 flex gap-10 ">
      {/* tab */}
      <div className="importedTab">
        <Tab />
      </div>
      {/* circular progress bar */}
      <div className="circularProgress">
        <svg width="120" height="120">
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            stroke="#ccc"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={circleRadius}
            stroke="#4CAF50"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
          <text x="60" y="65" textAnchor="middle" fill="#333" fontSize="24">
            {progress}%
          </text>
        </svg>
      </div>
    </div>
  );
}
