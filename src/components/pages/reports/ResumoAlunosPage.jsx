import React from "react";
import HeaderResumoAlunos from "../../reports/resumo-alunos/HeaderResumoAlunos";
import ResumoTable from "../../reports/resumo-alunos/ResumoTable";
import PageBase from "../../Layout/PageBase/PageBase";

const ResumoAlunosPage = () => {
  return (
    <PageBase title="Resumo do sistema para alunos">
    <div style={{ padding: "20px" }}>
      <HeaderResumoAlunos />
      <ResumoTable />
    </div>
     </PageBase>
  );
 
};

export default ResumoAlunosPage;