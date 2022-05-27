import React , {useState,useEffect} from 'react'

import { useTranslation } from 'react-i18next';

import FormItem from './FormItem'

const BasicForm = ({defaultValues={username:'Hello'},fields=[],validate}) => {
  const { t, i18n } = useTranslation();
  const [formValues, setFormValues] = useState(defaultValues)

  const [errors,setErrors] = useState({})


  const renderField = (field) => {
    let defaultVal = ''

    if(typeof(defaultValues[field.key]) !== 'undefined'){
      defaultVal = defaultValues[field.key]
    }

    return(
      <FormItem errors={errors} setErrors={setErrors} validate={validate} formValues={formValues} setFormValues={setFormValues} defaultVal={defaultVal} key={field.key} field={field} />
    )



  }

  const renderForm = () => {
    return fields.map((field) => {
      return renderField(field)
    })
  }

  return (
    <div>
    {renderForm()}


    </div>
  )
}

export default BasicForm;
