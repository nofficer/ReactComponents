import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import BasicForm from './BasicForm'

import Grid from '@mui/material/Grid';

const fields = [
  {key:'username', label:'Username', type:'input', inputType:'text',variant:'filled',fullWidth:true},
  {key:'email', label:'Email', type:'input', inputType:'text',fullWidth:true},
  {key:'role',label:'Role', type:'select',selectPlaceholder:'Please Select a Role',fullWidth:true, options:[
  {optionLabel:'Senior-Manager',optionValue:'Senior-Manager'},
  {optionLabel:'Manager',optionValue:'Manager'},
  {optionLabel:'Entry-Level',optionValue:'Entry-Level'}
                                        ]},
  {key:'birthdate',label:'Birth Date', type:'date', inputType:'date',fullWidth:true},
  {key:'password',label:'Password', type:'input', inputType:'password',fullWidth:true},
  {key:'level',label:'Level', type:'input', inputType:'number',fullWidth:true}
]

const FormHolder = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate()
  // Instantiate formValues for each instance of the BasicForm component
  const [formValues, setFormValues] = useState({role:'placeholder',username:'Hello'})


// To implement validate function it takes two arguments (itemValue,key)
// If validate function returns null then no errors will be rendered
// If validate function returns a string then an error will be rendered for the form item corresponding to the key
  let validateFunc = (itemValue,key) => {
    if(key==='username' && itemValue !=='Hello'){
      return 'Invalid Username'
    }
      return null

  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 style={{textAlign:'center'}}>{t("Form Holder")}</h1>
      </Grid>
    <Grid item xs={2}>

    </Grid>
    <Grid item xs={8}>
      <Grid container>
        <BasicForm  formValues={formValues} setFormValues={setFormValues} itemVerticalPadding={4} itemHorizontalPadding={4} itemAlignment='center' itemsPerRow={3} fields={fields} validate={validateFunc}/>

      </Grid>
    </Grid>
    <Grid item xs={2}>

    </Grid>


    </Grid>
  )
}



export default FormHolder;
