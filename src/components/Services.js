import React from "react";

export default function Services() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <section className="p-12 text-center">
        <h1 className="text-4xl font-bold text-[#1E3A8A]">Services</h1>
        <h2 className="text-2xl mt-4">Our Programs, Our Impact</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          At Maryam Heva Foundation, we offer two primary programs designed to support the educational needs of underprivileged children.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h3 className="text-2xl font-semibold text-[#1E3A8A]">Sponsorship Program</h3>
            <p className="mt-2 text-gray-700">
              We provide financial support to children of low-income earners, covering tuition fees, school supplies, and other educational expenses. Our goal is to ensure that these children have access to quality education, enabling them to break the cycle of poverty.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
            <h3 className="text-2xl font-semibold text-[#1E3A8A]">Orphan Support Program</h3>
            <p className="mt-2 text-gray-700">
              We assist orphans through school, providing them with the necessary resources to succeed academically. Our program includes:
            </p>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Tuition fee coverage</li>
              <li>School supply provision</li>
              <li>Mentorship and guidance</li>
              <li>Support for extracurricular activities</li>
            </ul>
          </div>
        </div>
        
        <p className="text-lg mt-6 max-w-3xl mx-auto">
          By supporting these vulnerable children, we are helping to shape a brighter future for them and their communities.
        </p>
      </section>
    </div>
  );
}
