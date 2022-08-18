import PropTypes from "prop-types";
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Images.module.scss";

const Image = forwardRef(
  (
    {
      className,
      src,
      alt,
      fallBack: customFallback = images.noImage,
      ...props
    },
    ref
  ) => {
    const [fallBack, setFallBack] = useState("");

    const handleError = () => {
      setFallBack(customFallback);
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
  }
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallBack: PropTypes.string,
};

export default Image;
