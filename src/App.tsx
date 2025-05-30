import cls from "./App.module.scss";
import { classNames } from "./helpers/classNames";

export function App() {
  return <div className={classNames(cls.app, {}, ["container"])}></div>;
}
