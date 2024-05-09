import React from 'react'
import { zestify } from '../../assets'

const Feature2 = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center">
        <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold">
          How it Works
        </button>
        <h1 className="text-4xl text-center font-bold md:mx-96 md:my-8">
          Powerful features to boost your productivity
        </h1>
      </div>
      <div>
        <img src={zestify} alt="" />
      </div>
    </div>
  )
}

export default Feature2