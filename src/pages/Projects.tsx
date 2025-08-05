import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar, Users, MapPin } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Electrical Wire Testing PC (Ordi-Tests Project)",
      category: "Embedded Systems",
      description: "Developed a PC-based system to automate electrical wire testing, including continuity and resistance tests. Improved precision in cable diagnostics and significantly reduced manual testing time using multimeters.",
      technologies: ["Raspberry Pi", "STM 32", "MySQL", "Data Traceability", "Signal Filtering"],
      company: "Prod-Elec",
      period: "February 2025 - Now",
      status: "In Progress",
      image: "/placeholder.svg",
      details: [
        "Automated electrical wire testing system",
        "Continuity and resistance measurement",
        "Database logging for traceability",
        "Real-time data visualization",
        "Reduced testing time by 70%"
      ]
    },
    {
      id: 2,
      title: "Crimping Tool Ticket Scanner Web App",
      category: "Web Development",
      description: "Designed a web-based application to scan crimping tool tickets and display detailed information including supported wire sections and tool specifications. Solved the limitation of space on physical tickets by centralizing tool data in an accessible digital format.",
      technologies: ["React", "REST API", "HTML/CSS", "GitHub"],
      company: "Prod-Elec",
      period: "February 2025 - Now",
      status: "Completed",
      image: "/placeholder.svg",
      details: [
        "QR code scanning functionality",
        "Tool specification database",
        "Responsive web interface",
        "Real-time tool availability",
        "Digital inventory management"
      ]
    },
    {
      id: 3,
      title: "Indoor Air Quality Monitoring System",
      category: "IoT",
      description: "Safeguarded health and productivity with an innovative air quality solution. Engineered a system to capture and transmit real-time sensor data from an STM32L475 microcontroller to a remote server via Wi-Fi. Integrated a machine learning model to analyze and forecast air quality.",
      technologies: ["STM32L475", "Wi-Fi", "Machine Learning", "Multithreading", "TensorFlow", "Kafka", "Sensor Integration", "Web Development", "Next.js"],
      company: "Hydatis",
      period: "February 2024 - June 2024",
      status: "Completed",
      image: "/placeholder.svg",
      details: [
        "Real-time air quality monitoring",
        "Machine learning predictions",
        "Multi-sensor integration",
        "Cloud data storage",
        "Web dashboard for visualization"
      ]
    },
    {
      id: 4,
      title: "Low-Cost Vehicle Telemetry System",
      category: "IoT",
      description: "Developed a real-time vehicle tracking system monitoring speed, acceleration, and temperature. Implemented a telemetry system to collect automotive vehicle data and transmit it to a mobile device. Implemented a long-range point-to-point architecture using LoRa modules, then implemented wireless cloud transmission.",
      technologies: ["LoRA", "Firebase", "Mobile App Integration", "Wireless Communication"],
      company: "Draxlmaier",
      period: "August 2023",
      status: "Completed",
      image: "/placeholder.svg",
      details: [
        "Real-time vehicle tracking",
        "Long-range LoRa communication",
        "Mobile app integration",
        "Cloud data transmission",
        "Multi-parameter monitoring"
      ]
    },
    {
      id: 5,
      title: "Automatic Watering System",
      category: "Embedded Systems",
      description: "Implemented an intelligent irrigation system capable of real-time monitoring and control. Utilized sensors data and control algorithm to optimize water distribution and minimize waste. Implemented wireless communication and cloud-based monitoring for remote access and data analysis.",
      technologies: ["MQTT", "HTTP", "ThingSpeak API", "Sensor Integration", "STM32", "FreeRTOS", "Flash Memory Management"],
      company: "National School of Engineers of Sfax",
      period: "September 2023 - January 2024",
      status: "Completed",
      image: "/placeholder.svg",
      details: [
        "Intelligent irrigation control",
        "Real-time sensor monitoring",
        "Cloud-based data logging",
        "Mobile app control",
        "Water usage optimization"
      ]
    }
  ];

  const categories = ["All", "Embedded Systems", "IoT", "Web Development"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500/20 text-green-700 dark:text-green-300";
      case "In Progress": return "bg-blue-500/20 text-blue-700 dark:text-blue-300";
      default: return "bg-gray-500/20 text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Projects Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my engineering projects spanning embedded systems, IoT solutions, 
              and web applications. Each project demonstrates technical expertise and innovative problem-solving.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group shadow-elegant hover:shadow-glow transition-all duration-500 ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge 
                      className={`${getStatusColor(project.status)} border-0`}
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  {/* Project Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-secondary rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-muted-foreground">Project Image</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Stats */}
          <div className="mt-16 animate-fade-in">
            <Card className="shadow-elegant bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Project Statistics</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">{projects.length}</div>
                    <div className="text-sm text-muted-foreground">Total Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;