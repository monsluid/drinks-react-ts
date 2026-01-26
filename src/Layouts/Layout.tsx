import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import Modal from "../components/Modal"

import { useMainStore } from "../stores/MainStore"
import Notification from "../components/Notification"

export const Layout = () => {

  const loadFavorites = useMainStore((state) => state.loadFavorites);
  useEffect(() => {
    loadFavorites();
  },[])

  return (
    <>
      <Header />
      <main className="mx-auto container py-16">
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  )
}
