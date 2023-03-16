import React from 'react'
import wifi from '../assets/wifi.svg'
import welcome_drinks from '../assets/welcome_drinks.svg'
import car_rental from '../assets/car_rental.svg'
import resort_spa from '../assets/resort_spa.svg'

const menu = [
    {
        image: welcome_drinks,
        text: 'Welcome Drinks'
    },
    {
        image: car_rental,
        text: 'Car Rental'
    },
    {
        image: resort_spa,
        text: 'Resort & Spa'
    },
    {
        image: wifi,
        text: 'Free WIFI'
    }
]

function Menu() {
  return (
    <div className='flex w-full gap-10 mt-20 justify-center'>
        {menu.map(ele => {
            return (
                <div className='flex items-center gap-5 text-[#565656] text-base'>
                    <div className='w-[74px] h-[74px] rounded-[50%] bg-[#ff75000a] flex justify-center items-center'>
                        <img src={ele.image} />
                    </div>
                    <span className='w-[65px]'>{ele.text}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Menu