import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
//import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Trash2, User } from "react-feather";
import { Button, Badge } from "reactstrap";

import Modal from "../../common/modal";

function DesearseTable({ DesearseList }) {
  const history = useHistory();

  const [modal, setModal] = useState({ show: false, user: {} });
  const [desearseId, setDesearseId] = useState(null);

  const [showMessage, setShowMessage] = useState(false);

  const removedDesearse = { error: "", data: {} };
  //const removedDesearse = useSelector(({ desearses }) => desearses.removedDesearse);

  useEffect(() => {
    if (showMessage) {
      if (removedDesearse && removedDesearse.error) {
        const validationErrors = removedDesearse.error["validation-errors"];

        if (validationErrors) {
          validationErrors.map((error) => {
            toast.error(error.msg);
          });
        } else {
          toast.error(removedDesearse.error.message);
        }
      }
    }
  }, [removedDesearse?.error]);

  useEffect(() => {
    if (showMessage) {
      if (removedDesearse && removedDesearse.data) {
        toast.success(`Doença removida com sucesso!`);
      }
    }
  }, [removedDesearse?.data]);

  const goToDetails = (desearse) =>
    history.push(`${process.env.PUBLIC_URL}/desearses/${desearse.id}`);

  const removeDesearse = (desearse) => (e) => {
    e.stopPropagation();
    setDesearseId(desearse.id);
    setModal({ show: true, desearse: desearse });
  };

  const removeDesearseHandler = () => {
    setModal({ show: false });
    console.log("Removing desearse with id: " + desearseId);
    setShowMessage(true);
    // dispatch(removeAction({ desearseId }));
  };

  return (
    <Fragment>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Transmissividade</th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer" }}>
            {DesearseList.map((desearse) => (
              <tr key={desearse.id} onClick={goToDetails(desearse)}>
                <td data-testid="user-name">
                  <CoronavirusIcon
                    size={17}
                    style={{ display: "inline-block", marginRight: "2px" }}
                  />
                  &nbsp;
                  {"   " + desearse.name}
                </td>
                <td>{desearse.rate}</td>
                <td className="text-end">
                  <Button color="link" onClick={removeDesearse(desearse)}>
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
        onAccept={removeDesearseHandler}
        title="Remover Doença"
      >
        Tem certeza que deseja excluir a doença{" "}
        <Badge color="warning">{modal.user?.name}</Badge> ?
      </Modal>
    </Fragment>
  );
}

export default DesearseTable;
