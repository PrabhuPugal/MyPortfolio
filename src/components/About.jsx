import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
              I am currently in my 3rd year of my M.Sc Software Systems Course.
              I am studying at <strong><em>Coimbatore Institute of Technology, Coimbatore.</em></strong></p>
              <p className='text-xl mt-5'>
              I did my schooling at <b><i>Nirmala Matha Convent Matriculation Higher Secondary School, Coimbatore.</i></b>
              My short term goal is to get internship as a Software Developer in any firm. And my long term goal is to work in a dream company that pays 30LPA.
              In these two years time to get prepared and become a Industry ready developer.
            </p>
            <br/>
        </div>
    </div>
  )
}

export default About