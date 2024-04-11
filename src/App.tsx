import { useEffect, useState } from "react";
import { getShortData } from "./utils/utils";
import type { Episode } from "./models/episode";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const App = () => {
  const [data, setData] = useState<Episode[]>([]);

  useEffect(() => {
    getShortData().then((response) => setData(response));
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <EpisodesList data={data} />
      <PodcastDetails />
    </div>
  );
};

const EpisodesList = (props: { data: Episode[] }) => {
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="flex flex-col w-full md:w-1/2 order-2 md:order-1 gap-6 p-6">
      <input type="text" onChange={handleChanges} />
      {props.data.map((d) => (
        //if 
        <div className="flex items-center gap-4">
          <img src={d.artworkUrl} alt="" width="60px" />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold leading-2">{d.title}</h3>
            <div className="flex gap-3">
              <span className="flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {new Date(d.publicationDate).toLocaleDateString(
                  "fr-FR",
                  options,
                )}
              </span>
              <span className="flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {d.durationInSeconds} s
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const PodcastDetails = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-start bg-slate-100 order-1 md:order-2">
      <div className="flex items-center gap-4 p-10">
        <img
          src="https://dev-artworks.360.audion.fm/31661c58-c91b-4467-8b68-5611fcc2a7bd.jpg"
          width="145"
          alt=""
        />
        <div>
          <p className="text-2xl font-semibold">Ecorama</p>
          <p className="text-lg">Boursorama</p>
        </div>
      </div>
    </div>
  );
};
