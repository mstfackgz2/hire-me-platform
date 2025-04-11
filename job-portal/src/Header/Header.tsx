import { Avatar, Indicator } from "@mantine/core";
import { IconBell, IconGlobeFilled, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";


const Header = ()=>{
    return <div className="w-full text-white bg-mine-shaft-950 h-20 px-6 flex justify-between items-center">
        
        {/* BAS KISIM */}
        <div className="flex gap-1 items-center text-bright-sun-400">
            <IconGlobeFilled stroke={2} className="h-8 w-8 " />
            <div className="text-3xl font-bold">JobWelt</div>
        </div>

        {/* ORTA KISIM */}
        {NavLinks()}

        {/* SON KISIM */}
        <div className="flex gap-3 items-center ">
            <div className="flex items-center gap-2">
                <div>Marshall</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <IconSettings stroke={1.5} />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
                <Indicator processing offset={6} color="brightSun.4" size={8}>
                    <IconBell  stroke={1.5}/>
                </Indicator>
            </div>
        </div>
    </div>
}


export default Header;