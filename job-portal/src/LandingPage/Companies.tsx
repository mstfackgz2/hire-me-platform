import Marquee from "react-fast-marquee"; // yazı veya görsel kaydırma efekti React kütüphanesi

export const companies = [
  { name: "Figma", logo: "/Figma.png" },
  { name: "Netflix", logo: "/Netflix.png" },
  { name: "Meta", logo: "/Meta.png" },
  { name: "Microsoft", logo: "/Microsoft.png" },
  { name: "Bundesagentur für Arbeit", logo: "/Bfa.png" },
  { name: "Slack", logo: "/Amazon.png" },
  { name: "Pinterest", logo: "/Pinterest.png" },
  { name: "Walmarkt", logo: "/Walmarkt.png" },
  { name: "Oracle", logo: "/Oracle.png" },
];

const Companies = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-10 text-mine-shaft-100 ">
        Companies Trusted By <span className="text-bright-sun-400">1000+</span>
      </div>

      <Marquee pauseOnHover={true}>
        {companies.map((company, index) => (
          <div
            key={index}
            className="mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer max-h-12 max-w-[120px] object-contain"
          >
            <img src={company.logo} alt={company.name} className="h-8" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
