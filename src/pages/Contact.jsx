import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['1-888-559-4340 (Toll-free)', '1-425-497-3900 (Direct)'],
    action: 'tel:1-888-559-4340'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['sales@hydroflow-usa.com'],
    action: 'mailto:sales@hydroflow-usa.com'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['8561 154th AVE NE, Suite 230', 'Redmond, WA 98052'],
    action: 'https://www.google.com/maps/place/8561+154th+Ave+NE+%23230,+Redmond,+WA+98052',
    newTab: true
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday – Friday', '8:00 AM – 5:00 PM PT']
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              Have questions? We're here to help you find the perfect water treatment solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {info.action ? (
                  <a 
                    href={info.action}
                    {...(info.newTab && { target: "_blank", rel: "noopener noreferrer" })}
                    className="block bg-slate-50 rounded-2xl p-6 hover:bg-cyan-50 hover:shadow-lg transition-all group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                      <info.icon className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-600 text-sm">{detail}</p>
                    ))}
                  </a>
                ) : (
                  <div className="bg-slate-50 rounded-2xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-slate-600 text-sm">{detail}</p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for contacting us. We'll respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="state">State / Zip Code</Label>
                      <Input
                        id="state"
                        placeholder="WA 98052"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                        className="rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Type of Inquiry</Label>
                      <Select 
                        value={formData.inquiryType} 
                        onValueChange={(value) => setFormData({...formData, inquiryType: value})}
                      >
                        <SelectTrigger className="rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="product">Product Purchase</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="dealer">Dealer Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="rounded-xl border-slate-200 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-full py-6 font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map placeholder */}
              <div className="bg-slate-200 rounded-2xl h-80 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.5!2d-122.135249!3d47.6790295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900d51eb6db84d%3A0xe6f31be62a5afc4!2s8561%20154th%20Ave%20NE%20%23230%2C%20Redmond%2C%20WA%2098052!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>

              {/* International Partners */}
              <div className="bg-white rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">International Partners</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Canadian Customers</h4>
                    <a href="http://www.hydroflowcanada.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm block">
                      HydroFLOW Canada
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Mexican Customers</h4>
                    <a href="https://hydroflow-mexico.mx/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm block mb-1">
                      HydroFLOW Mexico
                    </a>
                    <a href="https://www.mitemx.com/techhydroflow/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm block mb-1">
                      Mite Mexico
                    </a>
                    <a href="http://www.gicsemerca.com.mx/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm block">
                      GICSE MERCA
                    </a>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Global Customers</h4>
                    <a href="http://www.hydropath.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                      Hydropath Technology
                    </a>
                  </div>
                </div>
              </div>

              {/* Affiliated Websites */}
              <div className="bg-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Affiliated Websites</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <a href="https://www.ne.com/Products-Services/AMWT" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Nooter/Eriksen
                  </a>
                  <a href="https://www.hydroflowwest.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    HydroFLOW West
                  </a>
                  <a href="https://www.hydroflow-northeast.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    HydroFLOW Northeast
                  </a>
                  <a href="https://www.hydroflownw.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    HydroFLOW Northwest
                  </a>
                  <a href="https://hydroflowmw.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    HydroFLOW Mountain West
                  </a>
                  <a href="https://www.resourcewest.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    RWI
                  </a>
                  <a href="https://iwsolutions.us/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Integrated Water Solutions
                  </a>
                  <a href="https://www.ecotechsolutions.tech/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Ecotech Solutions
                  </a>
                  <a href="https://www.dvcsolutions.tech/hydroflow" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    DVC Solutions
                  </a>
                  <a href="https://www.jsnelectricalsusa.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    JSN
                  </a>
                  <a href="https://ntspr.com/hydroflow" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    NTSPR
                  </a>
                  <a href="https://santafewater.net/commercial-and-industrial-water-treatment/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    New Water Innovations
                  </a>
                  <a href="https://tech-flow.com/municipal/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Tech-Flow
                  </a>
                  <a href="https://ces.works/hydroflow.html" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    CES
                  </a>
                  <a href="https://dwmsm.com/hydroflow/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    D & W Marine
                  </a>
                  <a href="https://www.atsusa.us/hydroflow" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Advance Technology Systems
                  </a>
                  <a href="https://hydrotech.solutions/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Hydrotech Solutions
                  </a>
                  <a href="https://www.dencoenergymanagement.com/hydroflow" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Denco Energy Management
                  </a>
                  <a href="https://www.aeskc.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    AES
                  </a>
                  <a href="https://donhelfers.com/prod/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Don Helfers
                  </a>
                  <a href="https://www.joosequipment.com/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Joos Equipment
                  </a>
                  <a href="https://www.budreiner.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Bud Reiner Ent.
                  </a>
                  <a href="https://www.bertrem.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    Bertrem
                  </a>
                  <a href="https://southeastpump.com/water-filtration/hydroflow-water-filtration//" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline text-sm">
                    SEP
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}