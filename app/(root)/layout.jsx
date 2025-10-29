import Providers from "./providers";
import Navbar from "../components/Navbar";
import Link from "next/link";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-100 text-black font-work-sans min-h-screen">
        <Providers>
          {/* Fixed Navbar */}
          <Navbar />

          {/* Main content */}
          <main className="pt-28 px-8 max-w-7xl mx-auto">{children}</main>
        </Providers>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">&copy; 2025 Job Portal. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-primary transition">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition">
                Contact
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary transition">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
