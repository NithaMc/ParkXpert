import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './companylogin.css'
import { errorToast, successToast } from '../../Toast/toastify';

const CompanyLogin = ({setStatus}) => {
    const [formData, setFormData] = useState({
        companyEmail: '',
        companyPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/company/login', formData);
            console.log(formData,"dtaat");
            console.log(response.data, 'response');
             if(response.data){
                setStatus(true);
                
             }else{
                setStatus(false);
            }
            successToast("Loggedin")
           
        } catch (error) {
            console.log(error);
            errorToast("company not found")
            // Handle any login errors here
        }
    };

    return (
        <div className='firstdiv'>

        <div className='nextsecdiv'>
            <form onSubmit={handleSubmit} className='formcontainer'>
                <input type="email" name='companyEmail' className='inputs' value={formData.companyEmail} onChange={handleChange} placeholder='Company Email' /> <br />
                <input type="password" name='companyPassword'className='inputs' value={formData.companyPassword} onChange={handleChange} placeholder='Password' /> <br />
                <button type='submit' className=' p-6 button mt-7 bg-orange-700'>Login</button>
            </form>
        </div>
        </div>
    );
};

export default CompanyLogin;
