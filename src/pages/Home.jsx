import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Code, GraduationCap } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Skills",
      description: "Exploring the programming languages, tools, and technologies I've mastered during my work terms."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Work Experience",
      description: "Detailed insights into my roles, responsibilities, and key achievements across different work terms."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Learning Journey",
      description: "Reflecting on my growth, challenges overcome, and valuable lessons learned along the way."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8">
        {/* Hero Section */}
        <div className="text-center mb-16">

          
          <h1 className="text-slate-900 font-extrabold text-5xl tracking-tight text-center mb-8">
            Welcome to My{" "}
            <span className="text-pink-500">Work Term Report!</span>
          </h1>
  
          <p className="mt-6 text-xl text-slate-600 text-center">
            Where I share insights, experiences, and accomplishments from my work terms as a final-year computer science student.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 bg-black/80 text-white px-8 py-3 rounded-lg hover:bg-pink-500 transition-colors text-lg"
            >
              Learn More About Me
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/50 border border-slate-100 group"
            >
              <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4 text-pink-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

