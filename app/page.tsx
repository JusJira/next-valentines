import { URLForm } from "@/components/formData";
import HeartAnimation from "@/components/heartAnimation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata>  {
  return {
    metadataBase: new URL(process.env.WEBSITE_URL as string),
    alternates: {
      canonical: "/",
    },
    title: "Roses - Send a rose to your loved ones",
    description: "Send a lovely rose to your loved ones for free.",
    openGraph: {
      images: [process.env.WEBSITE_URL + "/og"],
      url: process.env.WEBSITE_URL,
    },
  };
}

export default function Home() {
  return (
    <>
      <div className="relative z-[1000]">
        <div className="z-[100]">
          <URLForm />
        </div>
      </div>
      <HeartAnimation />
    </>
  );
}
