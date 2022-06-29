import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Link from "next/link";
export default function SelectPhones({ products }) {
  const [selected, setSelected] = useState(products[0]);
  console.log(products);
  return (
    <div className="w-72">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-backgroundWhite border border-gray-300  shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 sm:text-sm">
            <span className="block truncate">
              {selected.brand + " " + selected.model}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-backgroundWhite border border-gray-300  shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {products.map((phone, phoneIdx) => (
                <Listbox.Option
                  key={phoneIdx}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-amber-900 hover:bg-secondary"
                        : "text-gray-900"
                    }
                            cursor-pointer select-none relative py-2 pl-10 pr-4`
                  }
                  value={phone}
                >
                  {({ selected, active }) => (
                    <>

                      <Link
                        href={{
                          pathname: "/admin/edit/[brand]/[slug]",
                          query: { brand: phone.brand, slug: phone.slug },
                        }}
                      >
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {phone.brand + " " + phone.model}
                        </span>
                      </Link>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                                  absolute inset-y-0 left-0 flex items-center pl-3`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
