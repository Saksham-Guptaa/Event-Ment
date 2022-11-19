import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How We Work</p>
            <p>NewsRoom</p>
            <p>New</p>
            <p>EventMent Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Top Hosts</p>
            <p>Top Consumers</p>
            <p>Best destination</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>New Property</p>
            <p>Referals</p>
            <p>Contact Hosts</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Contact</p>
            <p>E-mail</p>
            <p>Adds</p>
        </div>
    </div>
  )
}

export default Footer