import React from 'react'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  let navigate = useNavigate()
  return (
    <div>
    <h1>{t("Home")}</h1>



    </div>
  )
}

export default Home;
