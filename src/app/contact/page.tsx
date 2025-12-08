"use client";

import { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, CheckIcon } from "@/components/icons";

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
      {/* Header */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help you on your certification journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#032D60] mb-6">
                Get in Touch
              </h2>
              <p className="text-[#444444] mb-8">
                Whether you have a question about our dumps, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0176D3]/10 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-[#0176D3]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#032D60]">Email Us</h3>
                    <a
                      href="mailto:contact@salesforcedumps.com"
                      className="text-[#0176D3] hover:underline"
                    >
                      contact@salesforcedumps.com
                    </a>
                    <p className="text-sm text-[#5C5C5C] mt-1">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2E844A]/10 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-[#2E844A]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#032D60]">WhatsApp</h3>
                    <p className="text-[#444444]">Available for quick queries</p>
                    <p className="text-sm text-[#5C5C5C] mt-1">
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FE9339]/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-[#FE9339]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#032D60]">Support Hours</h3>
                    <p className="text-[#444444]">24/7 Email Support</p>
                    <p className="text-sm text-[#5C5C5C] mt-1">
                      Premium support for subscribers
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-[#F3F3F3] rounded-2xl p-6">
                <h3 className="font-bold text-[#032D60] mb-4">Common Questions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[#333333]">How quickly can I access the dumps?</span>
                    <p className="text-[#5C5C5C]">Instant access after purchase</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#333333]">Do you offer refunds?</span>
                    <p className="text-[#5C5C5C]">Yes, full refund if you don&apos;t pass</p>
                  </div>
                  <div>
                    <span className="font-semibold text-[#333333]">Are dumps updated regularly?</span>
                    <p className="text-[#5C5C5C]">Monthly updates with new questions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-[#2E844A]/10 rounded-2xl p-8 text-center">
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
                    Send a Message
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
        </div>
      </section>
    </div>
  );
}
