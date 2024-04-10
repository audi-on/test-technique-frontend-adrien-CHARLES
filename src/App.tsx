import { useEffect, useState } from "react";
import { getShortData } from "./utils/utils";
import type { Episode } from "./models/episode";

export const App = () => {
  const [data, setData] = useState<Episode[]>([]);

  useEffect(() => {
    getShortData().then((response) => setData(response));
  }, []);

  return (
    <div className="flex">
      <div className="w-1/2">
        {data.map((d) => (
          <>
            <img src={d.artworkUrl} alt="" width="60" />
            <span>{d.title}</span>
            <span>{d.durationInSeconds} s</span>
          </>
        ))}
      </div>
      <div className="w-1/2 flex justify-center items-start bg-slate-100">
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
    </div>
  );
};
