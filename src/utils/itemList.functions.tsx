import { UserItem } from "../components/UserItem";
import { Item } from "../interfaces/types";
import { store } from "../redux/store";
import { $itemsOnPage } from "./constants";
import { getUserData } from "./data.functions";

type sortFn = (a: Item, b: Item) => number

export function pageSlicer(array: JSX.Element[]) {
  const pageData = store.getState().page
  const start = (pageData.current * $itemsOnPage)
  const finish = start + $itemsOnPage 
  const newArr: JSX.Element[] = []
  
  for (let i = start; i < finish; i++) {
    if (typeof array[i] !== 'undefined') {
      newArr.push(array[i])
    }
  }
  
  return newArr
}

export function createItems(sortFn: sortFn) {
  const items: JSX.Element[] = []
  
  getUserData().sort(sortFn).forEach(({name, city, id}) => {
    return items.push(<UserItem name={name} city={city} id={id} key={id} />)
  })
  
  return items
}

export const sortName = (a: Item, b: Item) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
}

export const sortCity = (a: Item, b: Item) => {
  if (a.city > b.city) {
    return 1;
  }
  if (a.city < b.city) {
    return -1;
  }
  return 0;
}