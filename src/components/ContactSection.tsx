import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.85);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="bg-black site-section">
      <div className="section-container relative">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative z-10 px-0 md:px-6 space-y-6">
            <p
              className={`section-eyebrow transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >Get in Touch</p>
            <h2
              className={`section-title transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '150ms' }}
            >Let's Start a Conversation</h2>
            <p
              className={`section-body max-w-3xl transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Whether you're a founder looking for a growth partner or an investor interested in learning more, we'd love to hear from you.
            </p>
            <div
              className={`flex items-center gap-3 md:gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00FFFF]/15 rounded-none flex items-center justify-center">
                <Mail className="w-6 h-6 md:w-5 md:h-5 text-[#00FFFF]" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="text-white text-base">info@softwaregrowthpartners.com</p>
              </div>
            </div>
            <div
              className={`flex items-center gap-3 md:gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00FFFF]/15 rounded-none flex items-center justify-center">
                <Phone className="w-6 h-6 md:w-5 md:h-5 text-[#00FFFF]" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <p className="text-white text-base">+1 (555) 123-4567</p>
              </div>
            </div>
            <div
              className={`flex items-center gap-3 md:gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00FFFF]/15 rounded-none flex items-center justify-center">
                <MapPin className="w-6 h-6 md:w-5 md:h-5 text-[#00FFFF]" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Headquarters</p>
                <p className="text-white text-base">New York, NY</p>
              </div>
            </div>
          </div>

          <div className="relative md:pl-8 md:pr-6 mt-8 md:mt-6">
            <div className="relative w-full">
              <form
                onSubmit={handleSubmit}
                className={`space-y-5 p-0 md:p-0 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-none"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-none"
                    required
                  />
                </div>
                <Input
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#00FFFF] focus:ring-[#00FFFF] rounded-none"
                />
                <Textarea
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="h-32 md:h-52 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#00FFFF] focus:ring-[#00FFFF] resize-none rounded-none"
                  required
                />
                <Button type="submit" size="lg" className="w-full h-12" variant="cta">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
