import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";
const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formatedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
console.log(imagePath)
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <span>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout={"responsive"} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </span>
      </Link>
    </li>
  );
};

export default PostItem;
