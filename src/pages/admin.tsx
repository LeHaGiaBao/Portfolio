import { useEffect } from "react"
import { useAppDispatch } from "@/hook/useAppDispatch"
import { useAppSelector } from "@/hook/useAppSelector"
import { getCurrentUser } from "@/redux/features/userSlice"
import Error from "@/containers/Admin/Error"
import Navbar from "@/layouts/Navbar"
import AdminPage from "@/containers/Admin/AdminPage"
import Footer from "@/layouts/Footer"

export default function Admin() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.value)

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])

    if (!user) {
        return (
            <>
                <Error />
            </>
        )
    }

    return (
        <>
            <AdminPage />
        </>
    )
}