export const ITEM_COUNT = "ITEM_COUNT";

export const setCountAC = (id, count)=>{
  return {
    type: ITEM_COUNT,
    payload: {id, count},
  };
};