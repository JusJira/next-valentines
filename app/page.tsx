import { URLForm } from "@/components/formData";
import HeartAnimation from "@/components/heartAnimation";
import Image from "next/image";

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
