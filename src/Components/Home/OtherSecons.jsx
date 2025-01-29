

const OtherSecons = () => {
    return (
        <section className=" text-gray-800 mt-20">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                <h2 className="mb-12 text-4xl font-bold leading-none text-center text-white sm:text-5xl">Our Tuitors</h2>
                <div className="flex flex-col md:flex-row gap-5 justify-center  sm:px-8 lg:px-12 xl:px-32 ">
                    <div className="flex border-4 border-color2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
                        <img src="https://media.istockphoto.com/id/2160473960/photo/happy-satisfied-math-teacher-in-elementary-class.jpg?s=612x612&w=0&k=20&c=zaosJRQ0l2dBIjy-DLc5wAFdONtg-_78Q-FIzxjjIoo=" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 object-cover aspect-square" />
                        <div className="space-y-4 text-center  ">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">Mr. James Lawson</h2>
                                <p className="px-5 text-xs sm:text-base text-gray-600">High School Mathematics Teacher</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex border-4 border-color2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12  bg-gray-50 text-gray-800">
                        <img src="https://media.istockphoto.com/id/1992829733/photo/professor-working-at-the-university-and-looking-at-the-camera-smiling.jpg?s=612x612&w=0&k=20&c=uBPHu1q5vufwc_r7w-RsABoypzYTCY1hzJCHe3z2wRQ=" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square object-cover" />
                        <div className="space-y-4 text-center  ">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">Dr. Emily Carter</h2>
                                <p className="px-5 text-xs sm:text-base text-gray-600">Physics Professor and Researcher</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex border-4 border-color2 flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
                        <img src="https://media.istockphoto.com/id/2160473955/photo/male-teacher-explaining-math-in-class.jpg?s=612x612&w=0&k=20&c=mXrXFrJcjDy69r4O_RGoUXkbOiqIdXC9iRYThx6Ca-s=" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square object-cover" />
                        <div className="space-y-4 text-center ">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">Mr. Ethan Harris</h2>
                                <p className="px-5 text-xs sm:text-base text-gray-600">History Educator and Archivis</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherSecons;