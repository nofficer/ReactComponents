import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const BasicForm = ({defaultValues,fields}) => {
  const { t, i18n } = useTranslation();
  const [formValues, setFormValues] = useState(defaultValues)

  let navigate = useNavigate()
  return (
    <div>
    <h1>{t("BasicForm")}</h1>
    </div>
  )
}

export default BasicForm;
