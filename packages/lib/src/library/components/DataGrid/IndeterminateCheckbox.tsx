import React from "react";

interface IndeterminateCheckboxProps {
  onChange?: ((e: React.ChangeEvent<Element>) => void) | undefined;
  checked?: boolean | undefined;
  title?: string | undefined;
  indeterminate?: boolean | undefined;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  role?: string | undefined;
}

export const IndeterminateCheckbox = React.forwardRef<
  HTMLInputElement,
  IndeterminateCheckboxProps
>(
  (
    { indeterminate, ...rest }: IndeterminateCheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const defaultRef = React.useRef<HTMLInputElement>();

    React.useEffect(() => {
      const node = defaultRef.current;
      if (node) {
        node.indeterminate = indeterminate || false;
      }
    }, [defaultRef, indeterminate]);

    const resolvedRef = (node: HTMLInputElement) => {
      defaultRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <input
        type="checkbox"
        ref={resolvedRef}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      />
    );
  }
);

IndeterminateCheckbox.displayName = "IndeterminateCheckbox";
