import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Head from "../components/layout/Head";
import CartCards from "../components/cards/CartCards";
import CartContext from "../context/CartContext";
import { useContext, useState } from "react";

export default function Cart(props) {
  const [cart, setCart] = useContext(CartContext);
  return (
    <Layout>
      <Head title="CART" />
      <section className="mb-10">
        <h1 className="text-center text-4xl font-bold py-10">Your cart</h1>
      </section>

      <CartCards products={props.products}></CartCards>
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
