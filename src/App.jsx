import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Brain, Award, Briefcase, GraduationCap, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    "Machine Learning & AI": [
      "Supervised Learning (Linear/Logistic Regression, Decision Trees, Random Forest, XGBoost)",
      "Unsupervised Learning (K-Means, Hierarchical, DBSCAN, PCA, t-SNE)",
      "Deep Learning (Neural Networks, CNN, RNN, LSTM)",
      "Natural Language Processing (Sentiment Analysis, TF-IDF, Word Embeddings)",
      "Predictive Modeling & Feature Engineering"
    ],
    "Programming": ["Python", "C", "C++", "SQL", "JavaScript"],
    "Libraries & Tools": ["pandas", "numpy", "scikit-learn", "TensorFlow", "Keras", "PyTorch", "Matplotlib", "Seaborn"],
    "Web Development": ["HTML", "CSS", "JavaScript", "ReactJS", "React Native", "Firebase"]
  };

  const projects = [
    {
      title: "Full-Stack Healthcare Analytics Platform",
      description: "Comprehensive healthcare dashboard featuring patient management, disease tracking, and department analytics with real-time data visualization and interactive charts.",
      tech: ["React", "Data Visualization", "Dashboard", "Healthcare Analytics"],
      image: "https://i.imgur.com/placeholder1.jpg",
      color: "bg-gradient-to-br from-purple-600 to-blue-600",
      hasRealImage: true
    },
    {
      title: "House Price Prediction System",
      description: "Developed a machine learning model for house price prediction with complete data pipeline from collection to deployment. Features interactive UI for real-time predictions.",
      tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Flask"],
      github: "https://github.com/Alok-Yadav-21",
      image: "https://i.imgur.com/placeholder2.jpg",
      color: "bg-gradient-to-br from-green-600 to-teal-600",
      hasRealImage: true
    },
    {
      title: "Surveillance Drone for CHARUSAT",
      description: "Built a campus security drone using Raspberry Pi and Python with integrated sensors and real-time monitoring systems for enhanced campus safety.",
      tech: ["Python", "Raspberry Pi", "IoT", "Real-time Monitoring", "Computer Vision"],
      achievement: "National Level Representation",
      image: "drone",
      color: "bg-gradient-to-br from-blue-600 to-cyan-600"
    },
    {
      title: "Voice Ingredient List Manager",
      description: "Built a voice-controlled ingredient management system with React Native frontend and Python backend, featuring speech recognition and database integration.",
      tech: ["Python", "React Native", "Voice Recognition", "Database", "Firebase"],
      github: "https://github.com/Alok-Yadav-21",
      image: "voice",
      color: "bg-gradient-to-br from-pink-600 to-purple-600"
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AY
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-700"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Alokkumar Yadav
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-slate-300 mb-6">
                Aspiring Data Scientist | Full-Stack Developer | Business Analyst
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                AI Engineer with practical experience in Machine Learning, Data Science, and full-stack development. 
                Passionate about delivering innovative, real-world solutions using cutting-edge AI technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/Alok-Yadav-21" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105">
                  <Github size={20} /> GitHub
                </a>
                <a href="https://linkedin.com/in/yadavalokml" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105">
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href="mailto:alokfirst21@gmail.com"
                   className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105">
                  <Mail size={20} /> Contact
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl absolute inset-0 animate-pulse"></div>
                <div className="relative w-72 h-72 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-2xl">
                  <Brain size={120} className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all transform hover:scale-105">
              <MapPin className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-slate-300">London, United Kingdom</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all transform hover:scale-105">
              <Phone className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-slate-300">+44 (078) 238-43431</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-pink-500 transition-all transform hover:scale-105">
              <Mail className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-slate-300">alokfirst21@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronDown className="text-purple-400 mr-2 mt-1 flex-shrink-0 rotate-[-90deg]" size={16} />
                      <span className="text-slate-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-700/50 rounded-xl overflow-hidden border border-slate-600 hover:border-slate-500 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <div className={`${project.color} h-56 flex items-center justify-center p-4 relative overflow-hidden`}>
                  {project.image === 'drone' ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-32 h-32 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L4 9v2h2v10h12V11h2V9l-8-6zm0 2.2L18 9v1h-2v9H8v-9H6V9l6-3.8zM9 12h2v2H9v-2zm4 0h2v2h-2v-2zm-4 3h2v2H9v-2zm4 0h2v2h-2v-2z"/>
                        <circle cx="12" cy="7" r="1.5"/>
                        <path d="M3 4l2 2M19 4l2 2M3 14l2-2M19 14l2-2"/>
                      </svg>
                    </div>
                  ) : project.image === 'voice' ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-32 h-32 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code size={80} className="text-white opacity-80" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-slate-800 px-3 py-1 rounded-full text-xs text-blue-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.achievement && (
                    <div className="flex items-center gap-2 text-yellow-400 text-sm mb-3 font-semibold">
                      <Award size={16} />
                      <span>{project.achievement}</span>
                    </div>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold">
                      <Github size={16} /> View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience & Education</h2>
          
          {/* Work Experience */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-blue-400" size={32} />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400">Business Analyst</h4>
                  <p className="text-slate-300">Lyrcon Solutions, Nadiad, India</p>
                  <a href="https://www.lyrcon.com" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                    www.lyrcon.com <ExternalLink size={12} />
                  </a>
                </div>
                <span className="text-slate-400 text-sm mt-2 sm:mt-0">May 2024 – Sep 2025</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Gathered and analyzed business requirements, collaborating with stakeholders across departments</li>
                <li>• Translated business needs into functional specifications and user stories for development teams</li>
                <li>• Conducted market and competitor analysis to support strategic decision-making</li>
                <li>• Created reports and dashboards using Excel to communicate business insights effectively</li>
                <li>• Facilitated alignment between business, product, and technical teams on project objectives</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-purple-400" size={32} />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400">Master of Science in Data Science</h4>
                    <p className="text-slate-300">Middlesex University, London</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 sm:mt-0">Present</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Courses: Machine Learning and AI, Applied Data Science, NLP and LLMs, Computer Vision, 
                  Cloud and Big Data Technologies, Legal and Ethical Aspects of AI
                </p>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400">Bachelor of Science in Information Technology</h4>
                    <p className="text-slate-300">Charotar University of Science and Technology</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 sm:mt-0">April 2024</span>
                </div>
                <p className="text-slate-400 text-sm mb-2">First Class with Distinction, CGPA: 7.84/10</p>
                <p className="text-slate-400 text-sm">
                  Courses: Database Fundamentals, Data Structures, Advanced Database Systems, 
                  System Analysis and Design, Computer Networks
                </p>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400">Higher School Certificate</h4>
                    <p className="text-slate-300">Knowledge High School</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 sm:mt-0">May 2021</span>
                </div>
                <p className="text-slate-400 text-sm">Grade: B2 (72%)</p>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-400">Secondary School Certificate</h4>
                    <p className="text-slate-300">New English School</p>
                  </div>
                  <span className="text-slate-400 text-sm mt-2 sm:mt-0">March 2019</span>
                </div>
                <p className="text-slate-400 text-sm">Grade: B1 (76%)</p>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-400" size={32} />
              <h3 className="text-2xl font-semibold">Certifications & Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Certifications</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Introduction to Artificial Intelligence A-Z (Udemy) - Jan 2025</li>
                  <li>• Introduction to TCP/IP - Oct 2022</li>
                </ul>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Achievements</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Winner, Web Development Hackathon</li>
                  <li>• National Level Representation: Startup & Innovation Surveillance Drone Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:alokfirst21@gmail.com"
               className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              <Mail size={24} /> Email Me
            </a>
            <a href="https://linkedin.com/in/yadavalokml" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              <Linkedin size={24} /> LinkedIn
            </a>
            <a href="https://github.com/Alok-Yadav-21" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              <Github size={24} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2025 Alokkumar Yadav. All rights reserved.</p>
          <p className="text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}