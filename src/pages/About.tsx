import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary p-1 animate-float">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
                MZ
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Med Taieb ZORGATI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Embedded Systems Engineer
            </p>
            <div className="flex items-center justify-center text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Tunisia, Sousse</span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (+216) 52170073
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              zorgattaieb5@gmail.com
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              medtaiebz
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              taieb-zorgati
            </Button>
          </div>

          <Button size="lg" className="animate-scale-in">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Personal Profile */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant animate-slide-in-left">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Personal Profile</h2>
              <p className="text-lg leading-relaxed text-muted-foreground text-center">
                Dynamic and detail-oriented Embedded Systems Engineer seeking to lead innovative projects 
                that ensure reliable and fully integrated solutions. Committed to collaboration and creativity 
                to address complex technical challenges and deliver impactful results.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What I Do */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300 animate-slide-in-left">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded bg-primary"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Embedded Systems</h3>
                <p className="text-muted-foreground">
                  Designing and developing embedded systems with microcontrollers, 
                  sensors, and real-time monitoring capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded bg-primary"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-muted-foreground">
                  Creating web applications with modern technologies like React, 
                  TypeScript, and REST APIs for data visualization and system control.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-glow transition-all duration-300 animate-slide-in-right">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded bg-primary"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">IoT Solutions</h3>
                <p className="text-muted-foreground">
                  Building IoT systems with wireless communication protocols, 
                  cloud integration, and mobile app connectivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;