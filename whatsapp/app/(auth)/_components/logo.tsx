import { Banana, Image } from "lucide-react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className=" bg-white rounded-full p-1">
        <Banana className="rounded-xl w-28 h-28 text-white bg-gradient-to-r from-indigo-500 to-pink-500 p-3" />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold text-green-700">
          Tutorial Massanger
        </p>
      </div>
    </div>
  );
};
