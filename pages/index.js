import Layout from "../components/layout/Layout";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import Head from "../components/layout/Head";
import IndexCard from "../components/cards/IndexCard";
import Link from "next/link";

export default function Home(props) {
  let productFiltered = [];

  productFiltered = props.products.filter((product) => {
    if (product.featured) {
      return true;
    }
  });

  
  return (
    <Layout>
      <Head title="Homepage" />
      <section className="bg-hero px-0 mx-0 py-24 2xl:px-60">
        <div className=" flex flex-col md:flex-row justify-start items-center px-20 text-white">
          <div className="text-sm-left order-2 md:order-1 py-16 pr-10">
            <h1 className="mb-4 text-4xl sm:text-6xl font-black ">
              Only the best phones
            </h1>
            <p className="text-gray-400">
              Dont miss out on the best deals on the best phones on the market.
            </p>
            <button className="btn bg-primary hover:opacity-70 mt-10 btn-lg py-2 px-5">
              <Link className="hover:text-white" href="/products">
                Check out phones
              </Link>
            </button>
          </div>
          <div className="w-48 md:w-56 lg:w-60 lg:mx-auto order-1 md:order-2 mx-auto py-10 md:my-10">
            <img
              src={props.hero.hero_banner.url}
              className="transform rotate-12"
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center py-20 text-4xl font-bold">Featured</h2>
        <div className="mx-auto">
          <IndexCard products={productFiltered}></IndexCard>
        </div>
      </section>

      <section className="pb-20">
        <h2 className="text-center py-20 text-4xl font-bold">Why choose us</h2>
        <div className="flex flex-col md:flex-row row-cols-1 lg:row-cols-md-3 text-gray-500 justify-between lg:justify-around">
          <div className="py-10">
            <div className="text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current text-gray-800 w-20 mx-auto mb-5"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <div className="card-body text-center ">
                <p>Free shipping for orders over 500kr</p>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="fill-current text-gray-800 w-20 mx-auto mb-5"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z" />
                    <g>
                      <path d="M9.56,13.49h0.45c0.21,0,0.37-0.05,0.48-0.16s0.16-0.25,0.16-0.43c0-0.08-0.01-0.15-0.04-0.22s-0.06-0.12-0.11-0.17 s-0.11-0.09-0.18-0.11s-0.16-0.04-0.25-0.04c-0.08,0-0.15,0.01-0.22,0.03s-0.13,0.05-0.18,0.1s-0.09,0.09-0.12,0.15 s-0.05,0.13-0.05,0.2H8.65c0-0.18,0.04-0.34,0.11-0.48s0.17-0.27,0.3-0.37s0.27-0.18,0.44-0.23s0.35-0.08,0.54-0.08 c0.21,0,0.41,0.03,0.59,0.08s0.33,0.13,0.46,0.23s0.23,0.23,0.3,0.38s0.11,0.33,0.11,0.53c0,0.09-0.01,0.18-0.04,0.27 s-0.07,0.17-0.13,0.25s-0.12,0.15-0.2,0.22s-0.17,0.12-0.28,0.17c0.24,0.09,0.42,0.21,0.54,0.39s0.18,0.38,0.18,0.61 c0,0.2-0.04,0.38-0.12,0.53s-0.18,0.29-0.32,0.39s-0.29,0.19-0.48,0.24s-0.38,0.08-0.6,0.08c-0.18,0-0.36-0.02-0.53-0.07 s-0.33-0.12-0.46-0.23s-0.25-0.23-0.33-0.38s-0.12-0.34-0.12-0.55h0.85c0,0.08,0.02,0.15,0.05,0.22s0.07,0.12,0.13,0.17 s0.12,0.09,0.2,0.11s0.16,0.04,0.25,0.04c0.1,0,0.19-0.01,0.27-0.04s0.15-0.07,0.2-0.12s0.1-0.11,0.13-0.18s0.04-0.15,0.04-0.24 c0-0.11-0.02-0.21-0.05-0.29s-0.08-0.15-0.14-0.2s-0.13-0.09-0.22-0.11s-0.18-0.04-0.29-0.04H9.56V13.49z" />
                      <path d="M15.3,14.24c0,0.32-0.03,0.6-0.1,0.82s-0.17,0.42-0.29,0.57s-0.28,0.26-0.45,0.33s-0.37,0.1-0.59,0.1 s-0.41-0.03-0.59-0.1s-0.33-0.18-0.46-0.33s-0.23-0.34-0.3-0.57s-0.11-0.5-0.11-0.82V13.5c0-0.32,0.03-0.6,0.1-0.82 s0.17-0.42,0.29-0.57s0.28-0.26,0.45-0.33s0.37-0.1,0.59-0.1s0.41,0.03,0.59,0.1s0.33,0.18,0.46,0.33s0.23,0.34,0.3,0.57 s0.11,0.5,0.11,0.82V14.24z M14.45,13.38c0-0.19-0.01-0.35-0.04-0.48c-0.03-0.13-0.07-0.23-0.12-0.31s-0.11-0.14-0.19-0.17 s-0.16-0.05-0.25-0.05s-0.18,0.02-0.25,0.05s-0.14,0.09-0.19,0.17s-0.09,0.18-0.12,0.31s-0.04,0.29-0.04,0.48v0.97 c0,0.19,0.01,0.35,0.04,0.48s0.07,0.24,0.12,0.32s0.11,0.14,0.19,0.17s0.16,0.05,0.25,0.05s0.18-0.02,0.25-0.05 s0.14-0.09,0.19-0.17s0.09-0.19,0.11-0.32c0.03-0.13,0.04-0.29,0.04-0.48V13.38z" />
                    </g>
                  </g>
                </g>
              </svg>
              <div className="card-body">
                <p>30 day money-back guarantee</p>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current text-gray-800 w-20 mx-auto mb-5"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              <div className="card-body text-center">
                <p className="whychooseustext">
                  Delivery within 1-3 working days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-hero text-white py-20">
        <div className="text-center">
          <h3 className="pb-5 text-3xl font-bold">
            DONT MISS OUT ON OUR LATEST OFFERS
          </h3>
          <p>
            Sign up using your email to receive our latest offers. We promise
            you wont regret it
          </p>
          <div className="mt-10 ">
            <input
              type="text"
              name="emailsignup"
              className="text-black w-3/12"
            />
            <button className="bg-primary px-5 py-2 ml-3">Sign up</button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-center text-4xl font-bold pb-20">
          Customer feedback
        </h2>
        <div className="grid grid-cols-1 grid-cols-sm-1 md:grid-cols-3 pb-10 gap-10  md:gap-20">
          <div className="col-span-1">
            <p className="italic font-medium font-raleway">
              “I did an error when ordering but the customer support was
              brilliant and helped me resolve the issue. I will be purchasing
              from PHONEX again”
            </p>
            <div className="font-bold mt-5">- Anders</div>
          </div>

          <div className="col-span-1">
            <p className="italic font-medium font-raleway">
              “PHONEX shipped the phone the same day I ordered it. I received it
              only days after. I am very satisfied with the service given and
              will be buying from them again in the future”
            </p>
            <div className="font-bold mt-5">- Miriam</div>
          </div>

          <div className="flex flex-col col-span-1">
            <p className="italic font-medium font-raleway">
              “I was unsure what phone to buy so I contacted the customer
              support. The support was great and was quickly able to find what
              phone was best for my use. They did not sell me an overly
              expensive phone, that is the reason I will be using PHONEX next
              time I need a phone.”
            </p>
            <div className="font-bold mt-5">- Muhammad</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let products = [];
  let hero = [];

  try {
    await axios
      .all([axios.get(BASE_URL + "home"), axios.get(BASE_URL + "products")])
      .then(
        axios.spread((result1, result2) => {
          hero = result1.data;
          products = result2.data;
        })
      );
  } catch (error) {}

  return {
    props: {
      hero: hero,
      products: products,
    },
  };
}
