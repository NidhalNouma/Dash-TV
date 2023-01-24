import lifetime from "./lifetime.json";
import { paddle_plans } from "../Constant";
export default function checkLifeTime(email) {
  const data = lifetime;

  for (let i = 0; i < data.length; i++) {
    const v = data[i];
    if (v.Email === email) {
      return paddle_plans.Lifetime;
    }
  }
  return null;
}
