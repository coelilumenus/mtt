import React from "react";
import { AddUser } from "../components/addUser/AddUser";
import { NavBar } from "../components/navBar/NavBar";
import { UserList } from "../components/userList/UserList";
import { UserClass } from "../utils/interfaces";

interface Props {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  user: UserClass
}

export const UserPage: React.FC<Props> = ({ setIsAuth, user }) => {
  const [modal, setModal] = React.useState(<></>)
  
  return (
    <>
      <NavBar setIsAuth={setIsAuth} setModal={setModal} user={user} />
      <div className="container">
        <AddUser setModal={setModal} user={user} />
        <UserList setModal={setModal} user={user} />
        {modal}
      </div>
    </>
  )
}