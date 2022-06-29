import axios from "axios";
import Head from "../../../components/layout/Head";
import Layout from "../../../components/layout/Layout";
import { BASE_URL } from "../../../constants/api";
import ProductCard from "../../../components/cards/ProductCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Products({ products }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");

  let productFiltered = [];

  if (checked) {
    productFiltered = products.filter((product) => {
      if (product.featured) {
        return true;
      }
    });
  } else {
    productFiltered = products;
  }
  let searchResults = productFiltered.filter((product) => {
    if (
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.model.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    } else {
      searchResults = productFiltered;
    }
  });
  return (
    <Layout className="">
      <Head title={products[0].brand + " phones"} />
      {console.log(router.pathname)}
      <h1 className="text-center text-4xl font-bold py-20">Phones</h1>
      <div className="flex justify-center mb-20">
        <input
          type="text"
          className="h-10 pr-8 pl-5 w-12/12 lg:w-6/12  focus:shadow focus:outline-none border-gray-300 bg-backgroundWhite"
          placeholder="Search for a phone..."
          onKeyUp={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="container sm:mx-auto flex flex-col xs:flex-row xs:justify-between my-20">
        <div className="flex flex-row xs:flex-col w-12/12 xs:w-6/12 lg:w-3/12 mb-10 ">
          <div className="w-6/12">
            <p className="font-bold">Phones by brand</p>
            <div className="flex flex-col mt-5">
              <Link href="/products/Apple">
                <a
                  className={
                    router.asPath === "/products/Apple"
                      ? "my-2 cursor-pointer mt-5 mb-2 font-bold"
                      : "my-2 mt-5 mb-2 cursor-pointer"
                  }
                >
                  Apple
                </a>
              </Link>
              <Link href="/products/Samsung">
                <a
                  className={
                    router.asPath === "/products/Samsung"
                      ? "my-2 cursor-pointer font-bold"
                      : "my-2 cursor-pointer"
                  }
                >
                  Samsung
                </a>
              </Link>
              <Link href="/products/Xiaomi">
                <a
                  className={
                    router.asPath === "/products/Xiaomi"
                      ? "my-2 cursor-pointer font-bold"
                      : "my-2 cursor-pointer"
                  }
                >
                  Xiaomi
                </a>
              </Link>
              <Link href="/products/Sony">
                <a
                  className={
                    router.asPath === "/products/Sony"
                      ? "my-2 cursor-pointer font-bold"
                      : "my-2 cursor-pointer"
                  }
                >
                  Sony
                </a>
              </Link>
              <Link href="/products/Nokia">
                <a
                  className={
                    router.asPath === "/products/Nokia"
                      ? "my-2 cursor-pointer font-bold"
                      : "my-2 cursor-pointer"
                  }
                >
                  Nokia
                </a>
              </Link>
              <Link href="/products">
                <a className="my-2 cursor-pointer">All</a>
              </Link>
            </div>
          </div>
          <div className="w-6/12 xs:mx-0 xs:mt-10">
            <p className="font-bold">Sort by price</p>

            <div className="flex flex-col mt-5">
              <Link href="/products/asc">
                <a
                  className={
                    router.pathname === "/products/asc"
                      ? "my-2 cursor-pointer font-bold"
                      : "my-2 cursor-pointer"
                  }
                >
                  Ascending
                </a>
              </Link>
              <Link href="/products/desc">
                <a
                  className={
                    router.pathname === "/products/desc"
                      ? "my-2 cursor-pointer font-bold"
                      : "my-2 cursor-pointer"
                  }
                >
                  Descending
                </a>
              </Link>
            </div>

            <div className="mt-6">
              <div className="custom-control custom-checkbox d-none mt-5 admin-btns">
                <input
                  type="checkbox"
                  className="appearance-none checked:bg-primary checked:border-transparent  focus:outline-none focus:ring-2 focus:ring-transparent cursor-pointer mr-4"
                  id="featured"
                  onClick={() => setChecked(!checked)}
                />
                <label
                  className="font-bold text-sm"
                  htmlFor="featured"
                  className="cursor-pointer"
                >
                  Featured
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProductCard products={searchResults} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + "products");

    const product = response.data;

    const paths = product.map((products) => ({
      params: { brand: products.brand },
    }));
    return { paths, fallback: false };
  } catch (error) {}
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}products?brand_eq=${params.brand}`;

  let singleResult = [];

  try {
    const response = await axios.get(url);
    // the value we want is on response.data here, not response.data.data
    singleResult = response.data;
  } catch (error) {
    console.log(error);
  }

  // we are sending a prop called game in to the Game component up above
  return {
    props: { products: singleResult },
  };
}
