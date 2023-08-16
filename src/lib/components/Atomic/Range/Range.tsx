import { clsx } from "clsx";
import "./Range.scss";
import { useRef, useState } from "react";
export interface RangeProps {
  text: string;
  name: string;
  disable?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: Function | any;
  value?: string
}

export function Range({ disable, text, size, name, value , ...props}: RangeProps) {
  const [max, setMax] = useState(999999999)
  const [min, setMin] = useState(0)
  let label;
  let checked;
  if (disable) {
    (label = "color-gray"), (checked = "checkmark-false");
  } else {
    label = "color";
    checked = "checkmark-true";
  }

  let rangeMin = 100;

  let minimo: any = useRef('0')
  let maximo: any = useRef('999999999')
  const range:any = document.querySelector(".range-selected");
  const rangeInput:any = document.querySelectorAll(".range-input input");
  console.log(minimo.current?.value)
  rangeInput.forEach((input:any) => {
    input.addEventListener("input", (e:any) => {
      if (maximo.current?.value - minimo.current?.value < rangeMin) {
        if (e.target.className === "min") {
          minimo.current.value = maximo.current?.value - rangeMin;        
        } else {
          maximo.current.value = minimo.current?.value + rangeMin;      
        }
      } else {
        //  rangePrice[0].value = minRange;
        setMax(maximo.current.value)
        setMin(minimo.current.value)
        range.style.left = (min / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (max / rangeInput[1].max) * 100 + "%";
      }
    });
    

  });
  function converter(numero:any){

    let resultado:any;

    resultado = Array.from(numero)
    console.log(resultado)
    for(var i = 0; i < resultado.length; i++ ){
     console.log(resultado[i])
    }
    console.log(resultado)
    return numero
  }

  return (
    <>
    <div className="range">
   <div className="range-slider">
     <span className="range-selected"></span>
   </div>
   <div className="range-input">
    <input  type="range" className="min" min="0" max="999999999" defaultValue="0" step="9" ref={minimo} />
    <input type="range" className="max" min="0" max="999999999" defaultValue="999999999" step="9" ref={maximo} />
   </div>
   <div className="range-price">      

     <output  name="min" className="minimo">{converter(min)}</output>      
     <output name="max" className="maximo">{max}</output>    
   </div>
</div>
    </>
  );
}
