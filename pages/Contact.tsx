
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    country: 'Australia',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // CONFIGURATION: Replace these with your actual IDs from EmailJS dashboard
    const SERVICE_ID = 'service_y2yritm';
    const TEMPLATE_ID = 'template_yxdd139';
    const PUBLIC_KEY = 'gUQ5y8Rx1jpzFKSrj';

    try {
      // Create a specific object mapping to your EmailJS template variables
      const templateParams = {
        to_name: "Charles Galea",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company: formData.company,
        job_title: formData.jobTitle,
        phone: formData.phone,
        address: `${formData.address}, ${formData.state}, ${formData.country}`,
        message: formData.message
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setStatus('success');
      setFormData({
        firstName: '', lastName: '', company: '', jobTitle: '', 
        email: '', phone: '', address: '', state: '', 
        country: 'Australia', message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  const inputClasses = "w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed";
  const labelClasses = "block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2";

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-white">Contact <span className="text-emerald-500">Form</span></h2>
        <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Success/Error Overlay */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6 flex items-center gap-3 text-emerald-400"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="font-bold">Message Sent Successfully!</p>
                <p className="text-xs opacity-80">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 flex items-center gap-3 text-red-400"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <div>
                <p className="font-bold">Failed to send message.</p>
                <p className="text-xs opacity-80">Please ensure you have configured your EmailJS credentials in the code, or try again later.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={labelClasses}>First Name *</label>
              <input required disabled={status === 'sending'} name="firstName" value={formData.firstName} onChange={handleChange} className={inputClasses} placeholder="First Name" />
            </div>
            <div>
              <label className={labelClasses}>Last Name *</label>
              <input required disabled={status === 'sending'} name="lastName" value={formData.lastName} onChange={handleChange} className={inputClasses} placeholder="Last Name" />
            </div>

            <div>
              <label className={labelClasses}>Company Name *</label>
              <input required disabled={status === 'sending'} name="company" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Company Name" />
            </div>
            <div>
              <label className={labelClasses}>Job Title *</label>
              <input required disabled={status === 'sending'} name="jobTitle" value={formData.jobTitle} onChange={handleChange} className={inputClasses} placeholder="Job Title" />
            </div>

            <div>
              <label className={labelClasses}>Email *</label>
              <input required disabled={status === 'sending'} type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="email@example.com" />
            </div>
            <div>
              <label className={labelClasses}>Phone Number *</label>
              <input required disabled={status === 'sending'} type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+61 400 000 000" />
            </div>
          </div>

          <div>
            <label className={labelClasses}>Address *</label>
            <input required disabled={status === 'sending'} name="address" value={formData.address} onChange={handleChange} className={inputClasses} placeholder="Street Address" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className={labelClasses}>State / Province / Region</label>
              <input name="state" disabled={status === 'sending'} value={formData.state} onChange={handleChange} className={inputClasses} placeholder="State / Province" />
            </div>
            <div>
              <label className={labelClasses}>Country</label>
              <div className="relative">
                <select disabled={status === 'sending'} name="country" value={formData.country} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                  <option value="Australia">Australia</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  ▼
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className={labelClasses}>Questions or Other Relevant Information</label>
            <textarea 
              name="message" 
              disabled={status === 'sending'}
              value={formData.message} 
              onChange={handleChange} 
              className={`${inputClasses} h-32 resize-none`} 
              placeholder="Questions or Other Relevant Information"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:text-slate-400 text-white font-bold rounded-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/20"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
