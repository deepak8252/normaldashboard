import React from 'react'

const Navbar = () => {
  return (
    <div className='clip bg-blue-700 text-white bg-clip-content rounded-3xl min-h-56'>
        <div className='flex flex-col justify-center '>
            <div className='flex justify-between mx-4 my-4'>
                <div className="img flex flex-row items-center p-3 justify-center gap-5">
                    
                    <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt="" className=' rounded-full w-12 h-12' />
                    <div>
                    <h6>welcome</h6>
                    <span>rajesh</span>
                    </div>
                </div>
                <div>
                🎆
                </div>
            </div>
            <div className=' text-end px-3  mx-auto rounded-3xl text-black bg-white '>
                <input type="search" className=' outline-none border-none rounded-lg p-3' name="" id="" placeholder='search' />
              <span className=''>🔍</span>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar