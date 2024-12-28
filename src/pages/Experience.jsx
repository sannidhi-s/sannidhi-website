import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "IT Operations Intern",
      company: "Helios Technology Solutions Inc.",
      period: "May 2022 - Oct 2022",
      description: "In this role, I managed the help desk system using Zendesk, leveraging its ticketing platform to streamline customer interactions and monitor service requests. My primary responsibility was coordinating service calls for clients, including major branches like McDonald’s and Circle K, ensuring successful resolutions by scheduling and tracking repairs. I utilized Microsoft Excel to maintain and update documentation, employing advanced features like data validation, pivot tables, and conditional formatting to organize and analyze service metrics efficiently. Additionally, I generated automated End of Day reports, integrating data workflows to deliver accurate updates to clients.",
      about: "Helios Technology Solutions Inc. delivers innovative IT services, including web design, mobile app development, and digital marketing, to clients across 20 countries. The company focuses on user-centric design, efficiency, and growth, helping businesses enhance their operations with high-end technology solutions. ",
      goals: [
        "Collaboration",
        "Problem Solving",
        "Communication"
      ],
      conclusions: [
        "Prior to this work term, most of the projects I worked on were individual efforts. However, I set out with the goal of improving my collaboration skills by actively listening to my colleagues, holding myself accountable for my part in team projects, and being more open to viewing problems from different perspectives. Reflecting on my experience, while I didn’t have the opportunity to work with a full team on large projects, much of my time was spent coordinating service calls between technicians, clients, and stores. This role provided me with a unique chance to practice collaboration, and I feel that I accomplished this goal. The skills I developed in working with others will definitely be valuable in future roles where teamwork is essential. At the start of the work term, I also set a goal to enhance my problem-solving abilities. While I had gained foundational knowledge in this area through my academic studies, the real-world challenges I faced at the company allowed me to hone these skills. Initially, I relied heavily on my supervisor to help resolve client issues, but over the course of the term, I grew more independent in finding solutions. By the end of my term, I was able to resolve problems quickly and effectively, which not only improved my confidence but also the satisfaction of our clients. When I first began, I was anxious about speaking with clients over the phone, as I had no prior experience in this area. As a Helpdesk Coordinator, I knew communication would be key to my success, so I set another goal to improve this skill. Over time, I became much more comfortable speaking to clients and was able to engage in conversations without relying on a script. This growth in communication skills has prepared me to handle similar situations confidently in future roles and to collaborate seamlessly with colleagues. Overall, this work term served as my introduction to the industry, teaching me valuable skills that I will carry into future positions. It provided me with a deeper understanding of the importance of communication and problem-solving in a professional setting. I now feel more equipped to face challenges in the workplace and have gained a solid foundation for the remainder of my co-op terms. This experience has not only built my technical abilities but also improved my interpersonal skills, which will be crucial as I continue to grow in my career."

      ]
    },
    {
      id: 2,
      title: "Automation Intern",
      company: "Rogers",
      period: "May 2023 - Aug 2023",
      description: "At Rogers, I worked on upgrading the ERP system from on-premises to the cloud. As a Defect Analyst, I was responsible for raising, updating, and following up on defects using JIRA, ensuring timely resolution of issues. I also created and maintained a Confluence page to organize and track defect-related information. Additionally, I led daily defect meetings and sent status updates regarding ongoing test cases to keep the team informed. In my Automation role, I executed developer scripts using UI Path and validated execution results by referring to test evidence. I participated in daily stand-up meetings, providing updates on the status of my executions, and at the end of each day, I generated detailed reports summarizing the outcomes of the tests I handled.",
      about: "Rogers Communications is a leading Canadian telecommunications and media company offering a wide range of services, including wireless communications, cable television, internet, and home phone services. It also owns a variety of media properties, including radio stations, television networks, and sports teams. Rogers is committed to delivering innovative technology and entertainment solutions to millions of customers across Canada.",
      goals: [
        "Communication",
        "Problem-Solving",
        "Inquiry & Analysis"
      ],
      conclusions: [
        "During this work term at Rogers, I set several goals to further develop my technical and interpersonal skills. Building on my communication improvements during my last term, I focused on becoming more confident in communicating tasks and responsibilities with my coworkers. A key opportunity for growth came when I was tasked with leading the daily defect analyst team meetings. These meetings required me to effectively communicate the objectives and ensure that all necessary topics were covered for the day. Leading these meetings significantly boosted my confidence in expressing tasks and responsibilities to large groups. I also set a goal to observe how my coworkers tackled problems and to incorporate those strategies into my own work. As a defect analyst, I was responsible for identifying issues and providing follow-ups to the team regarding deadlines and fixes from developers. On the automation side, I ran developer scripts and identified bugs during execution. By working alongside my team to solve these issues, I learned new approaches to problem-solving, becoming more efficient and resourceful. Additionally, I aimed to improve my inquiry and analysis skills by asking more questions to ensure I understood my tasks and could complete them correctly. Initially hesitant, I became more comfortable voicing my questions throughout the term. This helped me execute my tasks more efficiently with fewer mistakes. By the end of the term, I found that I was able to answer many of my own questions, relying less on my coworkers for guidance. Through my experience at Rogers, I gained valuable insights into the importance of adaptability and continuous learning in a fast-paced work environment. I discovered that being open to new challenges, whether technical or interpersonal, allows for growth and improvement in unexpected ways. This work term has not only strengthened my technical capabilities but also prepared me to tackle complex situations in future roles with greater confidence."
      ]
    },
    {
      id: 3,
      title: "QA Analyst Intern",
      company: "First National Financial LP",
      period: "Jan 2024 - Aug 2024",
      description: "In this role, I was responsible for ensuring the quality and reliability of our software products through comprehensive manual testing. I worked closely with the development team to design and implement detailed test cases and strategies that aligned with project specifications. My key responsibilities included performing manual testing to identify defects, bugs, and discrepancies related to execution, usability, and performance. Using Azure DevOps, I recorded test cases, tracked defects, and ensured that issues were addressed promptly, contributing to an efficient defect resolution process. I also participated in daily scrum meetings and quality assurance initiatives, providing input on process improvements and best practices to enhance testing procedures.",
      about: "First National Financial LP is Canada's largest non-bank lender, specializing in residential and commercial mortgages. Established in 1988, the company offers innovative mortgage solutions designed to meet the unique needs of individuals, brokers, and businesses. With a commitment to exceptional service and leveraging advanced technology, First National helps clients achieve their real estate financing goals efficiently and effectively. Its industry-leading expertise and customer-focused approach have earned it a reputation as a trusted partner in the Canadian financial landscape.",
      goals: [
        "Technological Literacy",
        "Teamwork",
        "Oral Communication"
      ],
      conclusions: [
        "Throughout my work term at First National Financial LP, I focused on enhancing my technological literacy, particularly in the field of QA. By attending daily stand-up meetings and engaging in discussions with my coworkers, I gained valuable insights into various testing technologies and methods. As my familiarity with these tools and techniques grew, I became more confident in tackling tasks independently, reducing my reliance on assistance. This was a clear indicator of my progress and growing expertise in the technological aspects of QA testing. One of my key goals during this term was to work efficiently within a team. To achieve this, I prioritized open communication and ensured I addressed any difficulties or questions promptly. Actively listening to my team members and aligning my efforts with the team's goals allowed me to contribute meaningfully to each sprint. By the end of the term, I saw tangible progress in the projects I worked on, and the positive feedback I received from my team members validated my ability to work effectively in a collaborative environment. Improving my oral communication skills in a professional setting was another goal I set for myself. I made a conscious effort to engage in team conversations, contribute ideas, and ask clarifying questions. When I faced obstacles, I sought direction from my colleagues, which helped me refine my communication style. Monitoring my participation in daily scrum sessions, I noticed a significant increase in my confidence and ability to express myself clearly. By the end of my term, I felt much more comfortable delivering ideas in meetings and communicating with my coworkers overall. Overall, my time at First National significantly contributed to my career development. I improved my technological literacy by working with various testing tools, enhanced my teamwork abilities through collaboration with cross-functional teams, and strengthened my oral communication skills. This experience has provided me with a solid foundation for success in the technology and finance sectors, and I am confident that the skills and knowledge I gained will help me navigate future challenges and make meaningful contributions in my career. I am grateful to First National for the opportunity to learn and grow, and I look forward to applying these skills in my future endeavours."
      ]
    },
    {
      id: 4,
      title: "Software Developer Intern",
      company: "First National Financial LP",
      period: "Sept 2024 - Dec 2024",
      description: "In this role, I was responsible for analyzing, designing, developing, and supporting web services, and desktop applications using technologies like C#, .NET Core, ASP.NET (MVC), REST APIs, and SQL Server. The role involved ensuring code quality, adhering to Agile methodologies, and providing post-implementation support while meeting project timelines and business requirements.",
      about: "First National Financial LP is Canada's largest non-bank lender, specializing in residential and commercial mortgages. Established in 1988, the company offers innovative mortgage solutions designed to meet the unique needs of individuals, brokers, and businesses. With a commitment to exceptional service and leveraging advanced technology, First National helps clients achieve their real estate financing goals efficiently and effectively. Its industry-leading expertise and customer-focused approach have earned it a reputation as a trusted partner in the Canadian financial landscape.",
      goals: [
        "Technological Literacy",
        "Creativity",
        "Personal Organization/Time Management"
      ],
      conclusions: [
        "Throughout my work term, I made significant strides in enhancing my technological literacy, developing creative problem-solving skills, and improving my time management and organizational abilities. To improve my technological literacy, I focused on gaining a comprehensive understanding of the company’s tech stack, development workflows, and industry best practices. I took the initiative to study the primary programming languages and frameworks used by the company. Participating actively in code reviews was especially beneficial, as it allowed me to learn directly from senior developers. I also kept detailed notes on the development workflows and tools, which gave me a better understanding of how projects were managed and executed. By the end of my term, I was able to independently work with the core technologies and deliver clear documentation for my own code. This improvement in my technical skills was recognized by my team leads, and I successfully built a feature independently, which marked a significant milestone in my learning journey. My goal for developing innovative problem-solving skills was driven by my desire to think creatively when tackling software development challenges. I actively challenged myself to propose multiple solutions for each programming task, which allowed me to explore different approaches and identify the most efficient ones. In terms of personal organization and time management, I set up systems to track project deadlines and milestones, which helped me prioritize my tasks and manage my workload effectively. I maintained organized documentation of my code and learning progress, ensuring that I could easily track my achievements and areas for improvement. Regular check-ins with my supervisor were crucial in keeping me on track and ensuring that I was focusing on the most important tasks. I was able to successfully maintain a steady workflow without becoming overwhelmed, and I developed a sustainable daily routine that helped me stay productive throughout the term. Overall, this work term provided me with valuable insights into the software development process and helped me hone my skills in technical literacy, creativity, and time management. I am confident that these skills will serve me well as I continue to grow in the technology field and pursue future opportunities."
      ]
    }
  ].reverse();

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">
          Experience
        </h1>
        <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
        Explore how each experience has contributed to my development and prepared me for the next steps in my career!
        </p>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-pink-200" />

          {jobs.map((job) => (
            <div key={job.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-3 h-3 bg-pink-500 rounded-full transform -translate-x-1/2" />

              {/* Content card */}
              <div className="ml-16">
                <div
                  className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border border-pink-100
                    ${expandedJob === job.id ? 'border-pink-200 shadow-md' : 'hover:border-pink-200'}`}
                  onClick={() => toggleJob(job.id)}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xl text-slate-900">{job.title}</h4>
                      <p className="text-pink-500 font-medium">{job.company}</p>
                      <span className="block text-sm text-slate-500">{job.period}</span>
                    </div>
                    <div className={`h-8 w-8 rounded-full bg-pink-50 flex items-center justify-center transition-transform duration-200
                      ${expandedJob === job.id ? 'rotate-180' : ''}`}>
                      <ChevronDown className="h-5 w-5 text-pink-500" />
                    </div>
                  </div>

                  {/* Expanded content */}
                  {expandedJob === job.id && (
                    <div className="mt-6 space-y-6 border-t border-pink-100 pt-6">
                      {/* About */}
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-2">About the Company</h5>
                        <p className="text-slate-600">{job.about}</p>
                      </div>

                      {/* Description */}
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-2">Job Description</h5>
                        <p className="text-slate-600">{job.description}</p>
                      </div>

                      {/* Goals */}
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-2">Goals</h5>
                        <ul className="space-y-1">
                          {job.goals.map((goal, index) => (
                            <li key={index} className="text-slate-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Conclusions */}
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-2">Reflection</h5>
                        <ul className="space-y-1">
                          {job.conclusions.map((conclusion, index) => (
                            <li key={index} className="text-slate-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                              {conclusion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;