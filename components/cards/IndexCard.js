import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import Toasts from "../feedback/Toasts";
import Link from "next/link";

function IndexCard({ products }) {
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
    <div className="grid grid-flow-row  grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="bg-secondary hover:shadow-lg mx-auto sm:mx-0 xs:col-span-1 sm:col-span-1 lg:col-span-1"
            style={{ maxWidth: "400px" }}
          >
            <div
              className="text-center py-5 px-10 w-full"
              style={{ minWidth: "200px" }}
            >
              <Link href={`products/${product.brand}/${product.slug}`}>
                <a>
                  <p className="p-0 m-0 brand-id-${product.id}">
                    {product.brand}
                  </p>
                  <p className="font-bold text-xl model-id-${product.id}">
                    {product.model}
                  </p>

                  <img
                    src={product.image?.formats?.thumbnail.url}
                    className="mx-auto py-5"
                    alt={product.brand + " " + product.model}
                    title={product.brand + " " + product.model}
                  />
                  <p className="font-bold my-5">{product.price},-</p>
                  <p className="text-justify my-5 hidden md:line-clamp-6">
                    {product.description}
                  </p>
                </a>
              </Link>
              <button
                className="btn bg-primary text-white shadow-none  mt-5 py-2 px-5"
                onClick={() => {
                  addToCart(product);
                  setFireToast(true);
                  setTimeout(() => {
                    setFireToast(false);
                  }, 100);
                  setText(
                    "You added " +
                      product.brand +
                      " " +
                      product.model +
                      " to the cart"
                  );
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
      <Toasts fireToast={fireToast} text={text}></Toasts>
    </div>
  );
}

export default IndexCard;
