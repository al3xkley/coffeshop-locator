import React from "react";
import Link from "next/link";

export default function Page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  console.log("id", id);
  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4 ">
        <div className="mk-2 mt-4 text-lg font-bold">
          <Link href="/"> Back To Home</Link>
        </div>
      </div>
    </div>
  );
}
