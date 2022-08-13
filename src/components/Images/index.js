import { useState, forwardRef } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Images.module.scss";

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
  const [fallBack, setFallBack] = useState("");

  const handleError = () => {
    setFallBack(images.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
