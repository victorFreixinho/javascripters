import React, { Fragment, useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { Trash2 } from "react-feather";
import { Button, Badge } from "reactstrap";

import Modal from "../../common/modal";

function DiseaseTable({ DiseaseList }) {
  //const history = useHistory();
  console.log("DiaseaseTable: ", DiseaseList);

  const [modal, setModal] = useState({ show: false, user: {} });
  const [desearseId, setDiseaseId] = useState(null);

  const [showMessage, setShowMessage] = useState(false);

  const removedDisease = { error: "", data: {} };
  //const removedDisease = useSelector(({ desearses }) => desearses.removedDisease);

  useEffect(() => {
    if (showMessage) {
      if (removedDisease && removedDisease.error) {
        const validationErrors = removedDisease.error["validation-errors"];

        if (validationErrors) {
          validationErrors.map((error) => {
            toast.error(error.msg);
          });
        } else {
          toast.error(removedDisease.error.message);
        }
      }
    }
  }, [removedDisease?.error]);

  useEffect(() => {
    if (showMessage) {
      if (removedDisease && removedDisease.data) {
        toast.success(`Doença removida com sucesso!`);
      }
    }
  }, [removedDisease?.data]);

  //   const goToDetails = (desearse) =>
  //     history.push(`${process.env.PUBLIC_URL}/desearses/${desearse.id}`);

  const removeDisease = (desearse) => (e) => {
    e.stopPropagation();
    setDiseaseId(desearse.id);
    setModal({ show: true, desearse: desearse });
  };

  const removeDiseaseHandler = () => {
    setModal({ show: false });
    console.log("Removing disearse with id: " + desearseId);
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
            {DiseaseList.map((desearse, index) => (
              <tr key={index} /*onClick={goToDetails(desearse)}*/>
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
                  <Button color="link" onClick={removeDisease(desearse)}>
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
        onAccept={removeDiseaseHandler}
        title="Remover Doença"
      >
        Tem certeza que deseja excluir a doença{" "}
        <Badge color="warning">{modal.user?.name}</Badge> ?
      </Modal>
    </Fragment>
  );
}

export default DiseaseTable;
