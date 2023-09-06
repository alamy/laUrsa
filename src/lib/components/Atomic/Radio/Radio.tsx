import { clsx } from "clsx";
import "./Radio.scss";
export interface RadioProps {
  text: string;
  name: string;
  disable?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: Function | any;
  onClick?: Function | any;
  value?: string;
  checked?: boolean
}

export function Radio({ disable, text, size, name, value ,checked , ...props}: RadioProps) {
  let label;
  let check;
  if (disable) {
    (label = "color-gray"), (check = "checkmark-false");
  } else {
    label = "color";
    check = "checkmark-true";
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
          checked={checked}
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
