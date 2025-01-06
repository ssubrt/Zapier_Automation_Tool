"use client"

import { useRouter } from 'next/navigation'
import { PrimaryButton } from './Button/PrimaryButton'
import { SecondaryButton } from './Button/SecondaryButton'
import Feature from './Feature'




const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className='flex justify-center'>
        <div className='text-4xl font-bold  text-center pt-8 max-w-xl'>
          Automate as fast as you can type

        </div>


      </div>

      <div className='flex justify-center pt-2'>
        <div className='text-xl font-normal  text-center pt-8 max-w-2xl'>
          Turn chaos into smooth operations by automating workflows yourself—no developers,
          no IT tickets, no delays. The only limit is your imagination.

        </div>
      </div>

      <div className='flex justify-center pt-4'>
        <div className='flex ' >
          <PrimaryButton onClick={() => { 
            router.push('/signup')
          }} size='big'> Get Started free</PrimaryButton>
          <div className='pl-4'>
            <SecondaryButton onClick={() => { }} size='big' >Contact Sales</SecondaryButton>
          </div>

        </div>

      </div>

      <div className='flex justify-center pt-4'>
        <Feature title={'free forever '} substring={' for core features'} />
        <Feature title={'More apps  '} substring={' than any other platforms'} />
        <Feature title={'Cutting Edge '} substring={' AI Features'} />

      </div>

    </div>

  )
}

export default Hero