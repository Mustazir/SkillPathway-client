import { useState } from "react";

export default function Announcements() {
  const [expanded, setExpanded] = useState(null);

  const announcements = [
    {
      id: 1,
      title: "New Study Sessions Available",
      summary: "Explore the latest study sessions on Data Science and Web Development.",
      details: "We have added multiple new study sessions in Data Science and Web Development. Register now to join live classes with experienced tutors!",
      color: "bg-color1 dark:bg-d-color1",
    },
    {
      id: 2,
      title: "Platform Update",
      summary: "We've improved performance and added new features for better learning.",
      details: "Our platform has been optimized for faster performance, and new features like interactive quizzes and progress tracking have been added.",
      color: "bg-color2 dark:bg-d-color2",
    },
    {
      id: 3,
      title: "Upcoming Webinar",
      summary: "Join our live webinar on advanced machine learning techniques this Friday.",
      details: "This Friday, we are hosting a live webinar on advanced machine learning techniques. Don’t miss the chance to learn from industry experts.",
      color: "bg-color3 dark:bg-d-color3",
    },
    {
      id: 4,
      title: "New Tutor Joining",
      summary: "Welcome our new tutors specializing in AI and Cloud Computing.",
      details: "We are excited to announce new expert tutors joining our platform, specializing in Artificial Intelligence and Cloud Computing.",
      color: "bg-color1 dark:bg-d-color1",
    },
    {
      id: 5,
      title: "Scholarship Program",
      summary: "Apply for our upcoming scholarship program for eligible students.",
      details: "Eligible students can now apply for our scholarship program and access premium study sessions for free.",
      color: "bg-color2 dark:bg-d-color2",
    },
    {
      id: 6,
      title: "Site Maintenance Notice",
      summary: "Scheduled maintenance on Saturday from 12 AM to 4 AM.",
      details: "We will be performing scheduled maintenance on our platform this Saturday from 12 AM to 4 AM. The site will be temporarily unavailable.",
      color: "bg-color3 dark:bg-d-color3",
    },
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-48 text-white dark:bg-gray-950 dark:text-white border-b-2 border-orange-300">
      <h2 className="text-4xl font-bold text-center mb-12 text-color1 dark:text-d-color1">
        Announcements
      </h2>
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 ${announcement.color}`}
          >
            <h3 className="text-2xl font-semibold mb-4">{announcement.title}</h3>
            <p className="text-lg mb-4">{announcement.summary}</p>
            {expanded === announcement.id && (
              <p className="text-lg mb-4">{announcement.details}</p>
            )}
            <button
              onClick={() => toggleExpand(announcement.id)}
              className="mt-4 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white"
            >
              {expanded === announcement.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
