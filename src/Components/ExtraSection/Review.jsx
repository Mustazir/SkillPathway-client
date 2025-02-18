import { useState, useEffect } from "react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      comment: "This platform helped me improve my skills and find amazing study sessions!",
    },
    {
      id: 2,
      name: "John Doe",
      comment: "Great tutors and easy-to-use interface. Highly recommended for learners!",
    },
    {
      id: 3,
      name: "Emily Watson",
      comment: "I love the interactive sessions and the variety of study materials available.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 dark:bg-gray-950 dark:text-white ">
      <h2 className="text-4xl font-bold text-center mb-12 text-white dark:text-white">
        User Reviews
      </h2>
      <div className="relative max-w-3xl mx-auto overflow-hidden">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-8 bg-color2 dark:bg-d-color2 rounded-2xl shadow-lg text-center">
              <p className="text-xl mb-4">"{review.comment}"</p>
              <h4 className="text-lg font-semibold">- {review.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
