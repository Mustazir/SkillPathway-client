export default function SuccessStories() {
    const stories = [
      {
        id: 1,
        title: "Achieved Academic Excellence",
        description: "With the help of our platform, Sara improved her grades and secured a scholarship.",
        color: "bg-color1 dark:bg-d-color1",
      },
      {
        id: 2,
        title: "Mastered Programming Skills",
        description: "John learned advanced coding skills and landed a software development internship.",
        color: "bg-color2 dark:bg-d-color2",
      },
      {
        id: 3,
        title: "Successful Career Transition",
        description: "Lisa transitioned to a data science career after completing our tutor-led courses.",
        color: "bg-color3 dark:bg-d-color3",
      },
    ];
  
    return (
      <section className="py-16 px-4 md:px-8 lg:px-48 text-white dark:bg-gray-950 dark:text-white border border-orange-300">
        <h2 className="text-4xl font-bold text-center mb-12 text-color1 dark:text-white">
          Success Stories
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.id}
              className={`p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 ${story.color}`}
            >
              <h3 className="text-2xl font-semibold mb-4">{story.title}</h3>
              <p className="text-lg">{story.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  