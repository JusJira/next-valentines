import { URLForm } from "@/components/formData";
import HeartAnimation from "@/components/heartAnimation";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center relative">
      <HeartAnimation/>
      <div className="z-[100]">
      <URLForm />
      </div>
    </main>
  );
}
