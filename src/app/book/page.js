'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, Mail, User, Scissors } from 'lucide-react'

export default function BookNowPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Booking received for ${form.name}! 🎉`)
    // Here you’d typically send this data to a backend or API.
  }

  return (
    <main className="min-h-screen px-4 py-32 bg-[#fefefe] text-[#6B4F31]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Book Now</h1>
        <p className="text-center text-[#8B6F4D] mb-8">
          Reserve your spot and let us elevate your style.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-[#B69477]" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full pl-10 py-3 border border-[#D8C5A5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-[#B69477]" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full pl-10 py-3 border border-[#D8C5A5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
            />
          </div>

          {/* Date */}
          <div className="relative">
            <CalendarDays className="absolute left-3 top-3 text-[#B69477]" size={20} />
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="w-full pl-10 py-3 border border-[#D8C5A5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
            />
          </div>

          {/* Time */}
          <div className="relative">
            <Clock className="absolute left-3 top-3 text-[#B69477]" size={20} />
            <input
              type="time"
              name="time"
              required
              value={form.time}
              onChange={handleChange}
              className="w-full pl-10 py-3 border border-[#D8C5A5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
            />
          </div>

          {/* Service */}
          <div className="relative">
            <Scissors className="absolute left-3 top-3 text-[#B69477]" size={20} />
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full pl-10 py-3 border border-[#D8C5A5] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#6B4F31]"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Styling">Styling</option>
              <option value="Tailoring">Tailoring</option>
              <option value="Custom Outfit">Custom Outfit</option>
              <option value="Measurement Session">Measurement Session</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#6B4F31] text-white rounded-xl hover:bg-[#543c25] transition-all"
          >
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </main>
  )
}
