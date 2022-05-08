import { itemsData} from "./ItemsData";

export const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(itemsData), 1000);
    });
  };