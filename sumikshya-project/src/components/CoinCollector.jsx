import React, { useReducer } from 'react'

const initialState = {
  coins: 0,
  level: 1,
  bonus: 0

}
function coinReducer(state, action) {
  switch (action.type) {
    case 'COLLECT_COIN':
      return { ...state, coins:state.coins + 1 };
    case 'COLLECT_5_COINS':
      return {...state,  coins:state.coins + 5 };
    case 'BONUS':
      return {...state,  bouns:state.bonus + 10 };
    case 'LEVEL_UP':
      return {...state,  level:state.level + 1 };
    case 'RESET':
      return {coins:0 ,level:1 ,bonus:0 };

  }
}

const CoinCollector = () => {
  const [state, dispatch] = useReducer(coinReducer, initialState)
  return (
    <>
     <div className='d-flex justify-content-center mt-5 text-success

'> Coin Collector</div>
      
      <h3 className='d-flex justify-content-center'>
        <span style={{ color: 'purple', padding: "20px" }}>Coin:{state.coins}</span>
        <span style={{ color: 'green', padding: "20px" }}>Bonus:{state.bonus}</span>
        <span style={{ color: 'blue', padding: "20px" }}>levle{state.level}</span>
</h3>
        <div className='d-flex justify-content-center' >
          <button onClick={() => dispatch({ type: 'COLLECT_COIN' })}style={{margin:"5px"}}>COLLECT_COIN</button>
          <button onClick={() => dispatch({ type: 'COLLECT_5_COINS' })}style={{margin:"5px"}}>COLLECT_5_COINS</button>
          <button onClick={() => dispatch({ type: 'BONUS' })}style={{margin:"5px"}}>BONUS</button>
          <button onClick={() => dispatch({ type: 'LEVEL_UP' })}style={{margin:"5px"}}>LEVEL_UP</button>
          <button onClick={() => dispatch({ type: 'RESET' })}style={{margin:"5px"}}>RESET</button>
        </div>
      </>
  )
}

export default CoinCollector
