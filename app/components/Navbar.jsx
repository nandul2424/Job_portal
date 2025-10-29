"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession(); // ✅ Access user session

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">

      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-work-sans space-x-3">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/publisher_8552681.png" alt="logo" width={144} height={30} />
        </Link>

        {/* Right: Links */}
        <div className="flex items-center space-x-6 text-gray-800 font-medium">
          {session?.user ? (
            <>
              <Link href="/startup/create" className="hover:text-blue-600">
                Create New
              </Link>

              <button
                onClick={() => signOut()}
                className="hover:text-red-600 transition-colors"
              >
                Log out
              </button>

              <Link
                href={`/user/${session.user.id || ""}`}
                className="hover:text-blue-600"
              >
                {session.user.name}
              </Link>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="hover:text-blue-600 transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
