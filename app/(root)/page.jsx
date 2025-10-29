"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Dummy data
const topJobs = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", location: "New York" },
  { id: 2, title: "Backend Engineer", company: "DataWorks", location: "San Francisco" },
  { id: 3, title: "Fullstack Developer", company: "Webify", location: "Remote" },
];

const jobCategories = ["Engineering", "Design", "Marketing", "Sales", "Product"];

// const successStories = [
//   { id: 1, name: "Alice Smith", story: "Landed her dream job in 2 weeks!", img: "/success1.jpg" },
//   { id: 2, name: "John Doe", story: "Started remote work with top companies.", img: "/success2.jpg" },
// ];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Search Bar */}
      <section className="my-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <select className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition">
            <option>All Categories</option>
            {jobCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition">
            Search
          </button>
        </div>
      </section>

      {/* Top Jobs */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Top Jobs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="group relative border border-gray-200 rounded-lg p-6 hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.location}</p>
              <span className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
                Apply
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Job Categories */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Job Categories</h2>
        <div className="flex flex-wrap gap-4">
          {jobCategories.map((cat) => (
            <div
              key={cat}
              className="px-5 py-3 bg-secondary text-black rounded-full cursor-pointer hover:bg-secondary/90 hover:scale-105 transition transform"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="flex-1 flex items-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer group"
            >
              <Image
                src={story.img}
                alt={story.name}
                width={80}
                height={80}
                className="rounded-full object-cover group-hover:scale-105 transition transform"
              />
              <div className="ml-4">
                <p className="font-semibold group-hover:text-primary transition">{story.name}</p>
                <p className="text-gray-700">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
