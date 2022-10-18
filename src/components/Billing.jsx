import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" data-aos="zoom-in" data-aos-offset="200"/>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo} data-aos="fade-up" data-aos-delay="150">
      <h2 className={styles.heading2}>
        From zero to winner <br className="sm:block hidden" /> with our sports tipster
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the experience of our tipster you can go from not knowing what soccer is to making a lifelong income stream for yourself in less than a month!
      </p>

    </div>
  </section>
);

export default Billing;
