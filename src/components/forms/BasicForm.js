import React , {useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';

import FormItem from './FormItem'

const BasicForm = ({fields=[],validate,itemsPerRow,itemAlignment,itemVerticalPadding,itemHorizontalPadding,formValues,setFormValues}) => {



  const [errors,setErrors] = useState({})


  const renderField = (field) => {
    let defaultVal = ''

    if(typeof(formValues[field.key]) !== 'undefined'){
      defaultVal = formValues[field.key]
    }

    return(
      <Grid key={field.key} style={{textAlign:itemAlignment,paddingTop:itemVerticalPadding,paddingRight:itemHorizontalPadding,paddingBottom:itemVerticalPadding,paddingLeft:itemHorizontalPadding}} item xs={12/itemsPerRow}>
      {field.otherLabel ? <InputLabel>{field.otherLabel}</InputLabel> : null}
      <FormItem errors={errors} setErrors={setErrors} validate={validate} formValues={formValues} setFormValues={setFormValues} defaultVal={defaultVal} key={field.key} field={field} />
      </Grid>
    )



  }

  const renderForm = () => {
    return fields.map((field) => {
      return renderField(field)
    })
  }

  return (
    <>
    {renderForm()}


    </>
  )
}

export default BasicForm;
