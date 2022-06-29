import Link from "next/link";
import { useRouter } from "next/router";
import CartContext from "../../context/CartContext"
import { Fragment, useState, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Modals from "../feedback/Modals";

const navigation = ["Home", "Shop", "Cart"];
const profile = ["Admin pages", "Sign out"];

// Based on this https://tailwindui.com/preview#component-10058606cac5398d7fa2c73b64089874

function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [cart,] = useContext(CartContext);

  function closeModal() {
    setIsOpen(false);
  }
  
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
    <Disclosure as="nav" className="bg-backgroundWhite">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between h-20">
            <div className="-mr-2 flex md:hidden">
              <Disclosure.Button className="bg-backgroundWhite inline-flex items-center justify-center py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white">
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="font-archivo text-3xl absolute transform -translate-x-1/2 left-1/2 font-bold">
              <a>
                PHONE<span className="text-primary font-black">X</span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  {navigation.map((item, itemIdx) =>
                    itemIdx === 0 ? (
                      <a
                        key={item}
                        className={
                          router.pathname === "/"
                            ? "font-bold bg-backgroundWhite text-black pr-3 py-2"
                            : " bg-backgroundWhite text-black pr-3 py-2"
                        }
                      >
                        <Link href="/">{item}</Link>
                      </a>
                    ) : (
                      <a
                        key={item}
                        className={
                          (router.pathname === "/products" &&
                            item === "Shop") ||
                          (router.pathname === "/cart" && item === "Cart")
                            ? "font-bold bg-backgroundWhite text-black px-3 py-2"
                            : " bg-backgroundWhite text-black px-3 py-2"
                        }
                      >
                        <Link
                          href={
                            item === "Shop"
                              ? "/products"
                              : "" || item === "Cart"
                              ? "/cart"
                              : ""
                          }
                        >
                          {item}
                        </Link>
                      </a>
                    )
                  )}
                </div>
              </div>
              <div></div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="max-w-xs bg-backgroundWhite flex items-center focus:outline-none focus:ring-2 text-black focus:ring-offset-2 focus:ring-offset-white focus:ring-white">
                          <span
                            className={
                              router.pathname.startsWith("/admin")
                                ? "font-bold bg-backgroundWhite text-black pr-3"
                                : " bg-backgroundWhite text-black pr-3"
                            }
                          >
                            admin@admin.com
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 20 20"
                            fill="text-black"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          {profile.map((item) => (
                            <Menu.Item key={item}>
                              {({ }) => (
                                <a
                                  className={
                                    router.pathname.startsWith("/admin") &&
                                    item === "Admin pages"
                                      ? "font-bold bg-backgroundWhite block px-4 py-2 z-20 text-sm text-black hover:bg-secondary"
                                      : " bg-backgroundWhite block px-4 py-2 text-sm z-20 text-black hover:bg-secondary"
                                  }
                                  onClick={() => {
                                    item === "Sign out" ? 
                                    openModal() : ""
                                  }}
                                >
                                  <Link
                                    href={
                                      item === "Admin pages" ? "/admin" : ""
                                    }
                                  >
                                      {item === "Admin pages" ? "Admin pages" : " Sign Out"}
                                  </Link>
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
                <div className="relative mr-3">
                  <Link href="/cart">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 ml-3"
                        viewBox="0 0 20 20"
                        fill="font-black"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <span className="absolute -top-3 -right-2 flex items-center justify-center rounded-full h-6 w-6 bg-primary text-white font-xs">
                      
                          
                          {cart.length}
                          

                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden relative mr-3">
              <Link href="/cart">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 ml-3"
                    viewBox="0 0 20 20"
                    fill="font-black"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="absolute -top-3 -right-2 flex items-center justify-center rounded-full h-6 w-6 bg-primary text-white font-xs">
                          
                        
                  {cart.length}


                  </span>
                </a>
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item, itemIdx) =>
                itemIdx === 0 ? (
                  <a
                    key={item}
                    className={
                      router.pathname === "/"
                        ? "font-bold bg-backgroundWhite text-black px-3 py-2 block hover:bg-secondary"
                        : " bg-backgroundWhite text-black px-3 py-2 block hover:bg-secondary"
                    }
                  >
                    <Link href="/">{item}</Link>
                  </a>
                ) : (
                  <a
                    key={item}
                    className={
                      (router.pathname === "/products" && item === "Shop") ||
                      (router.pathname === "/cart" && item === "Cart")
                        ? "font-bold bg-backgroundWhite text-black px-3 py-2 block hover:bg-secondary"
                        : " bg-backgroundWhite text-black px-3 py-2 block hover:bg-secondary"
                    }
                  >
                    <Link
                      href={
                        item === "Shop"
                          ? "/products"
                          : "" || item === "Cart"
                          ? "/cart"
                          : ""
                      }
                    >
                      {item}
                    </Link>
                  </a>
                )
              )}
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <div
                    className={
                      router.pathname.startsWith("/admin")
                        ? "font-bold bg-backgroundWhite text-sm leading-none text-black"
                        : " bg-backgroundWhite  text-sm font-medium leading-none text-black"
                    }
                  >
                    admin@admin.com
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {profile.map((item) => (
                  <a
                    key={item}
                    className={
                      router.pathname.startsWith("/admin") &&
                      item === "Admin pages"
                        ? "font-bold bg-backgroundWhite text-black px-3 py-2 block hover:bg-secondary"
                        : " bg-backgroundWhite text-black px-3 py-2 block hover:bg-secondary"
                    }
                    onClick={() => {
                      item === "Sign out" ? 
                      openModal() : ""
                    }}
                  >
                    <Link
                      href={item === "Admin pages" ? "/admin" : ""}
                      className="block px-3 py-2 text-black hover:bg-secondary"
                    >
                      {item}
                    </Link>
                  </a>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
    {isOpen ? (
      <Modals isOpen={isOpen} closeModal={closeModal}></Modals>
  ) : null
  }
  </>
  );
}

export default Navigation;


