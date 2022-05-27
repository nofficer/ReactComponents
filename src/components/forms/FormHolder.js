import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import BasicForm from './BasicForm'

const fields = [
  {key:'username', label:'Username', type:'input', inputType:'text'},
  {key:'email', label:'Email', type:'input', inputType:'text'},
  {key:'role',label:'Role', type:'select',selectPlaceholder:'Please Select a Role', options:[
  {optionLabel:'Senior-Manager',optionValue:'Senior-Manager'},
  {optionLabel:'Manager',optionValue:'Manager'},
  {optionLabel:'Entry-Level',optionValue:'Entry-Level'}
                                        ]},
  {key:'birthdate',label:'Birth Date', type:'date', inputType:'date'},
  {key:'password',label:'Password', type:'input', inputType:'password'},
  {key:'level',label:'Level', type:'input', inputType:'number'}
]

const FormHolder = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate()


// To implement validate function it takes two arguments (itemValue,key)
// If validate function returns null then no errors will be rendered
// If validate function returns a string then an error will be rendered for the form item corresponding to the key
  let validateFunc = (itemValue,key) => {
    if(key==='username' && itemValue!=='Hello'){
      return('Invalid Username')
    }
    if(key==='birthdate'){
      return('Invalid Date')
    }
    else {
      return null
    }
  }

  return (
    <div>
    <h1>{t("Form Holder")}</h1>
    <BasicForm fields={fields} validate={validateFunc}/>
    </div>
  )
}



export default FormHolder;
