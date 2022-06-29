import { Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useTimeoutFn } from "react-use";

export default function Toasts({fireToast, text}) {
  let [isShowing, setIsShowing]  = useState(true);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(false), 1500);
  const [newText, setNewText] = useState(null);
  let [hidden, setHidden] = useState("hidden");

  useEffect(() => {
    setIsShowing(true);
    resetIsShowing();
    setNewText(text);
    setTimeout(() => {
      setHidden("")
    }, 2200)
  }, [fireToast])

  
  return (
    <>
      <div className="fixed bottom-10 transform -translate-x-1/2 left-1/2 ">
        <div className="w-auto h-auto">
          <Transition
            as={Fragment}
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="bottom-0"
            enterTo="bottom-100"
            leave="transform duration-200"
            leaveFrom="bottom-100 "
            leaveTo="bottom-0 "
          >
                      <div className={hidden + "bg-green-500 w-full h-full text-white px-5 py-5"}>
                          {newText}
                       </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
