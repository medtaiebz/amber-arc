import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "National Engineering School of Sfax (ENIS)",
      degree: "Engineering degree in Electrical Engineering",
      location: "Sfax, Tunisia",
      period: "2021 - 2024",
      status: "Graduated",
      type: "Higher Education",
      relevantCoursework: [
        "Power Electronics",
        "Control Systems Engineering",
        "Embedded Systems Design",
        "Digital Signal Processing",
        "Microcontroller Programming",
        "Communication Systems"
      ],
      achievements: [
        "Graduated with distinction",
        "Completed advanced embedded systems track",
        "Led multiple engineering projects",
        "Published research on IoT applications"
      ]
    },
    {
      id: 2,
      institution: "Preparatory Institute for Engineering Studies of Kairouan (IPEIK)",
      degree: "Pre-engineering Diploma",
      location: "Kairouan, Tunisia",
      period: "2019 - 2021",
      status: "Completed",
      type: "Preparatory Studies",
      relevantCoursework: [
        "Advanced Mathematics",
        "Physics and Mechanics",
        "Chemistry",
        "Engineering Fundamentals",
        "Computer Science Basics",
        "Technical Drawing"
      ],
      achievements: [
        "Successfully completed rigorous preparatory program",
        "Qualified for engineering school admission",
        "Strong foundation in STEM subjects",
        "Developed analytical thinking skills"
      ]
    }
  ];

  const certifications = [
    {
      title: "Embedded Systems Development",
      issuer: "ARM",
      date: "2023",
      credentialId: "ARM-ES-2023-001"
    },
    {
      title: "IoT Fundamentals",
      issuer: "Cisco",
      date: "2023",
      credentialId: "CISCO-IOT-2023"
    },
    {
      title: "PCB Design Professional",
      issuer: "KiCad Foundation",
      date: "2022",
      credentialId: "KICAD-PCB-2022"
    },
    {
      title: "Real-time Systems Programming",
      issuer: "FreeRTOS",
      date: "2022",
      credentialId: "FRTOS-2022-MT"
    }
  ];

  const skills = [
    "Engineering Problem Solving",
    "Research & Development",
    "Technical Documentation",
    "Project Management",
    "Team Leadership",
    "Critical Analysis",
    "Innovation & Design Thinking",
    "Quality Assurance"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Education & Qualifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey in electrical engineering and embedded systems, 
              building a strong foundation for innovative engineering solutions.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <Card 
                key={edu.id} 
                className={`shadow-elegant hover:shadow-glow transition-all duration-500 ${
                  index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <Badge variant={edu.status === "Graduated" ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                        <Badge variant="outline">{edu.type}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <h3 className="text-lg font-semibold text-primary mb-3">{edu.institution}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        Relevant Coursework
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.relevantCoursework.map((course) => (
                          <div key={course} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement) => (
                          <div key={achievement} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-16 animate-scale-in">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert) => (
                    <div 
                      key={cert.title}
                      className="p-6 rounded-lg border border-border bg-gradient-secondary hover:border-primary/50 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{cert.date}</span>
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Skills */}
          <div className="mb-16 animate-fade-in">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Academic & Professional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Summary */}
          <div className="animate-slide-in-left">
            <Card className="shadow-elegant bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Educational Excellence</h3>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5</div>
                    <div className="text-sm text-muted-foreground">Years of Engineering Education</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">4</div>
                    <div className="text-sm text-muted-foreground">Professional Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Specialized Courses</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg text-muted-foreground">
                    Strong academic foundation in electrical engineering with specialized focus on 
                    embedded systems, complemented by industry-relevant certifications and continuous learning.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;