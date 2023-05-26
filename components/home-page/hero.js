import Image from "next/image";
import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/profile.jpg"}
          alt={"profile image"}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I&apos;m Sudhindra</h1>
      <p>I am Working in Sapient</p>
    </section>
  );
};

export default Hero;
