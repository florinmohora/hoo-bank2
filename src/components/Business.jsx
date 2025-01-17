import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      data-aos="fade-up"
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div
      className="flex-1 flex flex-col ml-3"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo} data-aos="zoom-in">
      <h2 className={styles.heading2}>
        You do the betting, <br className="sm:block hidden" /> we’ll handle the
        analysis.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right tipster you can improve your financial life by placing
        winning bets, potentially earning a lot of money. We can help you
        achieve that with over 15 years of experience in the market.
      </p>

      <Button styles={`mt-10`} text="Start now!" link="#price" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
