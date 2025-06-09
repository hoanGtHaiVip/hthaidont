import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Calendar, Code, Briefcase, GraduationCap, Heart } from 'lucide-react';

const ProfilePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', level: 95, color: 'from-blue-400 to-cyan-400' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-purple-500' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 80, color: 'from-yellow-400 to-orange-500' },
    { name: 'UI/UX Design', level: 75, color: 'from-pink-400 to-rose-500' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack React application with payment integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights',
      tech: ['React', 'Python', 'TensorFlow'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application for task management',
      tech: ['React Native', 'Firebase'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header Section */}
        <header className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center text-6xl font-bold">
                  JD
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
                  John Doe
                </h1>
                <p className="text-xl lg:text-2xl text-purple-200">
                  Full Stack Developer & UI/UX Designer
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-300">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <MapPin size={16} />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar size={16} />
                  <span>5+ Years Experience</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {[
                  { icon: Github, href: '#', color: 'hover:text-gray-300' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
                  { icon: Mail, href: '#', color: 'hover:text-purple-400' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="sticky top-0 z-20 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-6">
            <div className="flex justify-center space-x-8 py-4">
              {[
                { id: 'about', label: 'About', icon: Heart },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'projects', label: 'Projects', icon: Briefcase },
                { id: 'education', label: 'Education', icon: GraduationCap }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          {/* About Section */}
          {activeSection === 'about' && (
            <section className="space-y-8 animate-fadeIn">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience creating beautiful, 
                  functional web applications. I specialize in React, Node.js, and modern web technologies. 
                  When I'm not coding, you can find me exploring new design trends or contributing to open-source projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: '50+', subtitle: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
                  { title: '25+', subtitle: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
                  { title: '5+', subtitle: 'Years Experience', color: 'from-green-500 to-teal-500' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center group hover:scale-105 transition-transform duration-300">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.title}
                    </div>
                    <div className="text-gray-300 mt-2">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <section className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">{skill.name}</span>
                      <span className="text-sm text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <section className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Education & Certifications
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Master of Computer Science',
                    institution: 'Stanford University',
                    year: '2018-2020',
                    description: 'Specialized in Human-Computer Interaction and Software Engineering'
                  },
                  {
                    title: 'Bachelor of Software Engineering',
                    institution: 'UC Berkeley',
                    year: '2014-2018',
                    description: 'Graduated Magna Cum Laude with focus on Web Technologies'
                  },
                  {
                    title: 'AWS Certified Solutions Architect',
                    institution: 'Amazon Web Services',
                    year: '2021',
                    description: 'Professional level certification for cloud architecture'
                  }
                ].map((edu, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{edu.title}</h3>
                      <span className="text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-purple-200 mb-2">{edu.institution}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/20 py-8 mt-16">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © 2024 John Doe. Made with{' '}
              <span className="text-red-400">♥</span>{' '}
              using React & TypeScript
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
