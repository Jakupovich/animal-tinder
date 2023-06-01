import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFace,
  cilFactory,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Korisnik',
    to: '/korisnik',
    icon: <CIcon icon={cilFactory} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Lista životinja',
    to: '/animalList',
    icon: <CIcon icon={cilFactory} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Dodaj životinju',
    to: '/addAnimal',
    icon: <CIcon icon={cilFactory} customClassName="nav-icon" />,
  },
  
]

export default _nav
