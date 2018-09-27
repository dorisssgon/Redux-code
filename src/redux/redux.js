const CHANGE_ITEM = 'CHANGE_ITEM';
const IS_SORT = 'IS_SORT';
let initState = {
filterBy: 'all',
isSort: false,
items: [
  {
    name: 'Toyota',
    type: 'car',
  },
  {
    name: 'Grape',
    type: 'fruit',
  },
  {
    name: 'Mazda',
    type: 'car',
  },
  {
    name: 'Strawberry',
    type: 'fruit',
  },
  {
    name: 'Orange',
    type: 'fruit',
  },
  {
    name: 'Pear',
    type: 'fruit',
  }]
}
export function changeItem(data){
    return {
        type: CHANGE_ITEM,
        payload: data
    }
}
export function isSort(){
    return {
        type: IS_SORT
    }
}

export function reducer(state = initState, action){
    switch(action.type){
        case CHANGE_ITEM:
          return {...state, filterBy:action.payload}
        case IS_SORT:
           return {...state,isSort:!state.isSort}
        default:
        return state;
    }
}