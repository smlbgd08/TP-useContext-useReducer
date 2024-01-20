import { useReducer, useState } from "react"

export default function Reduce2(){

    const initState = {
        username : '',
        email : '',
        notes : ''
    }
    const reducer = (state,action)=>{
        switch(action.type){
            case 'input' : return {...state , [action.field] : action.value};
            case 'reset' : return initState; 
            default :  return state;
        }
    }
    const [state , dispatch] = useReducer(reducer,initState);
    const handleChange = (e)=>{
        dispatch({type : 'input' , field : e.target.name ,  value : e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(state)
    }

    const handleReset = (e)=>{
        dispatch({type : 'reset'})
    }

    return (<form onSubmit={handleSubmit}>
        <label htmlFor="">username
            <input type="text" name="username" value={state.username}  onChange={handleChange}/>
        </label><br/>
        <label htmlFor="">email
            <input type="text" name="email" value={state.email} onChange={handleChange}/>
        </label><br/>
        <label htmlFor="">notes
            <input type="text" name="notes" value={state.notes} onChange={handleChange}/>
        </label><br/>
        <button type="submit">Submit</button>
        <button type="buuton" onClick={handleReset}>Reset</button>

    </form>)

}