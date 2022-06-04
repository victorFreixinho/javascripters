import React, { useEffect } from "react";

import Breadcrumb from "../../common/breadcrumb";
import { useHistory } from "react-router-dom";
import AddButton from "../../common/AddButton";
import UserTable from "./userTable";
import TopBar from "../../TopBar";

const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Pedro",
      email: "pedro@gmail.com",
      roles: [{ id: 1, label: "administrador" }],
    },
    {
      id: 2,
      name: "Victor",
      email: "victor@gmail.com",
      roles: [{ id: 1, label: "administrador" }],
    },
    {
      id: 3,
      name: "Antônio",
      email: "antonio@gmail.com",
      roles: [{ id: 1, label: "administrador" }],
    },
  ];

  const history = useHistory();
  const goToAddUser = () => history.push(`${process.env.PUBLIC_URL}/users/add`);

  return (
    <>
      <TopBar />
      <Breadcrumb title="Gestão de Usuários" current="Gestão de Usuários" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h5>Gestão de usuários</h5>
                  </div>
                  <div className="col text-end">
                    <AddButton
                      onClick={goToAddUser}
                      toolTipMsg={"Adicionar Um Novo Usuário"}
                    ></AddButton>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <UserTable usersList={users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
