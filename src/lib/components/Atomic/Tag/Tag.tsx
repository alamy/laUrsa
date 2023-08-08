import { clsx } from "clsx";
import "./Tag.scss";
import { X } from "../../Icon/System/X";
export interface TagProps {
  disable?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: Function | any;
  onClick: (i:any) => void
  Objeto: Object
}

export function Tag({ disable, size ,Objeto ,  ...props}: TagProps) {
  let label;
  let checked;
  if (disable) {
    (label = "color-gray"), (checked = "checkmark-false");
  } else {
    label = "color";
    checked = "checkmark-true";
  }

  const resultado = Object.values(Objeto).map(function(res){
    return ( <>
    <div className="px-4 pt-1 mr-2 pb-1 tag-laursa inline-block rounded-2xl">
      <p>{res}</p>
      <button {...props} value={res} className="btn-tag"></button>
    </div>
    </>
    )
  })
  

  return (
    <>
      {resultado}
    </>
  );
}
