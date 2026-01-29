import { useState } from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import MapBackground from "./MapBackground";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // reset after animation (optional)
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 4000);
  };

  return (
<section className="relative min-h-screen flex items-center justify-center py-20">
       <MapBackground />

<div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
      <div className="relative z-20 w-full max-w-xl bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        
        <p className="text-blue-600 tracking-widest uppercase text-sm mb-3">
          Contact Us
        </p>

        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          Let’s Build Something <span className="text-blue-600 italic">Interactive</span>
        </h2>

        <p className="text-gray-600 mb-10">
          Have a project in mind? Tell us about it and we’ll get back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6 relative overflow-hidden"
        >
          <Input label="Your Name" type="text" placeholder="John Doe" />

          <Input label="Email Address" type="email" placeholder="you@email.com" />

          <Textarea label="Message" placeholder="Tell us about your project…" />

          <button
            type="submit"
            className="
              w-full py-4 rounded-xl font-semibold text-white
              bg-blue-600
              transition-all duration-300
              hover:bg-blue-700 hover:scale-[1.03]
              active:scale-95
            "
          >
            Send Message
          </button>

          {/* Success Message */}
          <div
            className={`
              absolute inset-0 flex items-center justify-center
              bg-white transition-all duration-700
              ${submitted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
            `}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600">
                We’ll get back to you very soon.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
