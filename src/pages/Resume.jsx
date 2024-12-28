import React from 'react';
import FileDownload from '../components/Sannidhi_Resume.pdf'


const Resume = () => {
  return (
    <section className="relative min-h-screen pt-24 ">
      <div className="max-w-5xl mx-auto p-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Resume
            </h1>
            <p className="text-xl text-gray-600">
            A comprehensive overview of my professional experience and skills
            </p>

          </div>
        </div>

            <div className="mt-8 text-center -z-10">
              <a
                href= {FileDownload}
                download ="Sannidhi_Resume.pdf"
                className="inline-block px-4 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-800">
                Download Resume (PDF)
              </a>
            </div>

 
      </div>
    </section>
  );
};

export default Resume;


