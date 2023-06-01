import React from 'react'
import animalList from './views/animalList/animalList'
import addAnimal from './views/addAnimal/addAnimal'
import animalDetails from './views/animalDetails/animalDetails'
import Korisnik from './views/korisnik/Korisnik'
import Login from "./views/pages/login/Login"
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/korisnik', name: 'Korisnik', element: Korisnik },
  { path: '/animalList', name: 'animalList', element: animalList },
  { path: '/addAnimal', name: 'addAnimal', element: addAnimal },
  { path: '/animalDetails', name: 'animalDetails', element: animalDetails },
  { path: '/login', name: 'login', element: Login },
]

export default routes
