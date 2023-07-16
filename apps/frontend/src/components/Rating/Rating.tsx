import React from "react";
import styles from "./Rating.css";

type RatingProps = React.InputHTMLAttributes<HTMLInputElement>;

const Rating = (
  props: RatingProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const [rating, setRating] = React.useState(props.value || 0);
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
    if (ref && "current" in ref && ref.current) {
      ref.current.value = value.toString();
    }
    if (props.onChange) {
      const event = {
        target: {
          value: value.toString(),
          name: props.name,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
  };

  const handleHoverRating = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className={`${styles.RatingContainer}`}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`${styles.RatingStar} ${
            value <= (hoverRating || rating) ? styles.active : ""
          } ${props.disabled ? "" : styles.NotDisabled}`}
          onClick={props.disabled ? undefined : () => handleRatingChange(value)}
          onMouseEnter={
            props.disabled ? undefined : () => handleHoverRating(value)
          }
          onMouseLeave={props.disabled ? undefined : () => handleMouseLeave()}
        >
          ★
        </span>
      ))}
      <input {...props} ref={ref} className={styles.HiddenInput} />
    </div>
  );
};

export default React.forwardRef(Rating);
