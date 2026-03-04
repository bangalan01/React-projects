export const initialCartState = JSON.parse(localStorage.getItem('cartB69'))||[]


export function cartReducer(state,action){
    switch(action.type){
      case 'ADD_TO-CART':
        const exists = state.find(item => item.id === action.payload.id);

      if (exists) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

        case "INCREASE_QTY":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QTY":
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);


      case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.payload);
      case 'CLEAR_CART':
       return[]
      default: 
      return state
    }
}