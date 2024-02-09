
const Form = () => {
  return (
<>

    <div className=" -mt-12 rounded-3xl relative py-5 z-50 mx-auto bg-white shadow-lg w-72 ">
    <h2 className="text-black p-3 capitalize text-center z-50">Appoint letter</h2>
        <div className=" rounded-2xl">
            <form action="">
                <div className=" w-48 mx-auto rounded-2xl p-2 my-2 border border-black">
                    <input type="text" name="" id="" className="border-none outline-none " placeholder="enter your name" />
                </div>
                <div className="w-48 mx-auto rounded-2xl p-2 my-2 border border-black">
                    <input type="date" name="" id="" className="border-none outline-none " placeholder="choose data & time" />
                </div>
                <div className=" w-48 mx-auto rounded-2xl p-2 my-2 border border-black">
                    <input type="text" name="" id="" className="border-none outline-none " placeholder="enter your name" />
                </div>
                <div className="w-48 mx-auto rounded-2xl p-2 my-2 border border-black">
                    <input type="text" name="" id="" className="border-none outline-none " placeholder="enter your name" />
                </div>
                <div className="w-48 mx-auto rounded-2xl p-2 my-2 border border-black">
                    <input type="text" name="" id="" className="border-none outline-none " placeholder="enter your name" />
                </div>
                <div className=" shadow-2xl shadow-cyan-300 text-center  bg-blue-700 text-white w-48 mx-auto rounded-2xl p-2 my-4 border border-black">
                    <button>Book Appoiment</button>
                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default Form