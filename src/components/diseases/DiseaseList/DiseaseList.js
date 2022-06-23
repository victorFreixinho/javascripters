import React, { useEffect, useState } from "react";

import Breadcrumb from "../../common/breadcrumb";
//import { useHistory } from "react-router-dom";
import AddButton from "../../common/AddButton";
import DiseaseTable from "./DiseaseTable";
import TopBar from "../../TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getDiseases } from "../../../states/modules/diseases";
import { selectDiseases } from "../../../states/modules/diseases/disease.utils";
import CenteredModal from "../../CenteredModal";
import AddDiseaseForm from "./AddDiseaseForm";

const DiseaseList = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    dispatch(getDiseases());
  }, [dispatch, modalShow]);

  const diseases = useSelector(selectDiseases);

  return (
    <>
      <TopBar />
      <Breadcrumb title="Gestão de Doenças" current="Gestão de Doenças" />
      <div className="container-fluid">
        <div className="row mx-2">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h5>Gestão de Doenças</h5>
                  </div>
                  <div className="col text-end">
                    <AddButton
                      onClick={() => setModalShow(true)}
                      toolTipMsg={"Adicionar uma nova Doença"}
                    ></AddButton>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <DiseaseTable DiseaseList={diseases} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={"Adicionar uma nova doença"}
        body={AddDiseaseForm}
      />
    </>
  );
};

export default DiseaseList;
