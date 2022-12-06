import React from "react";
import CreateNavTemplate from "../templates/template-creator";
import JadwalMainContent from "../../components/JadwalPageComponent/JadwalMainContent";

const JadwalPage = () => {
  return (
    <>
      <CreateNavTemplate></CreateNavTemplate>
      <JadwalMainContent></JadwalMainContent>
    </>
  )
}

export default JadwalPage;