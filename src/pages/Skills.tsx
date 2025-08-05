import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Embedded C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 70 },
      ]
    },
    {
      title: "Embedded Tools & Platforms",
      skills: [
        { name: "STM32CubeIDE", level: 95 },
        { name: "Arduino IDE", level: 90 },
        { name: "Espressif IDF", level: 85 },
        { name: "KiCad", level: 80 },
        { name: "Altium Designer", level: 75 },
        { name: "Node-Red", level: 85 },
      ]
    },
    {
      title: "Data Visualization & Monitoring",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "JSX", level: 70 },
        { name: "ThingSpeak", level: 80 },
        { name: "Grafana", level: 75 },
      ]
    },
    {
      title: "Protocols & Communication",
      skills: [
        { name: "LoRA", level: 85 },
        { name: "Wi-Fi", level: 90 },
        { name: "Bluetooth", level: 80 },
        { name: "UART/SPI/I2C", level: 95 },
        { name: "TCP/IP", level: 80 },
        { name: "MQTT", level: 85 },
      ]
    }
  ];

  const softSkills = [
    "Teamwork",
    "Effective Communication", 
    "Agile Project Management",
    "Problem Solving",
    "Critical Thinking",
    "Leadership",
    "Attention to Detail",
    "Time Management"
  ];

  const certifications = [
    "IoT Fundamentals",
    "Embedded Systems Design",
    "PCB Design & Manufacturing",
    "Wireless Communication Systems",
    "Real-time Systems Programming"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills, tools, and expertise 
              in embedded systems engineering and software development.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`shadow-elegant hover:shadow-glow transition-all duration-300 ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mb-12 animate-scale-in">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications & Achievements */}
          <div className="animate-fade-in">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert) => (
                    <div 
                      key={cert}
                      className="p-4 rounded-lg border border-border bg-gradient-secondary hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-medium">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 text-center animate-slide-in-left">
            <Card className="shadow-elegant bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Specialized in embedded systems development with expertise in microcontroller programming, 
                  IoT solutions, and web technologies for data visualization and system monitoring.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
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

export default Skills;