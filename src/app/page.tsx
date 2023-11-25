import HomePage from '@/pages/HomePage'
import { NextApiResponse } from 'next'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'

export default function Home() {
  return (
    <HomePage/>
  )
}
