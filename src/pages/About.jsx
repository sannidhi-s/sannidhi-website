

import React from 'react';
import { Code, GraduationCap, Users, Calendar } from 'lucide-react';
import Profile from '../components/profile.jpg';


const About = () => {
  const skills = {
    "Languages": ["C", "C#", "Java", "Javascript", "SQL", "HTML/CSS"],
    "Frameworks": ["React", "Blazor", ".NET"],
    "Tools & Technologies": ["Node.js", "Bootstrap", "Git", "Docker", "VSCode", "Visual Studio"]
  };

  return (
    <section className="relative min-h-screen pt-24 -z-10">
      <div className="max-w-5xl mx-auto p-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center text-center mb-12">

            <img
              src={Profile}
              alt="profile"


              className="rounded-full w-[200px] h-[200px] object-cover border-4 border-black shadow-lg mb-8"
            />

            <div className="space-y-4 mb-4">

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Hey, I'm Sannidhi 👋🏽
              </h1>
              <h2 className="text-2xl text-pink-600 font-medium">
                Aspiring Software Developer
              </h2>

            </div>

            {/* Quick Stats */}
            <div className="flex justify-center gap-16 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-pink-500" />
                <div>
                  <div className="text-sm text-slate-600">Degree</div>
                  <div className="font-medium text-slate-900">B.Computing</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-pink-500" />
                <div>
                  <div className="text-sm text-slate-600">Graduating</div>
                  <div className="font-medium text-slate-900">Dec 2025</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mb-20">
          <div className="items-center gap-2 mb-8">

          </div>
          <div className="border border-pink-100 rounded-xl p-8 space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate computer science student with a love for coding and problem-solving.
              My tech journey began in university, where I discovered how programming can solve complex
              problems and build meaningful digital experiences.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              As I approach graduation, I'm excited to apply my skill set and experiences to
              tackling new challenges in the tech industry. I'm particularly interested in{' '}
              <strong className="font-semibold text-pink-600">full-stack development</strong> and{' '}
              <strong className="font-semibold text-pink-600">AI applications</strong>, but I am always eager to learn and explore new things!
            </p>

          </div>
        </div>

        {/* Skills Section - Now more categorized */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-pink-500" />
            <h2 className="text-3xl font-semibold text-slate-900">Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className=" border border-pink-100 rounded-xl p-6 hover:border-pink-200 transition-all">
                <h3 className="text-xl font-medium text-slate-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm hover:bg-pink-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect Section - More prominent */}
        {/* Connect Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-7 w-7 text-pink-500" />
            <h2 className="text-3xl font-bold text-slate-900">Let's Connect</h2>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-pink-100 hover:border-pink-200 transition-all">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/sannidhi-s"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub

              </a>
              <a
                href="https://www.linkedin.com/in/sannidhi333"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0077B5] text-white rounded-full text-sm font-medium hover:bg-[#006396] transition-colors inline-flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn

              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;