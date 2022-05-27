import React, {useState,useEffect} from 'react'
import DatePickerComp from './DatePickerComp'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const FormItem = ({field,defaultVal,formValues,setFormValues,validate,errors,setErrors}) => {
  const [itemValue, setItemValue] = useState(defaultVal)
  const [errorStatus,setErrorStatus] = useState(false)
  const [errorText,setErrorText] = useState('')

  useEffect(()=> {
    if(typeof(field.selectPlaceholder) !== 'undefined'){
      setItemValue(field.selectPlaceholder)
    }
    if(typeof(errors[field.key]) !== 'undefined'){
      if(errors[field.key] !== '' && errors[field.key] !== null){
        setErrorStatus(true)
        setErrorText(errors[field.key])
      }
      else {
        setErrorStatus(false)
        setErrorText(errors[field.key])
      }
    }

  },[errors])

  const changeField = (e) => {
    let key = field.key
    let obj = {}
    obj[key] = e.target.value
    setFormValues({...formValues,...obj})
    let newErrorObj = {}
    newErrorObj[field.key] = validate(e.target.value,field.key)
    setErrors({...errors,...newErrorObj})
    setItemValue(e.target.value)
  }


  if(field.type === 'input'){
    return (
      <div>
        <TextField error={errorStatus} helperText={errorText} value={itemValue} onChange={changeField}  key={field.key} type={field.inputType} label={field.label}/>
      </div>
    )
  }
  else if(field.type === 'date'){
    return (
      <div>
        <DatePickerComp error={errorStatus} helperText={errorText} setValue={changeField} value={itemValue} key={field.key} label={field.label}/>
      </div>
    )
  }
  else if(field.type === 'select'){
    return(
      <div>
        <Select
            error={errorStatus}
            labelId={field.key}
            id={field.key}
            value={itemValue}
            label={field.label}
            onChange={changeField}
          >
        {field.selectPlaceholder ?  <MenuItem key="placeholder" value={field.selectPlaceholder}>{field.selectPlaceholder}</MenuItem> : null}

          {field.options.map((option) => {
            return (
              <MenuItem key={option.optionValue} value={option.optionValue}>{option.optionLabel}</MenuItem>
            )
          })}
          </Select>
      </div>
    )
  }
}

export default FormItem
