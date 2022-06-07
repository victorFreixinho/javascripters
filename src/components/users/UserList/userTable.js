import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Trash2, User } from "react-feather";
import { Button, Badge } from "reactstrap";

import Modal from "../../common/modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../states/modules/users";

toast.configure();
function UserTable({ usersList }) {
  const history = useHistory();

  const [modal, setModal] = useState({ show: false, user: {} });
  const [userId, setUserId] = useState(null);

  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const removedUser = useSelector(({ users }) => users.removedUser);

  useEffect(() => {
    if (showMessage) {
      if (removedUser && removedUser.error) {
        const validationErrors = removedUser.error["validation-errors"];

        if (validationErrors) {
          validationErrors.map((error) => {
            toast.error(error.msg);
          });
        } else {
          toast.error(removedUser.error.message);
        }
      }
    }
  }, [removedUser?.error]);

  useEffect(() => {
    if (showMessage) {
      if (removedUser) {
        toast.success(`Usuário removido com sucesso!`);
      }
    }
  }, [removedUser]);

  const goToEditUser = (userId) => (e) => {
    //history.push(`${process.env.PUBLIC_URL}/users/${userId || 1}`);
    return;
  };

  const removeUser = (user) => (e) => {
    e.stopPropagation();
    //setUserId(user.id);
    setModal({ show: true, user });
  };

  const removeUserHandler = () => {
    const user = modal.user;
    setModal({ show: false, user: {} });
    console.log("Removing user with id: " + userId);
    setShowMessage(true);
    dispatch(deleteUser(user));
  };

  return (
    <Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Funções</th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer" }}>
            {usersList.map((user, index) => (
              <tr key={index} onClick={goToEditUser(user.id)}>
                <td data-testid="user-name">
                  <User
                    size={17}
                    style={{ display: "inline-block", marginRight: "2px" }}
                  />
                  &nbsp;
                  {"   " + user.name}
                </td>
                <td>{user.email}</td>
                <td>
                  {user?.roles?.map((r, index) => (
                    <span key={r.id} className="badge bg-secondary">
                      {r.label}
                    </span>
                  ))}
                </td>
                <td className="text-end">
                  <Button color="link" onClick={removeUser(user)}>
                    <Trash2 size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modal.show}
        onClose={() => setModal({ show: false })}
        onAccept={removeUserHandler}
        title="Remover Usuário"
      >
        Tem certeza que deseja excluir o usuário{" "}
        <Badge color="warning">{modal.user?.name}</Badge> ?
      </Modal>
    </Fragment>
  );
}

export default UserTable;
