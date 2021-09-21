import data from "./data";

function reducer(state, action) {
  if (action.type === "SUBMIT") {
    const { name, area, category, open, close } = action.payload;
    const newShop = {
      id: new Date().getTime().toString(),
      name,
      area,
      category,
      open,
      close,
    };

    return { ...state, data: [...state.data, newShop] };
  }

  if (action.type === "REMOVE") {
    const newList = state.data.filter((shop) => action.payload.id !== shop.id);
    return { ...state, data: newList };
  }
  if (action.type === "FILTER_AREA") {
    const newList = state.data.filter(
      (shop) => action.payload.area === shop.area
    );

    return { ...state, filter_data: newList };
  }

  if (action.type === "FILTER_CATEGORY") {
    const newList = state.data.filter(
      (shop) => action.payload.category === shop.category
    );

    return { ...state, filter_data: newList };
  }

  // if (action.type === "TOGGLE_ADD") {
  //   console.log(state.add);
  //   return { ...state, add: !state.add };
  // }

  if (action.type === "TOGGLE_FILTER") {
    const { area, category } = action.payload;

    if (area !== undefined) {
      return { ...state, filter: true };
    } else if (category) {
      return { ...state, filter: true };
    } else if (!area || !category) {
      return { ...state, filter: false };
    }

    return { ...state, filter: false, filter_data: [] };
  }

  if (action.type === "FILTER_BOTH") {
    const { area, category } = action.payload;
    const newList = state.data.filter(
      (shop) => action.payload.area === shop.area
    );
    const newList1 = newList.filter(
      (shop) => action.payload.category === shop.category
    );
    return { ...state, filter_data: newList1 };
  }

  if (action.type === "REMOVE_FILTER") {
    return { ...state, filter: false, filter_data: [] };
  }

  // if (action.type === "OPEN") {
  //   return { ...state, open_shop: true };
  // }
  // if (action.type === "CLOSE") {
  //   return { ...state, open_shop: false };
  // }

  return state;
}

export default reducer;
