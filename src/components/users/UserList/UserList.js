import React, { useEffect, useState } from "react";

import Breadcrumb from "../../common/breadcrumb";
import AddButton from "../../common/AddButton";
import UserTable from "./userTable";
import TopBar from "../../TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../states/modules/users";
import { selectUserList } from "../../../states/modules/users/user.utils";
import CenteredModal from "../../CenteredModal";
import AddUserForm from "./AddUserForm";

const UserList = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUserList);

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
                      onClick={() => setModalShow(true)}
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
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"Adicionar um novo usuário"}
        body={AddUserForm}
      />
    </>
  );
};

export default UserList;
