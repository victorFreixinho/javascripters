import React, { useEffect } from "react";

import Breadcrumb from "../../common/breadcrumb";
import { useHistory } from "react-router-dom";
import AddButton from "../../common/AddButton";
import DesearseTable from "./DesearseTable";

const DesearseList = () => {
  const desearses = [
    {
      id: 1,
      name: "Dengue",
      rate: "Alta",
    },
    {
      id: 2,
      name: "Febre Amarela",
      rate: "Moderada",
    },
    {
      id: 3,
      name: "Meningite",
      rate: "Baixa",
    },
  ];

  const history = useHistory();
  const goToAddDesearse = () =>
    history.push(`${process.env.PUBLIC_URL}/desearses/add`);

  return (
    <>
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
                      onClick={goToAddDesearse}
                      toolTipMsg={"Adicionar uma nova Doença"}
                    ></AddButton>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <DesearseTable DesearseList={desearses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesearseList;
