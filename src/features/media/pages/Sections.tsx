import SearchBar from "../../mananger/components/ui/SearchBar";
import type { Area } from "../../mananger/models/Area.model";
import SectionItem from "../components/ui/SectionRow";

function Sections() {
  const areas: Area[] = [
    {
      _id: 1,
      name: "Mailula",
      sections: [
        {
          _id: 1,
          name: "Section 1",
          image_url: ["./mask.png", "./mask.png", "./mask.png"],
        },
        { _id: 2, name: "Section 2", image_url: ["./mask.png"] },
      ],
    },
    {
      _id: 2,
      name: "Mabopane",
      sections: [
        {
          _id: 1,
          name: "Section 1",
          image_url: ["./mask.png", "./mask.png"],
        },
      ],
    },
    {
      _id: 3,
      name: "Soshanguve",
      sections: [
        {
          _id: 1,
          name: "Section 1",
          image_url: ["./mask.png", "./mask.png", "./mask.png"],
        },
        {
          _id: 2,
          name: "Section 2",
          image_url: ["./mask.png", "./mask.png"],
        },
        { _id: 2, name: "Section 2", image_url: ["./mask.png"] },
      ],
    },
    {
      _id: 4,
      name: "Garankuwa",
      sections: [
        {
          _id: 1,
          name: "Section 1",
          image_url: ["./mask.png", "./mask.png"],
        },
        {
          _id: 2,
          name: "Section 2",
          image_url: ["./mask.png", "./mask.png"],
        },
      ],
    },
    {
      _id: 5,
      name: "Pretoria",
      sections: [
        {
          _id: 1,
          name: "Section 1",
          image_url: ["./mask.png", "./mask.png"],
        },
        { _id: 2, name: "Section 2", image_url: ["./mask.png"] },
        {
          _id: 2,
          name: "Section 2",
          image_url: ["./mask.png", "./mask.png"],
        },
        { _id: 2, name: "Section 2", image_url: ["./mask.png"] },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold mt-5">Your Sections</h1>

        <span className="text-neutral-500/70 text-sm">
          Stay updated with news that concerns you
        </span>
      </div>

      {/* Search */}

      <SearchBar placeholder="Search for an area" />

      {/* Sections List */}

      <div className="flex flex-col gap-4 mt-4">
        {areas.map((area, index) => (
          <SectionItem
            key={area._id}
            section={area}
            index={index}
            onclick={() => console.log("Selected:", area)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sections;
