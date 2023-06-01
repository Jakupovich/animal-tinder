import React, { useState } from 'react';
import axios from 'axios';
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

const AddAnimal = () => {
  const [animalData, setAnimalData] = useState({
    type: '',
    name: '',
    age: '',
    sex: '',
    breed: '',
    description: '',
    images: [],
  });
console.log(animalData)
  const handleInputChange = (e) => {
    const newdata = { ...animalData };
    newdata[e.target.name] = e.target.value;
    setAnimalData(newdata);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userFetchToken = localStorage.getItem('userToken');
      const response = await axios.post(
        'https://animal-tinder-backend.vercel.app/shelter/addAnimal',
        animalData,
        {
          headers: { Authorization: `Bearer ${userFetchToken}` },
        }
      );
      console.log(response.data);
      setAnimalData({
        type: '',
        name: '',
        age: '',
        sex: '',
        breed: '',
        description: '',
        images: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCard className="mb-4">
                  <CCardHeader>
                    <strong>Forma za dodavanje životinje</strong> <small></small>
                  </CCardHeader>
                  <CCardBody>
                    <p className="text-medium-emphasis small">
                      Place one add-on or button on either side of an input. You may also place one
                      on both sides of an input. Remember to place <code>&lt;CFormLabel&gt;</code>s
                      outside the input group.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Ime</CInputGroupText>
                        <CFormInput
                          placeholder="Ime životinje"
                          aria-label="Ime"
                          aria-describedby="basic-addon1"
                          name="name"
                          value={animalData.name}
                          onChange={handleInputChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Vrsta</CInputGroupText>
                        <CFormInput
                          placeholder="Vrsta životinje"
                          aria-label="Vrsta"
                          aria-describedby="basic-addon1"
                          name="type"
                          value={animalData.type}
                          onChange={handleInputChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">Rasa</CInputGroupText>
                      <CFormInput
                        placeholder="Rasa zivotinje"
                        aria-label="Rasa"
                        aria-describedby="basic-addon1"
                        name='breed'
                        value={animalData.breed}
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Godine</CInputGroupText>
                      <CFormInput
                        placeholder="Broj"
                        aria-label="Godine"
                        aria-describedby="basic-addon1"
                        name='age'
                        value={animalData.age}
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Pol</CInputGroupText>
                      <CFormInput
                        placeholder="Musko/Zensko"
                        aria-label="Pol"
                        aria-describedby="basic-addon1"
                        name='sex'
                        value={animalData.sex}
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">E-mail</CInputGroupText>
                      <CFormInput
                        placeholder="E-mail vlasnika"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup>
                      <CFormInput
                        type="file"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <CButton
                        type="button"
                        color="secondary"
                        variant="outline"
                        id="inputGroupFileAddon04"
                      >
                        Upload
                      </CButton>
                    </CInputGroup>
                    <CFormLabel htmlFor="basic-url"></CFormLabel>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Opis životinje</CInputGroupText>
                      <CFormInput
                        placeholder="Opis"
                        aria-label="Godine"
                        aria-describedby="basic-addon1"
                        name='description'
                        value={animalData.description}
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CButton className='mt-3' onClick={(event)=>handleSubmit(event)}>Dodaj životinju</CButton>
                    </form>
                  </CCardBody>
                </CCard>
              </CRow>

              <br />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddAnimal
