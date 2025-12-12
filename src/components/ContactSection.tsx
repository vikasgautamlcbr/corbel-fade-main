import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
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
    <section
      id="contact"
      ref={ref}
      className="bg-white py-20 md:py-28"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header - Centered */}
          <div className="text-center mb-12">
            <p className="text-[#1cc8e0] font-medium tracking-wider uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
              Let's Start a Conversation
            </h2>
            <p className="text-navy/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you're a founder looking for a growth partner or an investor 
              interested in learning more, we'd love to hear from you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1cc8e0]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1cc8e0]" />
                </div>
                <div>
                  <p className="text-navy/50 text-sm">Email</p>
                  <p className="text-navy text-base">info@softwaregrowthpartners.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1cc8e0]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#1cc8e0]" />
                </div>
                <div>
                  <p className="text-navy/50 text-sm">Phone</p>
                  <p className="text-navy text-base">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1cc8e0]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#1cc8e0]" />
                </div>
                <div>
                  <p className="text-navy/50 text-sm">Headquarters</p>
                  <p className="text-navy text-base">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-none bg-gray-50 border-gray-200 text-navy placeholder:text-navy/40 focus:border-[#1cc8e0] focus:ring-[#1cc8e0] h-12"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-none bg-gray-50 border-gray-200 text-navy placeholder:text-navy/40 focus:border-[#1cc8e0] focus:ring-[#1cc8e0] h-12"
                  required
                />
              </div>
              <Input
                placeholder="Company name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="rounded-none bg-gray-50 border-gray-200 text-navy placeholder:text-navy/40 focus:border-[#1cc8e0] focus:ring-[#1cc8e0] h-12"
              />
              <Textarea
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-none bg-gray-50 border-gray-200 text-navy placeholder:text-navy/40 focus:border-[#1cc8e0] focus:ring-[#1cc8e0] resize-none"
                required
              />
              <Button
                type="submit"
                className="w-full rounded-none bg-[#1cc8e0] hover:bg-[#1cc8e0]/90 text-white font-medium h-12"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
