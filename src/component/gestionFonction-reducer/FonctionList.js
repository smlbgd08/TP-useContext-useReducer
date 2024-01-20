import { useReducer, useState } from "react";

const FonctionList = () => {

    const initialFonctions = [];
    const [newFunction, setNewFunction] = useState('');

    const fonctionReducer = (state , action)=>{
        switch (action.type) {
            case 'ADD_FC': 
             return [...state, { id: Date.now(), text: action.payload, completed: false }];
             case 'REMOVE_FC':
                return state.filter(fc => fc.id !== action.payload);
            case 'TOGGLE_FC':
                return state.map(fc =>fc.id === action.payload ? { ...fc, completed: !fc.completed } : fc);
            default :
                return state;
        }
    }
    const [functions, dispatch] = useReducer(fonctionReducer, initialFonctions);

     // Étape 5 et 6
  return (
    <div>
      <ul>
        <h1>list of function</h1>
        {functions.map(fc => (
          <li key={fc.id}>
            <input
              type="checkbox"
              checked={fc.completed}
              onChange={() => dispatch({ type: 'TOGGLE_FC', payload: fc.id })}
            />
            <span style={{ textDecoration: fc.completed ? 'line-through' : 'none' }}>
              {fc.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_FC', payload: fc.id })}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      {/* Étape 7 */}
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'ADD_FC', payload: newFunction });
          setNewFunction('');
        }}
      >
        <input
          type="text"
          value={newFunction}
          onChange={e => setNewFunction(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
      </div>)


}

export default FonctionList;
