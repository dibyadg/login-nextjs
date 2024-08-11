"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center m-40">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="bg-gray-300 rounded"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <label htmlFor="password">
        Password
      </label>
      <input
        id="password"
        type="password" 
        name="password"
        className="bg-gray-300 rounded mb-2"
      />
      <ValidationError 
        prefix="Password" 
        field="password"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        rows={4}
        cols={22}
        className="bg-gray-300 rounded mt-2"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm