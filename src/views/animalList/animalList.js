  import React, { useState, useEffect } from 'react'
  import axios from 'axios'
  import Modal from 'react-modal';

  import {
    CAvatar,
    CButton,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CToastClose
  } from '@coreui/react'

  import CIcon from '@coreui/icons-react'
  import {
    cilPeople,
  } from '@coreui/icons'
  import { type } from '@testing-library/user-event/dist/types/utility';

  const API_URL = 'https://animal-tinder-backend.vercel.app/shelter/editShelter';

  const fetchAnimals = async () => {
    const userFetchToken = localStorage.getItem("userToken");
    const response = await axios.get("https://animal-tinder-backend.vercel.app/shelter/getAnimals", {
      headers: { authorization: `Bearer ${userFetchToken}` },
    });
    return response.data.animals.map((zivotinja) => zivotinja);
  };

  const AnimalList = (animal) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [animals, setAnimals] = useState([]);
    const [newAnimal, setNewAnimal] = useState({});
    const [items, setItems] = useState({
      name: "",
      sex: "",
      breed: "",
      age: "",
      type: "",
      description: "",
    });

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
          `https://animal-tinder-backend.vercel.app/shelter/editAnimal/${selectedAnimal._id}`,
          {
            name: items.name,
            sex: items.sex,
            age: items.age,
            breed: items.breed,
            description: items.description,
            type: items.type,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setItems({
          name: "",
            sex: "",
            age: "",
            breed: "",
            description: "",
            type: "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    const customStyles = {
      content: {
        width: "700px",
        height: "700px",
        top: "130px",
        left: "38%"
      },
    }

    useEffect(() => {
      const fetchAndSetAnimals = async () => {
        const animalsData = await fetchAnimals();
        setAnimals(animalsData);
      };
      fetchAndSetAnimals();
    }, []);

    const openModal = (animal) => {
      setSelectedAnimal(animal);
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    const openModalEdit = (animal) => {
      setSelectedAnimal(animal);
      setIsOpenEdit(true);
      console.log(selectedAnimal)
    };

    const closeModalEdit = () => {
      setIsOpenEdit(false);
    };

    const handleAnimalChange = (e) => {
      const { name, value } = e.target;
      setNewAnimal((prevAnimal) => ({ ...prevAnimal, [name]: value }));
    };

    const addAnimal = async () => {
      try {
        const userFetchToken = localStorage.getItem("userToken");
        const response = await axios.post(API_URL, newAnimal, {
          headers: { authorization: `Bearer ${userFetchToken}` },
        });
        console.log(response.data);
        setNewAnimal({});
        const animalsData = await fetchAnimals();
        setAnimals(animalsData);
      } catch (error) {
        console.error(error);
      }
    };

      return (
        <>

          <Modal
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <div className="modalWrapper">
              <img
                alt=""
                className="movie-image-modal"

              ></img>
              <div onClick={closeModal} className="close-container">
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <CToastClose onClick={closeModal} className="me-2 m-auto" />
                <svg  onClick={() => openModalEdit(selectedAnimal)}
    key={selectedAnimal?._id} style={{width:"25px",height:"25px",float:"right"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
              </div>
              <div className="movie-text-modal">
                <h1 className="movie-title-modal">Detalji o: {selectedAnimal?.name}</h1>
                <img src={selectedAnimal?.images}></img>
                <p>
                  <b>Godine :</b> {selectedAnimal?.age}
                </p>
                <p className="movie-vote-modal">
                  <b>Vrsta životinje : </b>{selectedAnimal?.type}
                </p>
                <p>
                  <b>Spol : </b>{selectedAnimal?.sex}
                </p>
                <p>
                  <b>Rasa : </b>{selectedAnimal?.breed}
                </p>
                <p>
                  <b>Opis : </b>{selectedAnimal?.description}
                </p>
              </div>
            </div>
          </Modal>

          <Modal
            style={customStyles}
            isOpen={modalIsOpenEdit}
            onRequestClose={closeModalEdit}
            contentLabel="Example Modal"
          >
              <div className="modalWrapper">
              <img
                alt=""
                className="movie-image-modal"

              ></img>
              <div onClick={closeModal} className="close-container">
                <div className="leftright"></div>
                <div className="rightleft"></div>
                <CToastClose onClick={closeModalEdit} className="me-2 m-auto" />
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} className="movie-text-modal">
                <h1 className="movie-title-modal">Uređivanje životinje : {selectedAnimal?.name}</h1>
                <label style={{marginTop:"30px",fontSize:"20px"}} htmlFor="phone-num">
                    <p>Trenutno Ime: {selectedAnimal?.name} </p>
                  </label>
                <input 
                    style={{width:"400px"}}
                    placeholder=" Promijeni Ime životinje"
                    name='name'
                    type="name"
                    id="name"
                    value={items.name}
                    onChange={setItems({ ...items, [items.name]: items.name.target.value })}
                  ></input>
                  <label style={{marginTop:"30px",fontSize:"20px"}} htmlFor="phone-num">
                    <p>Trenutne Godine: {selectedAnimal?.age} </p>
                  </label>
                <input 
                    style={{width:"400px"}}
                    placeholder=" Promijeni Godine Životinje "
                    name='age'
                    type="age"
                    id="age"
                    value={items.age}
                    onChange={setItems({ ...items, [items.age]:items.age.target.value })}
                  ></input>
                  <label style={{marginTop:"30px",fontSize:"20px"}} htmlFor="phone-num">
                    <p>Trenutni Spol: {selectedAnimal?.sex} </p>
                  </label>
                <input 
                
                    style={{width:"400px"}}
                    placeholder=" Promijeni Spol Životinje "
                    name='sex'
                    type="sex"
                    id="sex"
                    value={items.sex}
                    onChange={setItems({ ...items, [items.sex]:items.sex.target.value })}
                  ></input>
                  <label style={{marginTop:"30px",fontSize:"20px"}} htmlFor="phone-num">
                    <p>Trenutna Rasa: {selectedAnimal?.breed} </p>
                  </label>
                <input 
                    style={{width:"400px"}}
                    placeholder=" Promijeni Rasu Životinje "
                    name='breed'
                    type="breed"
                    id="breed"
                    value={items.breed}
                    onChange={setItems({ ...items, [items.breed]:items.breed.target.value })}
                  ></input>
                    <label style={{marginTop:"30px",fontSize:"20px"}} htmlFor="phone-num">
                    <p>Trenutni Opis: {selectedAnimal?.description} </p>
                  </label>
                  <input 
                    style={{width:"400px"}}
                    placeholder=" Promijeni Opis Životinje "
                    name='description'
                    type="description"
                    id="description"
                    value={items.description}
                    onChange={setItems({ ...items, [items.items]:items.description.target.value })}
                  ></input>
                  <label style={{marginTop:"30px",fontSize:"20px"}} htmlFor="phone-num">
                    <p>Trenutna Vrsta: {selectedAnimal?.type} </p>
                  </label>
                <input 
                    style={{width:"400px"}}
                    placeholder=" Promijeni Vrstu Životinje "
                    name='type'
                    type="type"
                    id="type"
                    value={items.type}
                    onChange={setItems({ ...items, [items.type]:items.type.target.value })}
                  ></input>
                  <CButton onClick={handleSubmit} style={{marginTop:"30px"}}>Sačuvaj Promjene</CButton>
              </div>
            </div>
          </Modal>


          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell>Ime životinje </CTableHeaderCell>
                <CTableHeaderCell className="text-center">Godine</CTableHeaderCell>
                <CTableHeaderCell>Spol</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {animals.map((animal) =>
              (

                <CTableRow
                  onClick={() => openModal(animal)}
                  key={animal._id}
                  style={{ cursor: "pointer" }}
                >
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={animal.images} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{animal.name}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <div>{animal.age}</div>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{animal.sex}</div>
                  </CTableDataCell>
                </CTableRow>
              ))}


            </CTableBody>
          </CTable></>
      )
    }
    export default AnimalList
