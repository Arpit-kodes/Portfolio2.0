import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Moon, Sun, ExternalLink, Code, Brain, Palette, Database, Globe, Award, Calendar, MapPin, GraduationCap, Briefcase, Server, Smartphone, Layers, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  const skills = [
    { name: 'React', icon: Layers, level: 60, category: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', icon: Server, level: 82, category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', icon: Database, level: 85, category: 'Database', color: 'from-green-600 to-teal-600' },
    { name: 'Express.js', icon: Server, level: 87, category: 'Backend', color: 'from-gray-600 to-gray-800' },
    { name: 'JavaScript', icon: Code, level: 83, category: 'Language', color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', icon: Code, level: 83, category: 'Language', color: 'from-blue-600 to-indigo-600' },
    { name: 'Python', icon: Brain, level: 89, category: 'AI/ML', color: 'from-blue-500 to-green-500' },
    { name: 'Java', icon: Code, level: 80, category: 'Language', color: 'from-red-500 to-orange-600' },
    { name: 'HTML/CSS', icon: Globe, level: 95, category: 'Frontend', color: 'from-orange-500 to-red-500' },
    { name: 'React Native', icon: Smartphone, level: 30, category: 'Mobile', color: 'from-purple-500 to-pink-500' },
    { name: 'Git/GitHub', icon: Github, level: 88, category: 'Tools', color: 'from-gray-700 to-black' },
    { name: 'Machine Learning', icon: Brain, level: 70, category: 'AI/ML', color: 'from-indigo-500 to-purple-600' },
  ];

  const skillCategories = ['All', 'Frontend', 'Backend', 'Language', 'AI/ML', 'Database', 'Mobile', 'Tools'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive personal portfolio built with HTML, CSS, and JavaScript showcasing my projects and skills.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      type: 'Web Development'
    },
    {
      title: 'Crop Disease Prediction System',
      description: 'AI-powered system using machine learning to predict and identify crop diseases from leaf images.',
      tech: ['Python', 'Machine Learning', 'TensorFlow'],
      github: '#',
      type: 'AI/ML'
    }
  ];

  const experiences = [
    {
      title: 'AR/VR Intern',
      company: 'NIET',
      period: 'May - July 2024',
      description: 'Worked on immersive AR/VR applications and gained hands-on experience with emerging technologies.',
      icon: Brain
    },
    {
      title: 'AI/ML Workshop',
      company: 'IIT Roorkee',
      period: 'April 2024',
      description: 'Intensive workshop on artificial intelligence and machine learning fundamentals.',
      icon: GraduationCap
    },
    {
      title: 'Web Development Workshop',
      company: 'Workshop Series',
      period: 'August 2023',
      description: 'Comprehensive training in modern web development technologies and best practices.',
      icon: Code
    }
  ];

  const achievements = [
    {
      title: 'Runner-up Mr. Earth',
      organization: 'GGC Society, NIET',
      year: '2023',
      description: 'Recognized for environmental awareness and leadership qualities.'
    },
    {
      title: 'Head Member',
      organization: 'KBC Society',
      year: '2022',
      description: 'Led team initiatives and organized knowledge-based competitions.'
    }
  ];

  return (
    <div className={`min-h-screen font-apple transition-all duration-700 ${darkMode ? 'dark bg-black' : 'bg-white'}`}>
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Multiple floating orbs with different sizes and delays */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-drift"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full blur-3xl animate-drift" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Additional floating elements for hero section */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-purple-500/12 to-pink-500/12 rounded-full blur-3xl animate-drift" style={{animationDelay: '8s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-glow" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-teal-500/8 to-emerald-500/8 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '6s'}}></div>
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-400/25 rounded-full animate-ping" style={{animationDelay: '7s'}}></div>
      </div>

      {/* Apple-style Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-2xl z-50 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-black dark:text-white tracking-tight">
              Arpit Gupta
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'profile', 'skills', 'projects', 'experience', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-all duration-300 ${
                    currentSection === section 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {section === 'profile' ? 'Profile' : section}
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Apple-style Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin mb-6 text-black dark:text-white tracking-tight leading-none">
              Hello.
            </h1>
            <h2 className="text-3xl md:text-5xl font-light mb-8 text-gray-800 dark:text-gray-200">
              I'm <span className="font-medium text-blue-600 dark:text-blue-400">Arpit Gupta</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Aspiring Full Stack Developer & AI Visionary crafting the future through elegant code and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full font-medium border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-6 text-black dark:text-white">About</h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                I'm a passionate Computer Science student specializing in AI/ML at Noida Institute of 
                Engineering and Technology (2022–2026). My journey in technology is driven by curiosity 
                and a desire to create meaningful digital experiences.
              </p>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                My expertise spans across <span className="text-blue-600 dark:text-blue-400 font-medium">MERN Stack Development</span>, 
                <span className="text-purple-600 dark:text-purple-400 font-medium"> AR/VR Technologies</span>, 
                <span className="text-green-600 dark:text-green-400 font-medium"> Artificial Intelligence</span>, and 
                <span className="text-orange-600 dark:text-orange-400 font-medium"> Machine Learning</span>.
              </p>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-light">B.Tech CSE (AI/ML) • NIET • 2022-2026</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-8 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">4+</div>
                    <div className="text-sm font-light opacity-90">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">12+</div>
                    <div className="text-sm font-light opacity-90">Technologies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">3+</div>
                    <div className="text-sm font-light opacity-90">Workshops</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light mb-2">2+</div>
                    <div className="text-sm font-light opacity-90">Achievements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Picture Section */}
      <section id="profile" className="py-32 px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-thin mb-6 text-black dark:text-white">Meet Arpit</h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
          </div>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-glow"></div>
            <div className="relative w-80 h-80 mx-auto mb-12 rounded-full overflow-hidden shadow-2xl animate-float">
              <img 
                src="public/arpit.jpeg"
                alt="Arpit Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8">
              "Technology is not just about code; it's about creating experiences that make life better. 
              Every line of code I write is a step towards building a more connected and intelligent world."
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Arpit-kodes" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              </a>
               <a href="https://www.linkedin.com/in/contactarpitgupta/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Professional Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-6 text-black dark:text-white">Technical Expertise</h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-3xl mx-auto">
              Proficient in modern technologies with hands-on experience in full-stack development and emerging tech.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {skillCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'hover:bg-blue-50 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSkills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="group bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 rounded-2xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-0"
                    >
                      {skill.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Proficiency</span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    />
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="mt-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      skill.level >= 90 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : skill.level >= 80
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        : skill.level >= 70
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                    </span>
                  </div>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-0 shadow-lg rounded-2xl">
              <div className="text-4xl font-light text-blue-600 dark:text-blue-400 mb-2">12+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Technologies Mastered</div>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0 shadow-lg rounded-2xl">
              <div className="text-4xl font-light text-purple-600 dark:text-purple-400 mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Average Proficiency</div>
            </Card>
            <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0 shadow-lg rounded-2xl">
              <div className="text-4xl font-light text-green-600 dark:text-green-400 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Projects Section */}
      <section id="projects" className="py-32 px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-6 text-black dark:text-white">Projects</h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card key={project.title} className="group bg-gray-50 dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="secondary" className="mb-3 bg-blue-600 text-white font-medium">{project.type}</Badge>
                      <CardTitle className="text-2xl mb-3 text-black dark:text-white font-medium">{project.title}</CardTitle>
                    </div>
                    <Button variant="ghost" size="icon" className="hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed font-light">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm py-1 px-3 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 font-medium py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View on GitHub
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Experience Timeline Section */}
      <section id="experience" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-6 text-black dark:text-white">Experience Journey</h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto font-light">
              Follow my path of growth and learning through various experiences
            </p>
          </div>
          
          {/* Timeline Path */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Path Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 transform -translate-x-1/2 rounded-full shadow-lg"></div>
            
            {/* Animated Path Glow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30 transform -translate-x-1/2 rounded-full blur-sm animate-pulse-slow"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.title} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-glow border-4 border-white dark:border-gray-900">
                    <exp.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Connecting Line */}
                  <div className={`absolute top-1/2 w-24 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-transparent -right-16' : 'from-transparent to-blue-600 -left-16'} transform -translate-y-1/2`}></div>
                </div>
                
                {/* Experience Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-24' : 'pl-24'}`}>
                  <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-700/30 dark:to-gray-600/30"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-blue-600 text-white font-medium px-3 py-1">
                          {exp.period}
                        </Badge>
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-lg">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">{exp.description}</p>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-yellow-500/10 rounded-full blur-lg"></div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Date */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-24 text-left' : 'pr-24 text-right'}`}>
                  <div className="text-6xl font-thin text-blue-600/30 dark:text-blue-400/30">
                    {exp.period.split(' ')[0]}
                  </div>
                  <div className="text-2xl font-light text-gray-400 dark:text-gray-500">
                    {exp.period.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Path End Marker */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full shadow-lg animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-6 text-black dark:text-white">Achievements</h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {achievements.map((achievement, index) => (
              <Card key={achievement.title} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-black dark:text-white mb-2">{achievement.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-lg">{achievement.organization} • {achievement.year}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin mb-6 text-black dark:text-white">Let's Connect</h2>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to collaborate on something amazing? Let's discuss how we can create 
              extraordinary experiences together.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl">
                <CardContent className="p-10 text-center">
                  <div className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-20 h-20 mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-4">Email</h3>
                  <a href="mailto:arpitqwerty38@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg font-light">
                    arpitqwerty38@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl">
                <CardContent className="p-10 text-center">
                  <div className="p-6 bg-gradient-to-br from-green-600 to-blue-600 rounded-full w-20 h-20 mx-auto mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-black dark:text-white mb-4">Phone</h3>
                  <a href="tel:+917303449655" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg font-light">
                    +91 7303449655
                  </a>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center space-x-6 mt-16">
               <a href="https://github.com/Arpit-kodes" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4 font-light border-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="h-5 w-5 mr-3" />
                GitHub
              </Button>
              </a>
              <a  href="https://www.linkedin.com/in/contactarpitgupta/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4 font-light border-2 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                LinkedIn
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apple-style Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg font-light">
            &copy; 2024 Arpit Gupta. Designed with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
