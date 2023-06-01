import React from 'react'

import {
  CImage,
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import AngularImg from 'src/assets/images/angular.jpg'
import dog1 from 'src/assets/images/react.jpg'
import dog2 from 'src/assets/images/dog2.jpg'
import VueImg from 'src/assets/images/vue.jpg'
import {
  CButton,
  CCardFooter,
  CCardGroup,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
const animalDetails = () => {
  return (
    <div style={{ paddingLeft: '200px' }}>
      <CCard className="mb-3" style={{ width: '900px' }}>
        <CCarousel controls>
          <CCarouselItem style={{ width: 900 + 'px', height: 472 + 'px' }}>
            <CImage className="d-block w-100 h-100" src={dog1} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem style={{ width: 900 + 'px', height: 472 + 'px' }}>
            <CImage className="d-block w-100 h-100" src={dog2} alt="slide 1" />
          </CCarouselItem>
        </CCarousel>
        <CCardBody>
          <CCardTitle>Pujdo</CCardTitle>
          <CCardText>
            <h6>Type :</h6>
            <h6>Name :</h6>
            <h6>Age :</h6>
            <h6>Sex :</h6>
            <h6>Breed :</h6>
            <h6>Description : </h6>
          </CCardText>
        </CCardBody>
      </CCard>
    </div>
  )
}
export default animalDetails
