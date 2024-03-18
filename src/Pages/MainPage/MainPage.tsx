import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import ChangeProperty from "../../Components/ChangeProperty/ChangeProperty";
import "./MainPage.scss";
enum Role {
  user = "ROLE_USER",
  admin = "ROLE_Admin",
}
const MainPage = () => {
  const navigator = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    console.log(role);

    if (!role) {
      console.log("no user");
      navigator("/register");
    } else if (role === Role.user) navigator("/tasks");
  }, [role]);
  return (
    <>
      <NavLink to={"/tasks"}>Список задач</NavLink>
      <NavLink to={"/create-task"}>Создать задачу</NavLink>
      <div className="changeProperty">
        <ChangeProperty property="topic" />
        <ChangeProperty property="programming-language" />
      </div>
    </>
  );
};

export default MainPage;
