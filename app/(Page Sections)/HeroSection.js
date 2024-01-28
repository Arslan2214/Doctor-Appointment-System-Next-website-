import Action_Button from '@/components/Action_Button'


const HeroSection = () => {
  return (
    <div id='herosection' className="flex gap-3 flex-col justify-center px-20 bg-cover bg-fixed bg-[url('https://bootstrapmade.com/demo/templates/Medilab/assets/img/hero-bg.jpg')] h-[calc(70vh)] w-full">
        <span className='text-5xl font-semibold text-blue-600'>WELCOME TO MEDILAB</span>
        <p className="text-zinc-600 text-semilight">We are team of talented designers making websites with Bootstrap</p>
        <div className='w-32'>
        <Action_Button text="Get&nbsp;started" />
        </div>
    </div>
  )
}

export default HeroSection