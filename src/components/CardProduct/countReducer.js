import initialStore from "../../redux/initialStore";
import {ITEM_COUNT} from "./countAction";

export const countReducer = (quantityItems = initialStore.quantityItems, action) => {
  switch (action.type) {
    case ITEM_COUNT:{
      let oldCount = (quantityItems[action.payload.id]) ? quantityItems[action.payload.id] : 0;
      return {...quantityItems,
        [action.payload.id]: oldCount + action.payload.count}
    }
    default:
      return quantityItems;
  }
};

