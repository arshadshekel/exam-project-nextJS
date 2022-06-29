import Layout from "../../../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import { useContext, useState } from "react";
import Head from "../../../components/layout/Head";
import AuthContext from "../../../context/AuthContext";
import DropArea from "../../../components/forms/DropArea"

export default function Admin({ products }) {
  const [auth, setAuth] = useContext(AuthContext);

  console.log(auth);
  return (
    <Layout className="">
    <Head title={"Add new product"} />
    <>
      <div className="mt-10 sm:mt-0 w-12/12  lg:w-6/12 mx-auto">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="overflow-hidden sm:">
              <div className="px-4 py-5 bg-backgroundWhite sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="brand"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="mt-1 focus:ring-indigo-500 focus:border-primaryblock w-full bg-backgroundWhite  shadow-sm sm:text-sm border-gray-300 "
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="modele"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Model
                    </label>
                    <input
                      type="text"
                      name="model"
                      id="model"
                   
                      className="mt-1 focus:ring-indigo-500 focus:border-primaryblock bg-backgroundWhite  w-full shadow-sm sm:text-sm border-gray-300 "
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                    
                      className="mt-1 focus:ring-indigo-500 focus:border-primaryblock w-full shadow-sm sm:text-sm bg-backgroundWhite border-gray-300 "
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2 flex flex-row items-center pt-5">
                   
                      <input
                        id="checked"
                        name="checked"
                      type="checkbox"
                      
                        className="text-primary focus:ring-0 bg-backgroundWhite border-gray-300 "
                      />
                   
                    
                      <label
                        htmlFor="checked"
                        className="font-medium ml-3 text-gray-700"
                      >
                        Featured
                      </label>
                   
                  </div>
                </div>
              </div>

              <div className="px-6">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="mt-1 focus:ring-indigo-500 focus:border-primaryblock w-full shadow-sm sm:text-sm border-gray-300 ">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <textarea
                        rows="6"
                        name="description"
                        id="description"
                      
                        className="mt-1 focus:ring-indigo-500 focus:border-primaryblock w-full shadow-sm sm:text-sm bg-backgroundWhite border-gray-300 "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <DropArea image={null} />
              <div className="my-10">

              <span className="px-4 py-3 m-5y bg-gray-50 text-left sm:px-6">
                <button
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-primary"
                >
                  Update
                </button>
              </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  </Layout>
  );
}

export async function getStaticProps() {
  const url = `${BASE_URL}products`;

  let results = [];

  try {
    const response = await axios.get(url);
    // the value we want is on response.data here, not response.data.data
    results = response.data;
  } catch (error) {
    console.log(error);
  }

  // we are sending a prop called game in to the Game component up above
  return {
    props: { products: results },
  };
}
