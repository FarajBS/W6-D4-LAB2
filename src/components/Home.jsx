import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home() {
    
    const [img, setImage] = useState([])

    useEffect(() => {
        axios.get(`https://6657369e9f970b3b36c865b0.mockapi.io/Images/`)
        .then(function (response) {
            setImage(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        }, [])
    });
    
    return (
        <>
        <div className='flex md:flex md:flex-row flex-col flex-wrap justify-center items-center w-screen my-5'>
            {img.map((item, index) => {
                return(
                    <div key={index}>
                            <div className="card card-compact bg-base-100 w-96 shadow-xl border-3 border-black">
                                <figure>
                                    <img
                                    src={item.image}
                                    alt="Shoes" />
                                </figure>

                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{item.name}</h2>
                                    <Link to={`/info/${item.id}`}><button className="text-2xl w-full btn btn-primary">More</button></Link>
                                </div>
                            </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}
