"use server";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import rose from "@/public/rose.png";
import Image from "next/image";
import HeartAnimation from "@/components/heartAnimation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const info = await db.query.gift.findFirst({
    where: (gift, { eq }) => eq(gift.id, params.slug),
  });
  return {
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      },
    title: "Gift for " + (info?.to || "you"),
    openGraph: {
      images: [process.env.WEBSITE_URL + "/og?title=" + info?.to],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const info = await db.query.gift.findFirst({
    where: (gift, { eq }) => eq(gift.id, params.slug),
  });

  if (!info) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full p-8">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-merienda font-bold text-2xl text-[#47126b]">
              From
            </h1>
            <h2 className="font-merienda text-xl">{info.from}</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-merienda font-bold text-2xl text-[#47126b]">
              To
            </h1>
            <h2 className="font-merienda text-xl">{info.to}</h2>
          </div>
        </div>
        <Image
          src={rose}
          alt="Rose Image"
          height={600}
          className="animate-in zoom-in duration-1000"
        />
        <span className="font-merienda font-semibold">
          Message from {info.from}
        </span>
        <p>{info.msg}</p>
      </div>
      <HeartAnimation />
    </>
  );
}
