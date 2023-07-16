import React from "react";

import {
  CalendarIcon,
  CloseIcon,
  Input,
  InputProps,
  Paper,
  useClickOutside,
} from "lib";

import styles from "./DatePicker.css";

type DatePickerProps = InputProps;

// TODO: Show as state instead of classList remove/add
// TODO: required not working => useForm required (because of readOnly)
const DatePicker = (
  props: DatePickerProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [month, setMonth] = React.useState(new Date().getMonth());
  const [year, setYear] = React.useState(new Date().getFullYear());

  const datePickerRef = useClickOutside(() => {
    const datePicker = document.querySelector(`.${styles.datePicker}`);
    datePicker?.classList.remove(styles.show);
  });

  const handleChange = (day?: number) => {
    const value = day === undefined ? "" : `${month + 1}/${day}/${year}`;
    if (ref && "current" in ref && ref.current) {
      ref.current.value = value;
    }
    if (props.onChange) {
      const event = {
        target: {
          value: value,
          name: props.name,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      props.onChange(event);
    }
    const datePicker = document.querySelector(`.${styles.datePicker}`);
    datePicker?.classList.remove(styles.show);
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const isDayPassed = (day: number) => {
    return (
      day <= currentDay && year === currentYear && month + 1 === currentMonth
    );
  };

  return (
    <div
      className={styles.datePicker}
      onClick={() => {
        const datePicker = document.querySelector(`.${styles.datePicker}`);
        datePicker?.classList.add(styles.show);
      }}
    >
      <Input readOnly ref={ref} {...props} />
      <div className={styles.DatePickerButtons}>
        <CalendarIcon
          className={styles.DatePickerButton}
          onClick={() => {
            const datePicker = document.querySelector(`.${styles.datePicker}`);
            datePicker?.classList.add(styles.show);
          }}
        />
        <CloseIcon
          className={styles.DatePickerButton}
          onClick={(e: React.MouseEvent) => {
            handleChange(undefined);
            e.stopPropagation();
          }}
        />
      </div>
      <div className={styles.datePickerDropdown} ref={datePickerRef}>
        <Paper>
          <div className={styles.datePickerHeader}>
            {currentYear < year || currentMonth <= month ? (
              <span className={styles.datePickerPrev} onClick={handlePrevMonth}>
                &#10094;
              </span>
            ) : null}
            <span className={styles.datePickerHeaderTitle}>
              {new Date(year, month).toLocaleDateString("fr", {
                month: "long",
              })}{" "}
              {year}
            </span>
            <span className={styles.datePickerNext} onClick={handleNextMonth}>
              &#10095;
            </span>
          </div>
          <div className={styles.datePickerDays}>
            <span>Di</span>
            <span>Lu</span>
            <span>Ma</span>
            <span>Me</span>
            <span>Je</span>
            <span>Ve</span>
            <span>Sa</span>
            {days.map((day, index) => (
              <Paper
                key={index}
                variant="primary"
                className={
                  day && !isDayPassed(day) ? styles.datePickerDay : styles.empty
                }
                onClick={
                  day
                    ? (e: React.MouseEvent) => {
                        handleChange(day);
                        e.stopPropagation();
                      }
                    : undefined
                }
              >
                {day}
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default React.forwardRef(DatePicker);
