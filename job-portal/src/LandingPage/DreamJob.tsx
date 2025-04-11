import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () =>{
return(
    <div className="flex items-center px-16">
        <div className="flex flex-col w-[45%] gap-3">
            <div className="text-6xl leading-tight font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400 ">Find Your <span>Dream Job</span> With Us</div>
            <div className="text-lg text-mine-shaft-200 ">Good Life Begins With a Good Company. Start explore thousands of jobs in one place.</div>
            <div className="flex gap-3 mt-5">
            <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Title" placeholder="Software Engineer"/>

            <TextInput className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100" variant="unstyled" label="Job Type" placeholder="Fulltime"/>
                
                <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer ">
                    <IconSearch className="h-[85%] w-[85%]"/>
                </div>
            </div>
        </div>
        <div className="w-[55%] flex items-center justify-center">
            <div className="w-[30rem] relative">
                <img src="/HomePage.png" alt="" />
                <div className="absolute w-fit right-10 top-[50%] mt-10 text-sm border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
                    <div className="text-center text-mine-shaft-100">10K+ got job</div>
                    <Avatar.Group>
                        <Avatar src="avatar1.jpg" />
                        <Avatar src="avatar2.jpg" />
                        <Avatar src="avatar3.jpg" />
                        <Avatar>+5K</Avatar>
                    </Avatar.Group>
                </div>
                <div className="absolute w-fit left-10 top-[30%] mt-12 text-sm border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                            <img src="/Google.png" alt="" />
                        </div>
                        <div className="text-sm text-mine-shaft-100">
                            <div>Software Engineer</div>
                            <div className="text-xs text-mine-shaft-200">Berlin</div>
                        </div>
                    </div>
                    <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around">
                        <span>1 Day Ago</span>
                        <span>120 Applicants</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

)};

export default DreamJob;