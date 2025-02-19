import { Link } from 'react-router-dom';

const LibraryCard = () => {
    const books = [
        {
            id: 1,
            title: 'Introduction to Machine Learning',
            description: 'This book provides an in-depth introduction to the fundamentals of machine learning, covering algorithms, models, and applications.',
            photo: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'JavaScript: The Good Parts',
            description: 'A deep dive into JavaScript, focusing on its most elegant and useful features, and how to avoid common pitfalls.',
            photo: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'The Pragmatic Programmer',
            description: 'A guide for developers that covers best practices and techniques for writing clean, maintainable, and efficient code.',
            photo: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
            description: 'This book explores common design patterns that solve recurring problems in software development, focusing on object-oriented design principles.',
            photo: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
            description: 'A guide that helps developers improve their coding practices and develop a professional approach to software development.',
            photo: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            title: 'Algorithms Unlocked',
            description: 'An accessible introduction to algorithms, aimed at providing a better understanding of how algorithms work and how to apply them in real-world scenarios.',
            photo: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className='py-10 dark:bg-gray-950 dark:text-white'>
            <h1 className='text-5xl font-bold text-center p-10'>Our Library</h1>
            <div className="md:px-[10vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map((book) => {
                    return (
                        <div
                            key={book.id}
                            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 flex flex-col justify-between"
                        >
                            <img
                                src={book.photo}
                                alt={book.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold mb-2">
                                    {book.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {book.description?.slice(0, 100)}...
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <Link
                                    to={`https://www.google.com/search?q=${book.title}`}
                                    target="_blank"
                                    className="px-4 py-2 text-sm bg-blue-500 dark:bg-blue-900 text-white rounded"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-center w-full mt-7'>
                
            </div>
        </div>
    );
};

export default LibraryCard;
