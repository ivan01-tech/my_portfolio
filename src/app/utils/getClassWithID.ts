import { linkIDS, navBtns } from "./constant";

export function getClassWithID(id: string) {
  switch (id) {
    case linkIDS.home:
      return navBtns.home;
    case linkIDS.projects:
      return navBtns.projects;
    case linkIDS.skills:
      return navBtns.skills;
    default:
      return "";
  }
}
