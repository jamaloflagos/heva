import React from "react";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <section className="text-center p-12 bg-[#1E3A8A] text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Maryam Heva Foundation</h1>
        <h2 className="text-2xl mb-4">Empowering Young Minds, Enriching Future Generations</h2>
        <p className="text-lg max-w-2xl mx-auto">
          At Maryam Heva Foundation, we believe that every child deserves access to quality education, regardless of their financial background. Our mission is to sponsor children of low-income earners and assist orphans through school, providing them with the tools they need to succeed.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-md">
          Join Us
        </button>
      </section>
    </div>
  );
}
