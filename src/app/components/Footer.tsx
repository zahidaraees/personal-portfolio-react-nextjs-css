import Link from "next/link";

// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="text-gray-900 px-14 sm:px-6 pt-12 pb-5 width:1000 font-[sans-serif]">
      <hr />
      <br />
      <br />

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Portfolio Section */}
        <div className="space-y-3">
          <h6 className="text-sm text-black font-medium">Portfolio</h6>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          <h6 className="text-sm text-gray-800 font-medium">Links</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-[13px] text-black hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-[13px] text-black hover:text-blue-800">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[13px] text-black hover:text-blue-800">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[13px] text-black hover:text-blue-800">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Literary Work Section */}
        <div className="space-y-3">
          <h6 className="text-sm text-gray-400 font-medium">Literary Work</h6>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="text-[13px] text-black hover:text-blue-800">
                Speeches
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[13px] text-black hover:text-blue-800">
                Seminars
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[13px] text-black hover:text-blue-800">
                Awards
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="flex px-44 text-sm text-center">&copy; 2024 Portfolio. All rights reserved.</p>
    </footer>
  );
}
