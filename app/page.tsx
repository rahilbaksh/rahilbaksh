"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  Database,
  BarChart3,
  Code,
  Mail,
  Github,
  Linkedin,
  Download,
  ChevronDown,
  Cpu,
  Network,
  Zap,
  Target,
  TrendingUp,
  Star,
  Briefcase,
  ArrowRight,
  Play,
  Sparkles,
  BookOpen,
  Lightbulb,
  Rocket,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const skills = [
    { name: "Python", icon: Code, level: 75, category: "Programming", color: "from-yellow-400 to-yellow-600" },
    { name: "Machine Learning", icon: Brain, level: 65, category: "AI/ML", color: "from-purple-400 to-purple-600" },
    { name: "NumPy", icon: Cpu, level: 70, category: "Data Science", color: "from-blue-400 to-blue-600" },
    { name: "Pandas", icon: Database, level: 80, category: "Data Science", color: "from-green-400 to-green-600" },
    {
      name: "Matplotlib",
      icon: BarChart3,
      level: 75,
      category: "Visualization",
      color: "from-orange-400 to-orange-600",
    },
    { name: "Scikit-learn", icon: Network, level: 60, category: "AI/ML", color: "from-indigo-400 to-indigo-600" },
    {
      name: "Power BI",
      icon: TrendingUp,
      level: 55,
      category: "Visualization",
      color: "from-yellow-400 to-yellow-600",
    },
    { name: "SQL", icon: Database, level: 70, category: "Database", color: "from-cyan-400 to-cyan-600" },
    { name: "MongoDB", icon: Database, level: 50, category: "Database", color: "from-emerald-400 to-emerald-600" },
    { name: "Streamlit", icon: Zap, level: 65, category: "Web Apps", color: "from-red-400 to-red-600" },
    { name: "Java", icon: Code, level: 60, category: "Programming", color: "from-orange-400 to-red-500" },
    { name: "Data Science", icon: Target, level: 70, category: "Analytics", color: "from-pink-400 to-pink-600" },
  ]

  const projects = [
    {
      title: "House Price Prediction Model",
      description:
        "Built my first machine learning model using linear regression to predict house prices with Python and scikit-learn. Achieved 85% accuracy on test data.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Learning Project",
      metrics: "85% Accuracy",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "Performed K-means clustering on customer data to identify different customer segments. Created visualizations using matplotlib and seaborn.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      category: "Data Analysis",
      metrics: "4 Segments Found",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Sales Dashboard in Power BI",
      description:
        "Created an interactive dashboard to visualize sales data with filters and KPIs. Connected to SQL database and automated data refresh.",
      tech: ["Power BI", "SQL", "Excel", "DAX"],
      category: "Business Intelligence",
      metrics: "5 KPIs Tracked",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Built a content-based recommendation system using cosine similarity. Deployed using Streamlit for easy interaction.",
      tech: ["Python", "Pandas", "Streamlit", "Scikit-learn"],
      category: "Recommendation",
      metrics: "1000+ Movies",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Stock Price Analysis",
      description:
        "Analyzed historical stock data and created visualizations to identify trends. Used moving averages and technical indicators.",
      tech: ["Python", "Pandas", "Matplotlib", "Yahoo Finance API"],
      category: "Financial Analysis",
      metrics: "5 Years Data",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Iris Flower Classification",
      description:
        "Classic machine learning project using multiple algorithms to classify iris flowers. Compared model performance and accuracy.",
      tech: ["Python", "Scikit-learn", "Jupyter", "Seaborn"],
      category: "Classification",
      metrics: "98% Accuracy",
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "15+", icon: Briefcase },
    { label: "Hours of Learning", value: "500+", icon: BookOpen },
    { label: "Datasets Analyzed", value: "25+", icon: Database },
    { label: "Months Learning", value: "12+", icon: Rocket },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-2xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              RAHIL BAKSH
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div
          className={`text-center z-10 transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="mb-8 relative">
            <div className="relative inline-block">
              <Brain className="w-24 h-24 mx-auto mb-6 text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text animate-pulse" />
              <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl animate-ping" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            RAHIL BAKSH
          </h1>

          <div className="mb-8">
            <p className="text-2xl md:text-3xl mb-4 font-light bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ASPIRING DATA SCIENTIST
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about transforming data into insights. Currently mastering machine learning and building my
              portfolio with real-world projects.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              View My Projects
            </Button>
            <Button
              variant="outline"
              className="group border-2 border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MY DATA SCIENCE JOURNEY
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate beginner in the world of data science and machine learning. Over the past year, I've
                  been diving deep into Python, statistics, and ML algorithms, building projects that showcase my
                  growing skills and dedication to this field.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  From my first "Hello World" in Python to deploying my first machine learning model, every step has
                  been an exciting learning experience. I'm eager to apply my knowledge to real-world problems and
                  continue growing as a data scientist.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Lightbulb className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-gray-400">Projects Built</div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-purple-400 mb-3" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-gray-400">Hours Learning</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Python Enthusiast",
                  "ML Explorer",
                  "Data Visualization",
                  "Problem Solver",
                  "Quick Learner",
                  "Team Player",
                ].map((trait) => (
                  <Badge
                    key={trait}
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/30 text-cyan-300 px-4 py-2 text-sm"
                  >
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96">
                {/* Animated learning visualization */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl backdrop-blur-xl border border-white/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
                    <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-75" />
                    <div className="absolute inset-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full animate-pulse delay-150" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Rocket className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
                {/* Learning path indicators */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-ping"
                    style={{
                      left: `${20 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 60}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SKILLS I'M DEVELOPING
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-20`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-lg font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{skill.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MY LEARNING PROJECTS
          </h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 px-3 py-1`}>
                      {project.category}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-bold text-yellow-400">{project.metrics}</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/20 text-gray-300 hover:text-white transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl group-hover:border-cyan-400/50 transition-all duration-300">
                    View on GitHub
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            LET'S CONNECT & GROW
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">Ready to Learn Together?</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  I'm actively seeking opportunities to apply my data science skills, whether it's internships,
                  entry-level positions, or collaborative projects. Let's connect and explore how we can work together!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">rahil.baksh@email.com</span>
                </div>

                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                  ].map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="w-12 h-12 border-white/20 bg-white/5 backdrop-blur-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:border-transparent text-white transition-all duration-300 hover:scale-110 rounded-xl"
                    >
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-4">What I'm Looking For:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Entry-level Data Science Roles</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Internship Opportunities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Collaborative Projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span>Mentorship & Learning</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Let's Start a Conversation</CardTitle>
                <CardDescription className="text-gray-300">
                  I'd love to hear about opportunities or just connect with fellow data enthusiasts!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 rounded-xl"
                  />
                  <Input
                    placeholder="Last Name"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 rounded-xl"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 rounded-xl"
                />
                <Input
                  placeholder="Company/Organization"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 rounded-xl"
                />
                <Textarea
                  placeholder="Tell me about the opportunity or just say hello..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 rounded-xl"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-lg">
            © 2024 Rahil Baksh. Passionate about data science and continuous learning.
          </p>
        </div>
      </footer>
    </div>
  )
}
