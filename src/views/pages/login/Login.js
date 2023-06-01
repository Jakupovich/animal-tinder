
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {


  const [postErr, setPostErr] = useState('')
  const [logingInFinished, setLogingInFinished] = useState(false)
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) })

  const [data,setData] = useState({
    email:"",
    password:""
  })

  const navigate = useNavigate()

  const fetchData = () => {

    return axios
      .post("https://animal-tinder-backend.vercel.app/shelter/login", {
        email: data.email,
        password: data.password
      })
      .then((response) => {
        if (response.status === 200) {
          setLogingInFinished(true)
          storeToken(response.data.token); // ovdje pozovi funkciju za spremanje tokena
          navigate('/animalList') 
        }
      })
      .catch((error) => {
        console.log(error);
        setPostErr('Invalid username or password')
      });
      
  }
  
  const storeToken = async (token) => {
    try {
      localStorage.setItem("userToken", token);
    } catch (error) {
      console.log(error);
    }
  };

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }


  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={(e) => handle(e)}>
                    <h1>Prijava</h1>
                    <p className="text-medium-emphasis">Prijavite se na vaš račun</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput onChange={(e) => handle(e)} id="email" value={data.email} placeholder="E-mail" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Lozinka"
                        autoComplete="current-password"
                        onChange={(e) => handle(e)} id="password"

                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={fetchData} color="primary" className="px-4">
                          Prijavi se
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
