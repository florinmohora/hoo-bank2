import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo} data-aos="fade-up">
      <h2 className={styles.heading2}>
        Improve your statistics <br className="sm:block hidden" /> from day one.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        There's no setup involved on our part, as long as you have an account
        open with a betting agency, you can start making profit from the first
        day you become a member!
      </p>

      <Button styles={`mt-10`} text="Ready to join?" link="#price" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="billing"
        className="w-[100%] h-[100%]"
        data-aos="zoom-in"
      />
    </div>
  </section>
);

export default CardDeal;
