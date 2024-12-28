import React from 'react';
import { Code, GraduationCap, Calendar } from 'lucide-react';
import Profile from '../components/profile.jpg';

const About = () => {
  const skills = {
    "Languages": ["C", "C#", "Java", "Javascript", "SQL", "HTML/CSS"],
    "Frameworks": ["React", "Blazor", ".NET"],
    "Tools & Technologies": ["Node.js", "Bootstrap", "Git", "Docker", "VSCode", "Visual Studio", "Azure", "Jira", "Confluence"]
  };

  return (
    <section className="relative min-h-screen pt-24 -z-10">
      <div className="max-w-5xl mx-auto p-8">

        {/* Hero Section */}
        <div className="mb-20 text-center">
          <img
            src={Profile}
            alt="profile"
            className="rounded-full w-[200px] h-[200px] object-cover border-4 border-black shadow-lg mb-8 mx-auto" // mx-auto to center
          />
          <div className="space-y-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Hey, I'm Sannidhi 👋🏽</h1>
            <h2 className="text-2xl text-pink-600 font-medium">Aspiring Software Developer</h2>
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

        {/* About Me Section */}
        <div className="mb-20 border border-pink-100 rounded-xl p-8 space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm a passionate computer science student with a love for coding and problem-solving. My tech journey began in university, where I discovered how programming can solve complex problems and build meaningful digital experiences.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            As I approach graduation, I'm excited to apply my skill set and experiences to tackling new challenges in the tech industry. I'm particularly interested in{' '}
            <strong className="font-semibold text-pink-600">full-stack development</strong> and{' '}
            <strong className="font-semibold text-pink-600">AI applications</strong>, but I am always eager to learn and explore new things!
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Code className="h-6 w-6 text-pink-500" />
            <h2 className="text-3xl font-semibold text-slate-900">Skills</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="border border-pink-100 rounded-xl p-6 hover:border-pink-200 transition-all">
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

      </div>
    </section>
  );
};

export default About;
