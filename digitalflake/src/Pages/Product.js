import React from 'react';
import '../css/Category.css';
import {useNavigate} from 'react-router-dom';
import { TbBoxSeam } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


const Products=()=>{

    const navigate = useNavigate();

    const handleAddNewClick=()=>{
        navigate('/App/AddProduct');
    }
    return(
        <>
            <div className='catmain'>
                <div className='cathead'>
                    <h3 id='head'> <TbBoxSeam id='proicon'/>Product</h3>
                    <input id='searchbar'></input>
                    <button id='addbtn' onClick={handleAddNewClick}>Add Now</button>
                </div>

                <div className='catsub'>
                    <table className='cattable'>
                        <tr id='cattablehead'>
                            <th style={{width:'80px'}}>Id</th>
                            <th>Name</th>
                            <th>Pack Size</th>
                            <th>Category</th>
                            <th>MRP</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th style={{width:'150px'}}></th>
                        </tr>

                        <tr id='cattabledata'>
                            <td className='tabledata'>kxjfh</td>
                            <td className='tabledata'>kgjfh</td>
                            <td className='tabledata'>kxjfh</td>
                            <td className='tabledata'>kxjfh</td>
                            <td className='tabledata'>kxjfh</td>
                            <td className='tabledata'>kxjfh</td>
                            <td className='tabledata'>kxjfh</td>
                            <td className='tabledata'><FaEdit id='rowicon'/> <RiDeleteBin5Line id='rowicon'/></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Products;