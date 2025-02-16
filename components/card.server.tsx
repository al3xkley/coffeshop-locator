import Image from "next/image";
import Link from "next/link";

type CardType = {
  name: string;
  imageUrl: string;
  href: string;
};

export default function Card({ name, imageUrl, href }: CardType) {
  return (
    <div>
      <Link
        href={href}
        className="m-auto rounded-xl border-gray-400 shadow-2xl"
      >
        <div
          className={`glass min-h-[200px] rounded-xl px-5 pb-5 pt-1 backdrop-blur-3xl`}
        >
          <div className="my-3 ">
            <h2 className="w-64 text-ellipsis whirespace-nowrap text-xl font-bold">
              {name}
            </h2>
          </div>
          <div className="">
            <Image
              className="max-h-[200px] min-h-[200px] rounded-lg shadow-lg"
              src={imageUrl}
              width={260}
              height={160}
              alt={name}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0X7GtHgAE6QIeE99NpgAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
