import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <a href="https://t.me/archbetcioadv">
            <span className="text-gradient">Join</span>
          </a>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <a href="https://t.me/archbetcioadv">
          <span className="text-gradient">Our Telegram</span>
        </a>
      </p>
    </div>
  </div>
);

export default GetStarted;
