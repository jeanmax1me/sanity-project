import {ArrowUturnLeftIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

function StudioNavbar(props: any) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between p-5">
          <Link href="/" className="text-primary">
            <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
            Go To Website
          </Link>

          <div className="hidden md:flex p-5 rounded-lg justify-center border-2">
            <h1 className="font-bold text-white">Want to check the latest accomodation offers?</h1>
          <Link href="https://mariealicetravels.vercel.app"
          className="font-bold ml-2">
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
