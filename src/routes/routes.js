import Shop from "../pages/Shop";
import ShoppingCard from "../pages/ShoppingCard";
import Order from "../pages/Order";
import { SHOP_ROUTE, SHOPPING_CARD_ROUTE, ORDER_ROUTE } from "../utils/consts";

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: SHOPPING_CARD_ROUTE,
    element: <ShoppingCard />,
  },
  {
    path: ORDER_ROUTE,
    element: <Order />,
  },
];
export const defaultPage = {
  path: "*",
  element: <Shop />,
};
