import  {useRef, type FormEvent } from 'react'


type NewGoalsType ={
    onAddGoal: (goal:string, summary:string)=>void;
}
export default function NewGoal({onAddGoal}:NewGoalsType) {
// function handleSubmit(e: FormEvent<HTMLFormElement>){
//     e.preventDefault();

//     new FormData(e.currentTarget);
// }

const goal = useRef<HTMLInputElement>(null);
const summary = useRef<HTMLInputElement>(null);

function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    const enterGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    e.currentTarget.reset();
    onAddGoal(enterGoal, enteredSummary);
   
}

  return <form onSubmit={handleSubmit}>
    <p>
        <label htmlFor="goal">Your goal</label>
        {/* <input type="text" id='goal' name='goal'/> */}
        <input type="text" id='goal' ref = {goal}/>
    </p>
    <p>
        <label htmlFor="summary">Short Summary</label>
        {/* <input type="text" id="summary" name='summary'/> */}
        <input type="text" id="summary" ref={summary}/>
    </p>
    <p>
        <button>Add Goal</button>
    </p>
  </form>
}
