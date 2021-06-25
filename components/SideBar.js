import SidebarItem from "./SidebarItem";

// const typeChanels = [
//   { icon: "far fa-computer-classic", text: "Programming" },
//   { icon: "fad fa-browser", text: "Web-dev (HTML, CSS, JS)" },
//   { icon: "", text: "Software Engineers" },
//   { icon: "fab fa-python", text: "Python" },
//   { icon: "fad fa-registered", text: "R" },
//   { icon: "", text: "Julia" },
//   { icon: "", text: "Flutter" },
//   { icon: "fad fa-gem", text: "Ruby" },
//   { icon: "fas fa-play-circle", text: "Audio Programming" },
//   { icon: "far fa-shield-alt", text: "Cybersecurity" },
//   { icon: "far fa-function", text: "Statistics/Math" },
//   { icon: "fad fa-database", text: "Data Science / Data Analysis" },
//   { icon: "fas fa-table", text: "Data Engineering" },
//   { icon: "fad fa-brain", text: "ML/AI/DL" },
//   { icon: "fad fa-search", text: "AI research" },
//   { icon: "far fa-podcast", text: "Podcasts/Talks" },
//   { icon: "", text: "Organizations" },
// ];
import channels from "../crawls/channels.json";

const typeChanels = Object.keys(channels);
// console.log(typeChanels)
function SideBar() {
  return (
    <div className="hidden lg:flex flex-col md:min-w-[300px] bg-white p-3">
      {/*Search  */}
      <div className="flex flex-col space-y-2 mt-3">
        <h2 className="text-3xl font-bold text-center">Awesome Youtube</h2>
        {/* <input
          type="text"
          placeholder="Search..."
          className="p-3 rounded-full border flex-grow"
        /> */}
      </div>
      {/* List */}
      <div className="flex flex-col space-y-1 h-0 min-h-full overflow-y-auto p-2 pb-40 scrollbar-hide">
        {typeChanels.map((typeChanel) => (
          <SidebarItem
            key={typeChanel}
            icon={channels[typeChanel]?.icon}
            text={typeChanel}
            id={channels[typeChanel].id}
          />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
