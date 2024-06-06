import { MainContent } from "./MainContent";
import { NavBar } from "../NavBar/NavBar";
import { Preview } from "../../types.ts";
import { Store } from "../../data/store/store.tsx";

export const HomePage = ({ phase, list }: Store) => {
  return (
    <>
      <NavBar phase={phase} list={list} />
      <MainContent phase={phase} list={list}></MainContent>
    </>
  );
};
