import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import Link from "next/link";

function CartCards({ products }) {
  const [cart, setCart] = useContext(CartContext);
  const [cartList, setCartList] = useState([]);
  const productList = products;

  useEffect(() => {
    const productFiltered = [];
    productList.forEach((product) => {
      cart.forEach((item) => {
        if (product.id === item.id) {
          productFiltered.push({ ...product, amount: item.amount });
        }
      });
      setCartList(productFiltered);
      
    });
  }, [productList, cart]);

  const removeFromCart = (productID) => {
    const newCart = cartList.filter((item) => !(item.id === productID));
    setCart(newCart);
  };

  console.log(cartList);
  return (
    <>
      {cartList.map((product) => {
        return (
          <div key={product.id} className=" mb-10 mx-auto">
            <div className="flex flex-col  md:flex-row md:justify-between  px-10 py-10 gap-16 md:gap-20 lg:gap-20 bg-secondary hover:shadow-lg xl:mx-48 2xl:mx-80">
              <div className="mx-auto md:mx-0">
                <img
                  src={product.image?.url}
                  width={150}
                  height={200}
                  alt={product.brand + " " + product.model}
                  title={product.brand + " " + product.model}
                />
              </div>

              <div className="w-4/12">
                <Link href={`/products/${product.brand}/${product.slug}`}>
                  <a className="flex flex-col gap-10">
                    <p className="p-0 m-0 brand-id-${product.id}">
                      {product.brand}
                    </p>
                    <p className="font-bold text-xl model-id-${product.id}">
                      {product.model}
                    </p>
                  </a>
                </Link>
              </div>

              <div className="flex flex-col gap-8">
                <span className="">Amount</span>
                <input
                  type="text"
                  className="w-3/12 md:w-6/12 h-10 pr-4 pl-4
                   focus:shadow focus:outline-none border-gray-300 bg-backgroundWhite"
                  defaultValue={product.amount}
                  onKeyUp={(event) => {
                    const exists = cartList.find((item) => item.id === product.id);
                    if (exists) {
                      setCart((currentState) =>
                        currentState.map((item) =>
                          item.id === product.id
                            ? { ...exists, amount: parseInt(event.target.value) > 0 ? parseInt(event.target.value ) : 0 }
                            : item
                        )
                      );
                    }
                  }}
                ></input>
              </div>

              <div className="flex flex-col gap-10">
                <span>Price</span>
                <span className="font-bold">
                  {Number.isInteger(product.amount) ? product.amount * parseInt(product.price) : "Enter amount"
                  }
                </span>
                <button
                  className="bg-red-500 text-white py-2 px-5 mx-auto"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default CartCards;
