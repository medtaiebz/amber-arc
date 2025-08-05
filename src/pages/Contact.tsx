import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "zorgattaieb5@gmail.com",
      href: "mailto:zorgattaieb5@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(+216) 52170073",
      href: "tel:+21652170073"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Tunisia, Sousse",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/medtaiebz",
      href: "https://github.com/medtaiebz"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/taieb-zorgati",
      href: "https://linkedin.com/in/taieb-zorgati"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in embedded systems and IoT development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6 text-primary" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:shadow-glow"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:shadow-glow"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-glow"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-glow resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Contact Details */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect with Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {socialLinks.map((social) => (
                    <div key={social.label} className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{social.label}</p>
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {social.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="shadow-elegant bg-gradient-secondary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Availability</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    I'm currently open to new opportunities and collaborations. 
                    Let's discuss how we can work together on your next project.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Available for new projects
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-scale-in">
            <Card className="shadow-elegant bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you're looking for an embedded systems engineer, IoT developer, 
                  or a collaborative partner for your next innovation, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href="mailto:zorgattaieb5@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://linkedin.com/in/taieb-zorgati" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;