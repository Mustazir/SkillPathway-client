import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white h-screen justify-center items-center flex text-color3 dark:bg-gray-950  dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-color3 dark:text-white">
            About Us
          </h2>
          <p className="mt-4 text-lg text-color2 dark:text-white">
            We are passionate about creating innovative solutions to meet the needs of our users.
            Our team is dedicated to delivering high-quality products with a focus on usability, performance, and design.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-color2 dark:text-white">Our Mission</h3>
            <p className="mt-2 text-base text-color3 dark:text-white">
              Our mission is to revolutionize the way people interact with technology, making it simpler and more efficient for everyone.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-color2 dark:text-white">Our Vision</h3>
            <p className="mt-2 text-base text-color3 dark:text-white">
              We aim to create a world where innovation is accessible to all, driving progress in every industry.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-color2 dark:text-white">Our Values</h3>
            <p className="mt-2 text-base text-color3 dark:text-white">
              Integrity, collaboration, and excellence guide everything we do, ensuring that we deliver the best possible results for our users.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-color2 dark:text-white">Contact Us</h3>
          <p className="mt-4 text-lg text-color2 dark:text-white">
            We’d love to hear from you! Feel free to reach out with any questions or feedback.
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-color3 dark:text-white">Email</h4>
              <p className="text-base text-color3 dark:text-white">contact@ourcompany.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-color3 dark:text-white">Phone</h4>
              <p className="text-base text-color3 dark:text-white">+1 (123) 456-7890</p>
            </div>
            <div>
              <h4 className="font-semibold text-color3 dark:text-white">Address</h4>
              <p className="text-base text-color3 dark:text-white">123 Innovation Blvd, Tech City, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
