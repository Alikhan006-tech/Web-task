import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Ali's agency transformed our digital presence. The attention to detail in the UI/UX design is unmatched. Highly recommended for any startup!",
    rating: 5
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The web development team delivered our project 2 weeks ahead of schedule. The site is incredibly fast and looks stunning on mobile.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder of GreenSpace",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Working with them was a breeze. They really understood our brand vision and translated it into a beautiful visual identity.",
    rating: 4
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative bg-gray-50 rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100">
          {/* Background Quote Icon */}
          <Quote className="absolute top-10 left-10 text-gray-200 w-24 h-24 -z-0 opacity-50" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6 text-yellow-400">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-10 italic">
                  "{testimonials[index].content}"
                </p>

                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[index].image} 
                    alt={testimonials[index].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md mb-4 object-cover"
                  />
                  <h4 className="text-lg font-bold text-black">{testimonials[index].name}</h4>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest">{testimonials[index].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-10">
            <button 
              onClick={prevSlide}
              className="p-3 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-black hover:text-white transition-all transform active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 bg-white border border-gray-100 rounded-full shadow-lg hover:bg-black hover:text-white transition-all transform active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-blue-600" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}