
import React from 'react'

export default function Contect() {
  return (
    <div>
  
  <section className="max-w-3xl mx-auto p-8">
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2" required/>
        </div>
        <div>
          <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" placeholder="you@example.com"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2" required/>
        </div>
        <div>
          <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2" required></textarea>
        </div>
        <div>
          <button type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>


 

    </div>
  )
}
