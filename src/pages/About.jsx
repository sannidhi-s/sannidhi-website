

import React from 'react';
import { Code, GraduationCap, Users} from 'lucide-react';
import Github from '../components/github-mark.svg';
import Linkedin from '../components/linkedin.svg';



function About() {
  const skills = {
    "Languages": ["C", "C#", "Java", "Javascript", "SQL", "HTML/CSS"],
    "Frameworks": ["React", "Blazor", ".NET"],
    "Tools & Technologies": ["Node.js", "Bootstrap", "Git", "Docker", "VSCode", "Visual Studio"]
  };

  return (
    <section className="min-h-screen pt-24">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-16">


          <h1 className="text-slate-900 font-extrabold text-5xl tracking-tight mb-8">
            About Me
          </h1>

          <div className="text-xl text-slate-600 space-y-6 ">
            <p>
              Hello! My name is <span className="text-pink-500 font-medium">Sannidhi Salibindla</span>. 
              I'm a passionate computer science student with a love for coding and problem-solving.
              My tech journey began in university, where I discovered how programming can solve complex 
              problems and build meaningful digital experiences.
            </p>
            <p>
              As I approach graduation, I'm excited to apply my diverse skill set and experiences to 
              tackling new challenges in the tech industry. I'm particularly interested in full-stack 
              development and AI applications, but I'm always eager to learn and explore new things!
            </p>
          </div>
        </div> 

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-pink-500" />
            <h2 className="text-3xl font-semibold text-slate-900">Education</h2>
          </div>
          <div className="bg-white/50 border border-slate-100 rounded-xl p-6">
            <h3 className="text-xl font-medium text-slate-900 mb-2">Computer Science - Bachelor of Computing</h3>
            <p className="text-slate-600 mb-4">University of Guelph • Expected December 2025</p>
            <div className="space-y-2">
              <h4 className="font-medium text-slate-800">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "OOP", "Software Systems Development and Integration", "UI/UX Design"].map((course, index) => (
                  <span key={index} className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


{/* Skills Section */}
<div className="mb-16"> 
  <div className="flex items-center gap-2 mb-6">
    <Code className="h-6 w-6 text-pink-500" />
    <h2 className="text-3xl font-semibold text-slate-900">Technical Skills</h2>
  </div>
  <div className="grid md:grid-cols-2 gap-6">
    {Object.entries(skills).map(([category, categorySkills]) => (
      <div key={category} className="bg-white/50 border border-slate-100 rounded-xl p-6">
        <h3 className="text-lg font-medium text-slate-900 mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {categorySkills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

{/* Connect Section */}
<div className="mb-16">
  <div className="flex items-center gap-2 mb-6">  
    <Users className="h-6 w-6 text-pink-500" />
    <h2 className="text-3xl font-semibold text-slate-900">Let's Connect</h2>
  </div>
  <div className="bg-white/50 border border-slate-100 rounded-xl p-6">  
    <h3 className="text-lg font-medium text-slate-900 mb-4">Find me on</h3>
    <div className="flex flex-wrap gap-2">
      <a href="https://github.com/sannidhi-s" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm hover:bg-pink-100 transition-colors inline-flex items-center gap-2">
        <img src={Github} alt="GitHub icon" className="w-4 h-4" />
        GitHub</a>
      <a href="https://www.linkedin.com/in/sannidhi333" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm hover:bg-pink-100 transition-colors inline-flex items-center gap-2">
        <img src={Linkedin} alt="LinkedIn icon" className="w-4 h-4" />
        LinkedIn</a>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default About;