"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Search,
  ShoppingCart,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";
import Logo from "@/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { useState } from "react";

function Header() {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleSearchBox = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowSearchBox((prev) => !prev);
  };
  

  return (
    <header className="shadow bg-white z-[99999]">
      <div className="header-top py-3 border-b-1 border-b-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="header-info-left flex items-center gap-3">
            <li>
              <a
                href=""
                className="text-sm text-gray-600 hover:text-black transition-all duration-300 ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray-600 hover:text-black transition-all duration-300 ease-in-out"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray-600 hover:text-black transition-all duration-300 ease-in-out"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-gray-600 hover:text-black transition-all duration-300 ease-in-out"
              >
                Careers
              </a>
            </li>
          </ul>
          <ul className="header-info-right flex justify-end items-center">
            <li className="mr-2">
              <a href="">
                <Facebook
                  size={16}
                  className="text-gray-600 hover:text-blue-300 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="mr-2">
              <a href="">
                <Instagram
                  size={16}
                  className="text-gray-600 hover:text-orange-600 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="mr-2">
              <a href="">
                <Twitter
                  size={16}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li className="mr-2">
              <a href="">
                <Linkedin
                  size={16}
                  className="text-gray-600 hover:text-blue-800 transition-all duration-300 ease-in-out"
                />
              </a>
            </li>
            <li>
              <a href="">
                <Youtube
                  size={16}
                  className="text-gray-600 hover:text-red-600 transition-all  duration-300 ease-in-out"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-mid">
        <div className="container mx-auto py-7 grid grid-cols-12 relative">
          <div className="logo col-span-2">
            <Link href="/" className="block w-40">
              <Image src={Logo} alt="logo" />
            </Link>
          </div>
          <nav className="menu col-span-8">
            <ul className="menu-main flex justify-center gap-4 py-1.5 relative">
              <li>
                <a href="" className="menu-item">
                  Content Text
                </a>
              </li>
              <li className="group">
                <a href="" className="menu-item">
                  Mega menu
                </a>
                <div className="z-10 grid grid-cols-4 gap-4 w-full absolute left-0 bg-black p-5 mt-20 opacity-0 invisible group-hover:mt-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in">
                  <ul className="mega-item">
                    <li>
                      <a href="" className="mega-sub-title">
                        Content Text Title
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                  </ul>
                  <ul className="mega-item">
                    <li>
                      <a href="" className="mega-sub-title">
                        Content Text Title
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                  </ul>
                  <ul className="mega-item">
                    <li>
                      <a href="" className="mega-sub-title">
                        Content Text Title
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                  </ul>
                  <ul className="mega-item">
                    <li>
                      <a href="" className="mega-sub-title">
                        Content Text Title
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                    <li>
                      <a href="" className="mega-sub-item">
                        Content Text
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group relative">
                <a href="" className="menu-item">
                  Dropdown menu
                </a>
                <ul className="menu-sub">
                  <li>
                    <a href="" className="menu-sub-item">
                      Content Text
                    </a>
                  </li>
                  <li>
                    <a href="" className="menu-sub-item">
                      Content Text
                    </a>
                  </li>
                  <li>
                    <a href="" className="menu-sub-item">
                      Content Text
                    </a>
                  </li>
                  <li>
                    <a href="" className="menu-sub-item">
                      Content Text
                    </a>
                  </li>
                  <li>
                    <a href="" className="menu-sub-item">
                      Content Text
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="" className="menu-item">
                  Content Text
                </a>
              </li>
              <li>
                <a href="" className="menu-item">
                  Content Text
                </a>
              </li>
            </ul>
          </nav>
          <ul className="col-span-2 menu-right flex justify-end items-center gap-4">
            <li>
              <a href="" onClick={toggleSearchBox}>
                <Search size={26} />
              </a>
            </li>
            <li>
              <a href="javascrip:;">
                <User size={26} />
              </a>
            </li>
            <li>
              <a href="javascrip:;" className="relative">
                <ShoppingCart size={26} />
                <Badge
                  variant="destructive"
                  className="absolute -top-4 -right-6"
                >
                  10
                </Badge>
              </a>
            </li>
          </ul>
          {showSearchBox && (
            <div className="bg-red-500 absolute top-full w-full py-3 px-4 z-10">
              <input
                className="outline-0 w-full text-white"
                type="text"
                placeholder="Search Here"
              />
              <button
                className="absolute top-0 right-0 bottom-0 py-2 px-3 text-white cursor-pointer"
                type="button"
                onClick={() => setShowSearchBox(false)}
              >
                <X />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
