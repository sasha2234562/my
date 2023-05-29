import h from "./huky.module.css"

type PropsType ={
    name : string
}

export const Huky = (props : PropsType) => {
 return(
     <div className={h.huky}>
         <button>{props.name}</button>
     </div>
 )
}

