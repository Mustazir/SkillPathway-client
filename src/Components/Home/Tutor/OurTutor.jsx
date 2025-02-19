const tutors = [
    {
      name: 'Dr. Ayesha Khan',
      subject: 'Physics',
      image: 'https://via.placeholder.com/150',
      phone: '+8801234567890',
      email: 'ayesha.khan@example.com'
    },
    {
      name: 'Mr. Rahim Ahmed',
      subject: 'Mathematics',
      image: 'https://via.placeholder.com/150',
      phone: '+8801987654321',
      email: 'rahim.ahmed@example.com'
    },
    {
      name: 'Ms. Fatima Noor',
      subject: 'Chemistry',
      image: 'https://via.placeholder.com/150',
      phone: '+8801765432189',
      email: 'fatima.noor@example.com'
    },
    {
      name: 'Mr. Salman Hossain',
      subject: 'Biology',
      image: 'https://via.placeholder.com/150',
      phone: '+8801555523456',
      email: 'salman.h@example.com'
    },
    {
      name: 'Ms. Zara Islam',
      subject: 'English Literature',
      image: 'https://via.placeholder.com/150',
      phone: '+8801333221122',
      email: 'zara.islam@example.com'
    },
    {
      name: 'Mr. Tanvir Haque',
      subject: 'Computer Science',
      image: 'https://via.placeholder.com/150',
      phone: '+8801444556677',
      email: 'tanvir.haque@example.com'
    },
    {
      name: 'Ms. Laila Hasan',
      subject: 'History',
      image: 'https://via.placeholder.com/150',
      phone: '+8801222333444',
      email: 'laila.hasan@example.com'
    },
    {
      name: 'Mr. Imran Sadiq',
      subject: 'Economics',
      image: 'https://via.placeholder.com/150',
      phone: '+8801888776655',
      email: 'imran.sadiq@example.com'
    },
    {
      name: 'Ms. Nadia Karim',
      subject: 'Philosophy',
      image: 'https://via.placeholder.com/150',
      phone: '+8801555667788',
      email: 'nadia.karim@example.com'
    },
    {
      name: 'Mr. Arif Chowdhury',
      subject: 'Statistics',
      image: 'https://via.placeholder.com/150',
      phone: '+8801999887766',
      email: 'arif.chowdhury@example.com'
    },
    {
      name: 'Ms. Samira Jahan',
      subject: 'Law',
      image: 'https://via.placeholder.com/150',
      phone: '+8801777889922',
      email: 'samira.jahan@example.com'
    },
    {
      name: 'Mr. Javed Malik',
      subject: 'Political Science',
      image: 'https://via.placeholder.com/150',
      phone: '+8801666554433',
      email: 'javed.malik@example.com'
    },
    {
      name: 'Ms. Rina Akter',
      subject: 'Geography',
      image: 'https://via.placeholder.com/150',
      phone: '+8801999111222',
      email: 'rina.akter@example.com'
    },
    {
      name: 'Mr. Kamal Uddin',
      subject: 'Sociology',
      image: 'https://via.placeholder.com/150',
      phone: '+8801333444555',
      email: 'kamal.uddin@example.com'
    },
    {
      name: 'Ms. Tasnim Rahman',
      subject: 'Psychology',
      image: 'https://via.placeholder.com/150',
      phone: '+8801222111000',
      email: 'tasnim.rahman@example.com'
    },
    {
      name: 'Mr. Rafiq Islam',
      subject: 'Business Studies',
      image: 'https://via.placeholder.com/150',
      phone: '+8801888442233',
      email: 'rafiq.islam@example.com'
    },
    {
      name: 'Ms. Sumaiya Hossain',
      subject: 'Fine Arts',
      image: 'https://via.placeholder.com/150',
      phone: '+8801444333222',
      email: 'sumaiya.h@example.com'
    },
    {
      name: 'Mr. Nayeem Hasan',
      subject: 'Engineering',
      image: 'https://via.placeholder.com/150',
      phone: '+8801666111999',
      email: 'nayeem.hasan@example.com'
    },
    {
      name: 'Ms. Farzana Akter',
      subject: 'Environmental Science',
      image: 'https://via.placeholder.com/150',
      phone: '+8801999223344',
      email: 'farzana.akter@example.com'
    },
    {
      name: 'Mr. Ahsan Karim',
      subject: 'Music',
      image: 'https://via.placeholder.com/150',
      phone: '+8801222445566',
      email: 'ahsan.karim@example.com'
    }
  ];
  
  const OurTutors = () => {
    return (
      <div className="bg-color1 dark:dark:bg-gray-950 dark:text-white text-white p-8">
        <h2 className="text-4xl font-bold text-white dark:dark:bg-gray-950 dark:text-white mb-8 text-center">Our Tutors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <div key={index} className="bg-color3 dark:dark:bg-gray-900 dark:text-white p-6 rounded-2xl shadow-lg">
              <img src={tutor.image} alt={tutor.name} className="w-full rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-white ">{tutor.name}</h3>
              <p className="text-white">{tutor.subject}</p>
              <p className="mt-2 text-sm text-white">📞 {tutor.phone}</p>
              <p className="text-sm text-white">📧 {tutor.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurTutors;
  