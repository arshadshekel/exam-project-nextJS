import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Head from "../../../components/layout/Head";
import Layout from "../../../components/layout/Layout";
import { BASE_URL } from "../../../constants/api";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useContext, useState } from "react";
import CartContext from "../../../context/CartContext";
import Toasts from "../../../components/feedback/Toasts"

export default function Product({ product }) {
  const [cart, setCart] = useContext(CartContext);
  const [text, setText] = useState("");
  const [fireToast, setFireToast] = useState(false);

  const addToCart = (product) => {
    const phone = { id: product.id, price: product.price };
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart((currentState) => 
        currentState.map((item) =>
          item.id === product.id ? { ...exists, amount: exists.amount + 1 } : item
        )
      );
    } else {
      setCart((currentState) => [...currentState, { ...phone, amount: 1 }]);
    }
    console.log(cart)
  };

  return (
    <Layout className="">
      <Head title={product.model} />
      <div className="container mx-auto text-center">
        <Breadcrumbs
          aria-label="breadcrumb"
          className="flex flex-row justify-center"
        >
          <Link color="inherit" href={"/products"}>
            Shop
          </Link>
          <Link className="font-black" href={`/products/${product.brand}`}>
            {product.brand}
          </Link>
          <span className="font-bold text-xl">{product.model}</span>
        </Breadcrumbs>
        <h3 className="p-0 x-0 text-2xl mt-10">{product.brand}</h3>
        <h1 className="text-4xl font-black mb-10 mt-3">{product.model}</h1>
        <div className="flex flex-col lg:flex-row justify-center gap-24 lg:gap-32">
          <div>
          <img
          src={product.image.url}
              width={150}
              height={200}
              className="mx-auto lg:mx-0 mt-24 lg:mt-0"
          alt={product.model}
          ></img>
          </div>
        
          <p className="text-justify max-w-prose font-raleway mx-auto lg:mx-0">
          {product.description}
        </p>
        </div>
      
        

        <p className="mt-10">
          Price:
          <span className="price  font-bold ml-3">{product.price},-</span>
        </p>
        <button
          className="bg-primary my-5 mb-16 px-5 py-2 text-white"
          onClick={() => {
            addToCart(product);
            setFireToast(true);
            setTimeout(() => {
              setFireToast(false)
            }, 100);
            setText("You added " + product.brand +" "+ product.model +" to the cart")
          }}
        >
          Add to cart
        </button>
      </div>
      <Toasts fireToast={fireToast} text={text}></Toasts>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(BASE_URL + "products");

    const product = response.data;

    const paths = product.map((product) => ({
      params: { slug: product.slug, brand: product.brand },
    }));
    return { paths, fallback: false };
  } catch (error) {}
}

export async function getStaticProps({ params }) {
  const url = `${BASE_URL}products?slug=${params.slug}`;

  let singleResult = null;

  try {
    const response = await axios.get(url);
    // the value we want is on response.data here, not response.data.data
    singleResult = response.data[0];
  } catch (error) {
    console.log(error);
  }

  // we are sending a prop called game in to the Game component up above
  return {
    props: { product: singleResult },
  };
}
