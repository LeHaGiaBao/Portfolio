import type {NextApiRequest, NextApiResponse} from 'next'
import {getAuth} from 'firebase-admin/auth'

type Data = {
	error: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const {idToken} = req.body
	const expiresIn = 60 * 60 * 24 * 1000

	getAuth()
		.createSessionCookie(idToken, {expiresIn})
		.then(
			(sessionCookie) => {
				const options = {
					path: '/',
					maxAge: expiresIn,
					httpOnly: true,
					secure: true,
				}

				res.status(200).json({error: false})
			},
			(error) => {
				console.log('error', error)
				res.status(401).json({error: true})
			}
		)
}
