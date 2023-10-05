import {useRouter} from 'next/router'
import en from '@/data/en/en'
import vi from '@/data/vi/vi'

export default function useTranslate() {
	const {locale} = useRouter()

	const trans = locale === 'en' ? en : vi

	return trans
}
