import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
/*     <AuthProvider> */
      <CartProvider>
        <Component {...pageProps} />{" "}
      </CartProvider>
/*     </AuthProvider> */
  );
}

export default MyApp;
