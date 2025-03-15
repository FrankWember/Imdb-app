import Link from "next/link";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-4">
          <MenuItem title="home" address="/" />
          <MenuItem title="about" address="/about" />
        </div>
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 px-1 py-2 rounded-lg">
            IMdb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </>
  );
}
