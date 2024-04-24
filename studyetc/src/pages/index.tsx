import Image from "next/image";
import { Inter } from "next/font/google";
import { TextAnimationComponent } from "./TextAnimationComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-100vh h-100vh bg-black">
      <TextAnimationComponent />
    </div>
  );
}
