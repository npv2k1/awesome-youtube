function SidebarItem({ icon, text, id }) {
  return (
    <div className="flex bg-white hover:bg-gray-200 rounded-full p-3 space-x-3 items-center hover:shadow-sm">
      <div className="flex h-10 w-10 bg-white rounded-full items-center justify-center">
        <i className={`${icon ||'fad fa-play-circle'} text-2xl`}></i>
      </div>
      <a href={`#${id}`}>
        <p className="text-lg cursor-pointer">{text}</p>
      </a>
    </div>
  );
}

export default SidebarItem;
