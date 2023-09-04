import { clsx } from "clsx";
import "./Radio.scss";
export interface RadioProps {
  text: string;
  name: string;
  disable?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: Function | any;
  onClick?: Function | any;
  value?: string
}

export function Radio({ disable, text, size, name, value , ...props}: RadioProps) {
  let label;
  let checked;
  if (disable) {
    (label = "color-gray"), (checked = "checkmark-false");
  } else {
    label = "color";
    checked = "checkmark-true";
  }
  return (
    <>
      <label
        className={clsx(label, "container", {
          "container-font-lg": size === "lg",
          "container-font-md": size === "md",
          "container-font-sm": size === "sm",
        })}
        onClick={props.onClick}
      >
        
        <input
          type="radio"
          name={name}
          id={text}
          value={value}
          disabled={disable}
          className={clsx("radio")}
          {...props}
          onClick={props.onClick}
        />
        {" "}
        {text}
      </label>
    </>
  );
}
