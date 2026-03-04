import React,{useReducer} from 'react'


const initialState = { count: 0 }

function CountReducer(state, action) {
    switch (action.type) {
        case 'INCREAMENT':
            return{count:( state.count +1)};
        case 'DECREAMENT':
            return {count: state.count-1};
        case 'RESET':
            return{count: 0};
        default:
            return state;

    }
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(CountReducer, initialState);
    return (
        <>
            <div className='d-flex justify-content-center mt-5 text-danger'>
                CounterReducer
            </div> 
            <h2 className='d-flex justify-content-center'>count:{state.count}</h2>
            <div className='d-flex justify-content-center'>
            <button onClick={()=>dispatch({type:'INCREAMENT'})} style={{margin:"10px"}}>Increament</button>
            <button onClick={()=>dispatch({type:'DECREAMENT'})}style={{margin:"10px"}}>Decreament</button>
            <button onClick={()=>dispatch({type:'RESET'})}style={{margin:"10px"}}>Reset</button>
</div>
           
            

        </>
    )
}

export default CounterReducer
