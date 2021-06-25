function Card({ name, image, description, link, playlists }) {
  return (
    <a className="" href={link} target="black">
      <div className="group bg-white rounded-xl shadow-lg space-y-1 transform duration-100 hover:scale-105 min-h-[350px]">
        <img
          className="w-full h-48 rounded-t-xl object-cover"
          src={image || "/img/yt.jpeg"}
          loading="lazy"
          alt=""
        />
        <div className="p-4">
          <h2 className="text-2xl text-gray-700 font-bold cursor-pointer group-hover:text-blue-500 line-clamp-1">
            {name}
          </h2>
          <p className="text-lg text-gray-500 line-clamp-3">{description}</p>
        </div>
        <div className="p-1 space-x-1 flex flex-wrap space-y-1">
          {playlists?.map((e, i) => (
            <div
              key={i}
              className="px-2 bg-yellow-100 text-gray-700 text-xs rounded-full inline-flex w-max"
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default Card;
