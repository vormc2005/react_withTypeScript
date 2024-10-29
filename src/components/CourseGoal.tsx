import {type FC, type PropsWithChildren, type ReactNode } from "react"

// interface CourseGroupProps {
//     title:string,
//     children: ReactNode
// }
//alternative
type CourseGroupProps =  PropsWithChildren<{
  id:number;
  title:string; 
  onDelete:(id:number)=>void
}>

export default function CourseGoal({title, id, children, onDelete}:CourseGroupProps) {

  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick = {()=>onDelete(id)}>Delete</button>
    </article>
  )
}
// const CourseGoal: FC<CourseGroupProps> = ({title, children})=>{
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//       )
// }

