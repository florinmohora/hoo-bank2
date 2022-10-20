import styles from "../style";
import { logo } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col items-center mr-10">
        <img
          src={logo}
          alt="Arch.bet"
          className="w-[266px] h-[72.14px] object-contain"
        />
      </div>
    </div>

    <div className="w-full items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Arch.bet. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
