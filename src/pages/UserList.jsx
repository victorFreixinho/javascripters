import React, { useEffect } from "react";

import Breadcrumb from "../components/Breadcrumb";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const goToAddUser = () => navigate.push(`${process.env.PUBLIC_URL}/users/add`);

  return (
    <>
      <Breadcrumb title="Gestão de Usuários" current="Gestão de Usuários" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h5>Gestão de usuários da sua empresa.</h5>
                  </div>
                  <div className="col text-right">
                    {/*
                      
                    <AccessControl requiredPermissions={[`user:create`]}>
                      <AddButton
                        onClick={goToAddUser}
                        toolTipMsg={"Adicionar Um Novo Usuário"}
                      ></AddButton>
                    </AccessControl>
                    */}
                  </div>
                </div>
              </div>
              <div className="card-body">
                {/*
                    <UserTable usersList={users} />
                  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
