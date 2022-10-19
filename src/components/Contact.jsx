import styles from "../style";
import Button from "./Button";

const Contact = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Start your free trial now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Click on the Get Started button and sign up for our free trial! This is a one time free trial so make the most out of it! 
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Contact;