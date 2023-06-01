import React from 'react'
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
} from '@coreui/react'
import { DocsExample } from 'src/components'
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
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
    },
  ]

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <CRow>
                <CCard className="mb-4">
                  <CCardHeader>
                    <strong>Forma za dodavanje zivotinje</strong> <small></small>
                  </CCardHeader>
                  <CCardBody>
                    <p className="text-medium-emphasis small">
                      Place one add-on or button on either side of an input. You may also place one
                      on both sides of an input. Remember to place <code>&lt;CFormLabel&gt;</code>s
                      outside the input group.
                    </p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Ime</CInputGroupText>
                      <CFormInput
                        placeholder="Ime zivotinje"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Vrsta</CInputGroupText>
                      <CFormInput
                        placeholder="Vrsta zivotinje"
                        aria-label="Vrsta"
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Rasa</CInputGroupText>
                      <CFormInput
                        placeholder="Rasa zivotinje"
                        aria-label="Rasa"
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Godine</CInputGroupText>
                      <CFormInput
                        placeholder="Broj"
                        aria-label="Godine"
                        aria-describedby="basic-addon1"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText id="basic-addon1">Pol</CInputGroupText>
                      <CFormInput
                        placeholder="Musko/Zensko"
                        aria-label="Pol"
                        aria-describedby="basic-addon1"
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

                    <CInputGroup>
                      <CInputGroupText>Opis zivotinje</CInputGroupText>
                      <CFormTextarea aria-label="With textarea"></CFormTextarea>
                    </CInputGroup>
                  </CCardBody>
                </CCard>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Ime životinje</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Godine</CTableHeaderCell>
                    <CTableHeaderCell>Spol</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
