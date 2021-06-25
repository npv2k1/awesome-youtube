import Card from "./Card";
import CardPreview from "./CardPreview";
function Section({ id, name, list }) {
  return (
    <section id={id}>
      <h1 className="font-bold text-gray-700 text-4xl my-5">{name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-4">
        {list.map((e, i) => (
          <Card
            key={i}
            name={e.name}
            image={e.images ? e.images[0] : ""}
            description={e.description}
            link={e.link}
            playlists={e.playlists}
          />
        ))}
        {/* {list.map((e, i) => (
            <CardPreview key={i} dt={e} url={e.link} playlists={e.playlists} />
          ))} */}
      </div>
    </section>
  );
}

export default Section;
