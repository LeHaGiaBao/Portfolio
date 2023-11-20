import React, { useState } from 'react';
import styles from './LoginContainer.module.scss'
import { MdOutlineAlternateEmail, MdOutlineFingerprint } from 'react-icons/md'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import { auth } from '@/config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { PATH_NAME } from '@/routes/pathName';
import Swal from 'sweetalert2'

function LoginContainer() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
                console.log(userCredential.user)
                const user = userCredential.user

                user.getIdToken().then((idToken) => {
                    console.log('idToken', idToken)

                    fetch('/api/create-session', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },

                        body: JSON.stringify({ idToken }),
                    }).then((res) => {
                        console.log('res', res)
                        window.location.href = PATH_NAME.ADMIN
                        Swal.fire({
                            icon: "success",
                            title: "Login successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                })
            })
            .catch((error) => {
                Swal.fire({
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                Swal.fire({
                    icon: 'error',
                    title: "Login unsuccessfully",
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(error.code)
            })
    }

    return (
        <>
            <section className="py-32 text-gray-900 dark:text-gray-300 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-8 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            Welcome Back!
                        </h1>
                    </div>
                    <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div className="overflow-hidden rounded-md shadow-md">
                            <div className="px-4 py-6 sm:px-8 sm:py-7">
                                <form onSubmit={onSubmit}>
                                    <div className="space-y-5">
                                        <div>
                                            <label className="text-base font-medium"> Email address </label>
                                            <div className="mt-2.5 relative focus-within:text-gray-600">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <MdOutlineAlternateEmail className="w-5 h-5" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter email to get started"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label className="text-base font-medium text-gray-900"> Password </label>
                                            </div>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <MdOutlineFingerprint className="w-5 h-5" />
                                                </div>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter your password"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" className="inline-flex items-center font-medium justify-center text-base w-full px-8 py-4 mr-2 mb-2 text-center rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                                                Log in
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginContainer;