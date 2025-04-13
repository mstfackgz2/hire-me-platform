import { Carousel, CarouselSlide } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  const categories = [
    {
      title: "Digital Marketing",
      image: "/Category/Digital Marketing.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ducimus  ",
      jobCount: "1k+ new job posted",
    },
    {
      title: "Digital Marketing",
      image: "/Category/Digital Marketing.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ducimus  ",
      jobCount: "1k+ new job posted",
    },
    {
      title: "Digital Marketing",
      image: "/Category/Digital Marketing.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ducimus  ",
      jobCount: "1k+ new job posted",
    },
    {
      title: "Digital Marketing",
      image: "/Category/Digital Marketing.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ducimus  ",
      jobCount: "1k+ new job posted",
    },
    {
      title: "Digital Marketing",
      image: "/Category/Digital Marketing.png",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ducimus  ",
      jobCount: "1k+ new job posted",
    },
  ];

  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>

      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>

      <Carousel
        slideSize="22%"
        slideGap="lg"
        loop
        align="start"
        className="focus-visible:[&_button]:!outline-none [&_button]:!text-bright-sun-400 [&_button]:!border-none:hover:!opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100 "
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      >
        {categories.map((category, index) => (
          <CarouselSlide key={index}>
            <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transistion duration-300 ease-in-out !shadow-bright-sun-300">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={category.image}
                  alt={category.title}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold">
                {category.title}
              </div>
              <div className="text-sm text-center text-mine-shaft-300">
                {category.description}
              </div>
              <div className="text-bright-sun-300 text-lg">
                {category.jobCount}
              </div>
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
