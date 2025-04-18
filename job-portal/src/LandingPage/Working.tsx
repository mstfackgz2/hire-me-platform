import "@mantine/carousel/styles.css";
import { Avatar } from "@mantine/core";
const work = [
    {
        name: "Build Your Resume",
        desc: "Create a standout resume with your skills.",
    },
    {
        name: "Apply for Job",
        desc: "Find and apply for jobs that match your skills.",
    },
    {
        name: "Get Hired",
        desc: "Connect with employers and start your new job.",
    },
];

const Working = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
                How it <span className="text-bright-sun-400">works</span>
            </div>

            <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
                Effortlessly navigate through the process and land your dream job.
            </div>

            <div className="flex px-16 justify-between items-center">
                <div className="relative">
                    <img className="w-[32rem]" src="/Deneme2.png" alt="Girls" />

                    <div className="w-36 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
                        <Avatar className="!h-16 !w-16" src="avatar.png" alt="kizin bulanikligi" />
                        <div className="text-sm font-semibold text-mine-shaft-200 text-center"> Complete Your Profile</div>
                        <div className="text-cs text-mine-shaft-300">70% Completed</div>
                    </div>
                </div>


                <div className="flex flex-col gap-10">
                    {work.map((item, index) => (
                        <div className="flex items-center gap-4" key={index}>
                            <div className="p-2.5 bg-bright-sun-300 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                                <img className="h-10 w-10" src="" alt="" />
                            </div>
                            <div>
                                <div className="text-mine-shaft-100 text-xl font-semibold">{item.name}</div>
                                <div className="text-mine-shaft-300">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Working;