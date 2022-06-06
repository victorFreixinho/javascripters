import React, { useEffect } from "react";

import Breadcrumb from "../../common/breadcrumb";
//import { useHistory } from "react-router-dom";
import AddButton from "../../common/AddButton";
import DesearseTable from "./DesearseTable";
import TopBar from "../../TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getDiseases } from "../../../states/modules/diseases";
import { selectDiseases } from "../../../states/modules/diseases/disease.utils";

const DesearseList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiseases());
  }, [dispatch]);

  const diseases = useSelector(selectDiseases);

  //  const history = useHistory();
  //   const goToAddDesearse = () =>
  //     history.push(`${process.env.PUBLIC_URL}/desearses/add`);

  return (
    <>
      <TopBar />
      <Breadcrumb title="Gestão de Doenças" current="Gestão de Doenças" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h5>Gestão de Doenças</h5>
                  </div>
                  <div className="col text-end">
                    <AddButton
                      //onClick={goToAddDesearse}
                      toolTipMsg={"Adicionar uma nova Doença"}
                    ></AddButton>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <DesearseTable DiseaseList={diseases} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesearseList;
