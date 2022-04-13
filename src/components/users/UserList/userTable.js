import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Trash2, User } from "react-feather";
import { Button, Badge } from "reactstrap";

import Modal from "../../common/modal";

function UserTable({ usersList }) {
  const history = useHistory();

  const [modal, setModal] = useState({ show: false, user: {} });
  const [userId, setUserId] = useState(null);

  const [showMessage, setShowMessage] = useState(false);

  const removedUser = { error: "", data: {} };
  //const removedUser = useSelector(({ users }) => users.removedUser);

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
      if (removedUser && removedUser.data) {
        toast.success(`Usuário removido com sucesso!`);
      }
    }
  }, [removedUser?.data]);

  const goToEditUser = (userId) => (e) => {
    history.push(`${process.env.PUBLIC_URL}/users/${userId}`);
  };

  const removeUser = (user) => (e) => {
    e.stopPropagation();
    setUserId(user.id);
    setModal({ show: true, user: user });
  };

  const removeUserHandler = () => {
    setModal({ show: false });
    console.log("Removing user with id: " + userId);
    setShowMessage(true);
    // dispatch(removeAction({ userId }));
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
            {usersList.map((user) => (
              <tr key={user.id} onClick={goToEditUser(user.id)}>
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
