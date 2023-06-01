import React, { useState, useEffect } from 'react';
import './korisnik.css';
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

const Korisnik = () => {
  const [user, setUser] = useState({});
  const [newEmail, setNewEmail] = useState('');
  const shelterAcc = localStorage.getItem('shelterAccount');
  const [items, setItems] = useState({
    email: '',
    telephone: '',
    location: '',
    name: '',
  });

  useEffect(() => {
    const fetchShelter = async () => {
      const token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(
          'https://animal-tinder-backend.vercel.app/shelter/getShelter',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShelter();
  }, []);

  const handleInputChange = (e) => {
    const newdata = { ...items };
    newdata[e.target.name] = e.target.value;
    console.log(newdata);
    setItems(newdata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken');
    try {
      const response = await axios.post(
        'https://animal-tinder-backend.vercel.app/shelter/editShelter',
        {
          email: items.email,
          telephone: items.telephone,
          location: items.location,
          name: items.name,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
      setUser(response.data);
      setItems({
        email: '',
        telephone: '',
        location: '',
        name: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CRow>
        <CCol xs>
          <CRow>
            <div id="everything">
              <h1>Uređivanje profila</h1>

              <form >
                <label htmlFor="name">
                  <p> Trenutno ime: {user.name}</p>
                </label>
                <input
                  onChange={handleInputChange}
                  value={items.name}
                  name="name"
                  placeholder="Promijeni ime:"
                  type="text"
                  id="name"
                />


                <label htmlFor="email">
                  <p>Trenutni E-mail: {user.email}</p>
                </label>
                <input
                  placeholder=" Promijeni Email: "
                  name='email'
                  type="email"
                  id="email"
                  value={items.email}
                  onChange={handleInputChange}
                />

                <label htmlFor="phone-num">
                  <p>Trenutni Broj Telefona: {user.telephone} </p>
                </label>
                <input
                  placeholder=" Promijeni Broj Telefona: "
                  name='telephone'
                  type="tel"
                  id="phone-num"
                  pattern="+387[0-9]{2}[0-9]{3}[0-9]{3-4}"
                  value={items.telephone}
                  onChange={handleInputChange}
                ></input>

                <label htmlFor="comment">
                  <p>Trenutna Lokacija: {user.location} </p>
                </label>
                <textarea
                  placeholder=" Enter text here..."
                  name="location"
                  form="usrform"
                  id="comment"
                  spellCheck="true"
                  value={items.location}
                  onChange={handleInputChange}
                ></textarea>

                <CButton onClick={handleSubmit} className='mt-3'>Promijeni</CButton>
              </form>
            </div>
          </CRow>
        </CCol>
      </CRow>
    </>
  )
}

export default Korisnik
