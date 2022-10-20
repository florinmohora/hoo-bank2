import styles from "../style";
import Button from "./Button";
import GetStarted from "./GetStarted";

const CTA = () => (
  <section className="" id="price">
    <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-black-gradient-2 rounded-lg   shadow  xl:p-8 ">
          <h3 className="mb-4 font-poppins font-semibold text-[33px] leading-[32px] text-white">
            1 <span className="text-gradient font-black">Premium</span> Month
          </h3>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-white sm:text-lg">
            For the members that want to take it to the next step
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$150</span>
            <span className="text-white">/month</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Unlimited predictions
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Personalized Bankroll Management
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Access to group chat
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Premium support: <span className="font-semibold">24/7</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Safe & Risky Predictions
              </span>
            </li>
          </ul>
          <Button />{" "}
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-black-gradient-2 rounded-lg  border border-sky-400 shadow-sky-400 shadow-2xl  xl:p-8  text-white">
          <h3 class="mb-4 font-poppins font-semibold text-[33px] leading-[32px] text-white">
            1 Week
          </h3>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-white sm:text-lg text-white">
            Free one time trial for new members
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$0</span>
            <span className="text-white" text-white>
              /week
            </span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Unlimited predictions
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Percentage Based Bankroll Management
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Access to group chat
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Premium support: <span className="font-semibold">24/7</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Safe Predictions
              </span>
            </li>
          </ul>
          <Button link="https://google.com" />{" "}
        </div>
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-black-gradient-2 rounded-lg   shadow  xl:p-8  text-white">
          <h3 class="mb-4 font-poppins font-semibold text-[33px] leading-[32px] text-white">
            1 Month
          </h3>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-white sm:text-lg text-white">
            Best for beginner or amateur betters.
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$50</span>
            <span className="text-white">/month</span>
          </div>
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Unlimited predictions
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Percentage Based Bankroll Management
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Access to group chat
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Premium support: <span className="font-semibold">24/7</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-cyan-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                Safe Predictions
              </span>
            </li>
          </ul>
          <Button />{" "}
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
