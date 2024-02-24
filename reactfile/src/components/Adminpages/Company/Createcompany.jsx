import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import './company.css';
import { errorToast, successToast } from '../../Toast/toastify';

const Createcompany = () => {
  const [data, setdata] = useState({
    companyName: '',
    companyAddress: '',
    companyHead: '',
    companyEmail: '',
    companyPassword: '',
    companyBlocks: [{ block: '', space: '' }],
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [imageData, setImageData] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImageData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {

  
    e.preventDefault();


 

    try {
      const formdata = new FormData();
      formdata.append('companyName', data.companyName);
      formdata.append('companyAddress', data.companyAddress);
      formdata.append('companyHead', data.companyHead);
      formdata.append('companyPassword', data.companyPassword);
      formdata.append('profile', imageData);
      formdata.append('companyEmail', data.companyEmail);
      formdata.append('companyBlocks', JSON.stringify(data.companyBlocks));

      const response = await axios.post('http://localhost:5001/api/company/', formdata);
      console.log(response.data);

      
      setdata({
        companyName: '',
        companyAddress: '',
        companyHead: '',
        companyEmail: '',
        companyPassword: '',
        companyBlocks: [{ block: '', space: '' }],
      });

      setImagePreview(null);
      setImageData(null);

      successToast('Company created successfully');
    } catch (error) {
      console.error('Error:', error);
      errorToast(error.message);
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'block' || name === 'space') {
      const updatedBlocks = [...data.companyBlocks];
      updatedBlocks[index][name] = value;
      setdata({ ...data, companyBlocks: updatedBlocks });
    } else {
      setdata({ ...data, [name]: value });
    }
  };

  const handleAddBlock = () => {
    const blockName = String.fromCharCode(65 + data.companyBlocks.length);
    setdata({
      ...data,
      companyBlocks: [...data.companyBlocks, { block: blockName, space: '' }],  });
  };

  const handleRemoveBlock = (index) => {
    const updatedBlocks = [...data.companyBlocks];
    updatedBlocks.splice(index, 1);
    setdata({ ...data, companyBlocks: updatedBlocks });
  };

  return (
    <div className="maindiv m-auto">
      <h2 className="head text-center">Create Company</h2>
      <div className="secdiv flex justify-center">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => handleChange(e)} className="input" name="companyName" placeholder="Company Name" value={data.companyName} required />
          <br />
<input type="text" onChange={handleChange} className="input" name="companyAddress" placeholder="Address" /> <br />
          <input type="text" onChange={handleChange} className="input" name="companyHead" placeholder="Head" /> <br />
<input type="email" onChange={handleChange} className="input" name="companyEmail" placeholder="email" /> <br />
<input type="password" onChange={handleChange} className="input" name="companyPassword" placeholder="password" /> <br />

          <div className="App">
            <h2 className="text-start">Add Profile</h2>
            <input className="input" name="image" placeholder="Add profile" accept="image/*" type="file" onChange={handleImage} />
            {imagePreview && <img src={imagePreview} style={{ width: '20px' }} alt="Preview" />}
          </div>
    
          <div className="" onClick={handleAddBlock}>
            <p>Add block</p>
          </div>
          <div className=" px-5 py-3">
            {data.companyBlocks.map((block, index) => (
              <div key={index} className="flex gap-3">
                <input type="number" onChange={(e) => handleChange(e, index)} className= "rounded-[18px] mx-3 px-3 py-4 my-2 w-full text-black" name="block" placeholder="Blocks" value={block.block} />
                <input type="number" onChange={(e) => handleChange(e, index)} className="rounded-[18px] w-full px-3 py-4 mx-3 my-2 text-black" name="space" placeholder="Spaces" value={block.space} />
                {index > 0 && (
                  <button type="button" onClick={() => handleRemoveBlock(index)} className="text-base text-[20px] px-3  rounded-[30px] flex justify-center pt-4 bg-black items-start sma;ll-button">
                    &#x2715;
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <button type="submit" className="input">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Createcompany;
