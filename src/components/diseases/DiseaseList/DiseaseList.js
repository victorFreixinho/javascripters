import React, { useEffect } from "react";

import Breadcrumb from "../../common/breadcrumb";
//import { useHistory } from "react-router-dom";
import AddButton from "../../common/AddButton";
import DiseaseTable from "./DiseaseTable";
import TopBar from "../../TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getDiseases } from "../../../states/modules/diseases";
import { selectDiseases } from "../../../states/modules/diseases/disease.utils";

const DiseaseList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiseases());
  }, [dispatch]);

  const diseases = useSelector(selectDiseases);
  console.log("Diseases: ", diseases);

  // const diseases = [
  //   {
  //     id: 1,
  //     name: "Dengue",
  //     rate: "Alta",
  //   },
  //   {
  //     id: 2,
  //     name: "Febre Amarela",
  //     rate: "Moderada",
  //   },
  //   {
  //     id: 3,
  //     name: "Meningite",
  //     rate: "Baixa",
  //   },
  // ];

  //  const history = useHistory();
  //   const goToAddDisease = () =>
  //     history.push(`${process.env.PUBLIC_URL}/diseases/add`);

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
                      //onClick={goToAddDisease}
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
    </>
  );
};

export default DiseaseList;
