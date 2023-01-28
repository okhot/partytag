
import Auth from './auth'
import {initializeApp} from 'firebase/app'
import { config } from '@/core/firebase/config'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


initializeApp(config.firebaseConfig)

export default function Home() {
  return (
      <Auth />
  )
}
