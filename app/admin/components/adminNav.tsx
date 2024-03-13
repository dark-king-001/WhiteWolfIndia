import React from "react";
import Link from "next/link";

const AdminNav = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <nav>
        <Link href="/admin/dashboard">
          <h1 className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
            Dashboard
          </h1>
        </Link>
        <Link href="/admin/blogs">
          <h1 className="block px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
            Blogs
          </h1>
        </Link>
      </nav>
    </div>
  );
};

export default AdminNav;
