import Layout from "../../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import { useContext, useState } from "react";
import Head from "../../components/layout/Head";
import AuthContext from "../../context/AuthContext";
import SelectPhone from "../../components/forms/SelectPhone";
import Link from "next/link";

export default function Admin({ products }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [trueVar, setTrueVar] = useState(true);
  console.log(auth);
  return (
    <Layout>
      <Head title="Admin pages" />
      <h1 className="text-center text-4xl font-bold my-20">Admin</h1>
      {trueVar ? (
        <div className="flex flex-col place-items-center gap-10 mb-20">
          <Link href="/admin/add">
            <button className="bg-primary text-white py-2 px-5">Add new phone</button>
          </Link>
          <h2 className="text-3xl">Edit phones</h2>
          

          <SelectPhone products={products}></SelectPhone>
        </div>
      ) : (
        <h1 className="text-center text-4xl font-bold py-20">
          Please login to access admin pages
        </h1>
      )}
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
