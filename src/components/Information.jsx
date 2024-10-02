import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Information() {
    let { id } = useParams();

    const [img, setImage] = useState([])

    useEffect(() => {
        axios.get(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/${id}`)
        .then(function (response) {
            setImage(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }, [id])
    });
    
    return (
        <>
              
                
                    <div  className='flex justify-center items-center  w-screen h-screen'>
                            <div className="card card-compact bg-base-100 w-96 shadow-xl flex flex-row md:flex-row">
                                <figure>
                                    <img
                                    src={img.image}
                                    alt="Shoes" />
                                </figure>

                                <div className="card-body flex flex-col items-center justify-center">
                                    <h2 className="bg-gray-200 rounded-xl p-2 card-title text-center text-gray-500">{img.name}</h2>
                                    <h2 className="bg-gray-200 rounded-xl p-2 card-title text-center text-gray-500">{img.status}</h2>
                                    <h2 className="bg-gray-200 rounded-xl p-2 card-title text-center text-gray-500">{img.status}</h2>
                                    <h2 className="bg-gray-200 rounded-xl p-2 card-title text-center text-gray-500">{img.species}</h2>
                                    <h2 className="bg-gray-200 rounded-xl p-2 card-title text-center text-gray-500">{img.gender}</h2>
                                    <h2 className="bg-gray-200 rounded-xl p-2 card-title text-center text-gray-500">{img.hair}</h2>
                                    <h2 className="bg-gray-200 rounded-xl p-2 card-title text-center text-gray-500">{img.origin}</h2>

                                    <Link to={`/home`}><button className=" text-2xl btn btn-primary w-full">Back</button></Link>
                                </div>
                            </div>
                    </div>
            </>
    )
}
