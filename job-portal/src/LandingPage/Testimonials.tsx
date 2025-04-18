import { Avatar, Rating } from "@mantine/core";

const testimonials = [
    {
        "name": "Shivam Patel",
        "testimonial": "This job portal made job search easy and quick. Recommended to all job seekers!",
        "rating": 5
    },
    {
        "name": "Abhishek Kullu",
        "testimonial": "Found my dream job within a week! The application process was smooth.",
        "rating": 5
    },
    {
        "name": "Swapnil Pandey",
        "testimonial": "I secured a job offer within days of applying. Exceptional user experience and support.",
        "rating": 4
    },
    {
        "name": "Pavan Barmana",
        "testimonial": "Outstanding job portal with excellent resources. Helped me find a great position quickly.",
        "rating": 5
    }
];

const Testimonials = () => {
    return <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">What <span className="text-bright-sun-400">User</span> says about us?</div>
        <div className="flex justify-evenly">
        {
            testimonials.map((data, index) =>

                <div className="flex flex-col gap-3 w-[23%] border-bright-sun-400 p-3 border rounded-xl mt-10">
                    <div className="flex gap-2 items-center">
                        <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me" />
                        <div>
                            <div className="text-lg text-mine-shaft-100 font-semibold">{data.name}</div>
                            <Rating value={data.rating} fractions={2} readOnly />
                        </div>
                    </div>
                    <div className="text-xs text-mine-shaft-300">{data.testimonial}</div>
                </div>


            )
        }
        </div>

    </div>;
};

export default Testimonials;