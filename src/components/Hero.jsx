import styles from "../style";
import { discount, robot, pula } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          data-aos="zoom-in-down"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-gradient font-bold`}>
            1 Week Free Trial Special
          </p>
        </div>

        <div
          className="flex flex-row justify-between items-center w-full"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1
          className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
          data-aos="fade-in"
          data-aos-duration="900"
        >
          Betting Service.
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5`}
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          Our expert tipster uses a methodology to identify the winning matches
          consistently in 70% of parley bets and over 85% in the case of single
          matches.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={pula}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          data-aos="zoom-in"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
