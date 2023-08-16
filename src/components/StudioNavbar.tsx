import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

import MAT from "./logomat.png"

function StudioNavbar(props: any) {
  return (
    <>
      <div className="bg-slate-900">
        <div className="flex items-center justify-between p-5">
          <Link href="/" className="text-white">
            <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-white" />
            Go To Website
          </Link>

          <div className="hidden md:flex p-5 rounded-lg justify-center border-2">
            <h1 className="font-bold text-gray-200 mr-2">
              Want to check the latest accomodation offers?
            </h1>
            
            <Image alt="matlogo" src={MAT} width="30" height="30" />
            <Link
              target="_blank"
              href="https://mariealicetravels.vercel.app"
              className="font-bold ml-2 underline text-[#ff69b4]"
            >
              MarieAliceTravels
            </Link>
          </div>
        </div>
      </div>
      <div>{props.renderDefault(props)}</div>
    </>
  )
}

export default StudioNavbar
