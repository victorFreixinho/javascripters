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
  const [diseaseId, setDiseaseId] = useState(null);

  const [showMessage, setShowMessage] = useState(false);

  const removedDisease = { error: "", data: {} };
  //const removedDisease = useSelector(({ diseases }) => diseases.removedDisease);

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

  //   const goToDetails = (disease) =>
  //     history.push(`${process.env.PUBLIC_URL}/diseases/${disease.id}`);

  const removeDisease = (disease) => (e) => {
    e.stopPropagation();
    setDiseaseId(disease.id);
    setModal({ show: true, disease: disease });
  };

  const removeDiseaseHandler = () => {
    setModal({ show: false });
    console.log("Removing disease with id: " + diseaseId);
    setShowMessage(true);
    // dispatch(removeAction({ diseaseId }));
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
            {DiseaseList.map((disease, index) => (
              <tr key={index} /*onClick={goToDetails(disease)}*/>
                <td data-testid="user-name">
                  <CoronavirusIcon
                    size={17}
                    style={{ display: "inline-block", marginRight: "2px" }}
                  />
                  &nbsp;
                  {"   " + disease.name}
                </td>
                <td>{disease.rate}</td>
                <td className="text-end">
                  <Button color="link" onClick={removeDisease(disease)}>
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
