"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-12 pb-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhIkvJ6PMfQw6og0NmzqWV1cLUEjqPsdv0vEW_jpI1lsYqrzSfT9kUtQfncb680FIc6ISDOoIttWsXdR7kktBqC7SPWBpZjQ2fldnCz2WB0OQHwbHHryzSXXcz3kEWuiQS3_hQjG5Duyw78HSvHRHXVdr2304fqmqy8JrdaBmCH8TdLM81wvOBH978BblX0=s16000"
            alt="Contact Background"
            className="w-full h-full object-cover object-bottom"
            style={{ display: 'block' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/90">
              Have questions? We&apos;re here to help you on your certification journey
            </p>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-[#EEF4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#032D60] mb-6">
              We&apos;re Here to Help You Succeed
            </h2>
            <p className="text-lg text-[#444444] leading-relaxed">
              At Salesforce Dumps, we understand that your certification journey is important. Whether you&apos;re preparing for your first Salesforce certification or looking to advance your career with additional credentials, our team is committed to providing you with the support and resources you need to pass your exams with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-[5px] border-[#032D60]">
              <h3 className="text-xl font-bold text-[#032D60] mb-3">Expert Guidance</h3>
              <p className="text-[#444444]">
                Get personalized advice from certified professionals to help you choose the right study materials.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-[5px] border-[#032D60]">
              <h3 className="text-xl font-bold text-[#032D60] mb-3">Quick Response</h3>
              <p className="text-[#444444]">
                Fast response times with most inquiries answered within 24 hours. Premium subscribers get priority support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-[5px] border-[#032D60]">
              <h3 className="text-xl font-bold text-[#032D60] mb-3">Comprehensive Support</h3>
              <p className="text-[#444444]">
                We assist with technical questions, billing inquiries, and study tips for your certification journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-[#FFFFFF] py-16 min-h-[70vh]">
        {/* Gradient Overlay - Back Layer */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(180deg, #fff 29.72%, #c6e9ff 100%)' }}></div>

        {/* Background Images - Middle Layer */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden flex items-end" style={{ zIndex: 2 }}>
          {/* Left Background Image */}
          <div className="relative w-1/2 flex items-end justify-start">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEiFnsCNGs4yaLiFVQ5hweAk3glhBgPKJVWdEz8j5uIqgIUuhv_MpSSMpS0TwbP730LM2KK0LJB5HBDtRzgy9owiil8chbhUFLoMY-LFNmSpZsZctDozm6j0raBclcrYTDdCw0QLRjISGhtYp6mCNfPVpvw-qTYgNQIT9768HGkfPoG_dQTXL2Sxg6akG0LX=s16000"
              alt="Left Background"
              className="max-h-[70vh] w-auto object-contain"
              style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'bottom' }}
            />
          </div>
          
          {/* Right Background Image */}
          <div className="relative w-1/2 flex items-end justify-end">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgl6lLCGsii8kyyUQQyyoSN7fxq0r49_87r6JKy23dlgFqsqdNHXlrc4SNenDgJF6fk9OimJ36NvANwxMZU3SgsFL8pMYICG5Iy3WHf5U7xoQSCyXKu5KA60otm_-bM-oxdm3hGgHiSuu19wLTUDZFUMMsR6deqMwM9kRg4g6OH6VAo4bBFNxwk2SxV9h6f=s16000"
              alt="Right Background"
              className="max-h-[70vh] w-auto object-contain"
              style={{ display: 'block', margin: 0, padding: 0, verticalAlign: 'bottom' }}
            />
          </div>
        </div>

        {/* Content - Front Layer */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 3 }}>
          


          {/* Contact Form - Centered */}
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl shadow-lg border border-[#E5E5E5] p-8 text-center my-10">
                <div className="w-16 h-16 rounded-full bg-[#2E844A]/20 flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-[#2E844A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#032D60] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#444444] mb-6">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="bg-[#0176D3] hover:bg-[#014486] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg border border-[#E5E5E5] p-8"
              >
                <h3 className="text-2xl font-bold text-[#032D60] mb-6">
                Get in Touch
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#333333] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#0176D3] transition-colors text-[#333333]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#333333] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#0176D3] transition-colors text-[#333333]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#333333] mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#0176D3] transition-colors text-[#333333]"
                    >
                      <option value="">Select a subject</option>
                      <option value="sales">Pre-Sales Question</option>
                      <option value="support">Technical Support</option>
                      <option value="refund">Refund Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#333333] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#0176D3] transition-colors resize-none text-[#333333]"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0176D3] hover:bg-[#014486] text-white font-semibold py-4 rounded-xl transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
