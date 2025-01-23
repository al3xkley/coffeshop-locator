import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
// import Link from "next/link";

const mockData = [
  {
    name: "Starbucks",
    imageUrl: "https://eurobuildcee.com/images/32236-large.jpg",
  },
  {
    name: "Cooperativ Cherniy",
    imageUrl:
      "https://avatars.mds.yandex.net/get-altay/8072647/2a00000188eb41f3372e5c3e97265d75894a/orig",
  },
  {
    name: "Coffe Dream",
    imageUrl: "https://www.planplus.rs/Image/Poi/184876",
  },
  {
    name: "Starbucks",
    imageUrl: "https://eurobuildcee.com/images/32236-large.jpg",
  },
  {
    name: "Cooperativ Cherniy",
    imageUrl:
      "https://avatars.mds.yandex.net/get-altay/8072647/2a00000188eb41f3372e5c3e97265d75894a/orig",
  },
  {
    name: "Coffe Dream",
    imageUrl: "https://www.planplus.rs/Image/Poi/184876",
  },
];
export default function Home() {
  const coffeStores = mockData;

  return (
    <div className="mb-56">
      <main className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20 mb-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            Belgrade Stores
          </h2>
          <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
            {coffeStores.map((coffeStore, idx) => (
              <Card
                key={`${coffeStore.name}-${idx}`}
                name={coffeStore.name}
                imageUrl={coffeStore.imageUrl}
                href={`/coffee-store/${idx}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
