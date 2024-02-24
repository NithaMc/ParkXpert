import React from 'react';
import './parkingspace.css';
import { useLocation} from 'react-router-dom';


const Parkingspot =({spotStatus})=>{
  const spotClasses = {
    available: 'bg-white border border-green-500',
    reserved: 'bg-gray-300',
  };
}



const ParkingSpaces = ({ companyData }) => {
  // const value =useParams()
  const value=useLocation()
  console.log(value);

  // Extract block and space data from companyData
  // const { companyBlocks } = companyData;

  // Function to generate parking spots based on block and space data
  const generateParkingSpots = () => {

    <div>

    </div>

    // Initialize an empty array to store parking spots JSX
    let parkingSpots = [];

   
    return parkingSpots;
  };

  return (
    <div className='parking-maindiv'>
      <div className='parking-secdiv'>
        <h1>
          <strong>Choose a parking spot</strong>
        </h1>
        <div className='parking-div'>
          {/* <div className='twowheeler-div'>
            <p> <strong>Spot for Two-Wheelers</strong> </p> */}
            {/* <div className=' border h-20 w-14 '>
              <div></div>
            </div>
          </div> */}
          <div className='fourwheeler-div'>
            <p>
              <strong>Spot for Four-Wheelers</strong>
            </p>
          

{
  value.state.companyBlock.map((block, index) => {
    const parkingSpots = [];
    for (let x = 0; x < parseInt(block.space); x++) {
      parkingSpots.push(
        <div key={`block-${index}-spot-${x}`} className='w-20 h-12 bg-white m-5'>{x}</div>
      );
    }
    return (
      <div key={`block-${index}`} className=' overflow-scroll flex-wrap flex gap-7 h-[500px]  w-[670px]  p-1 m-3 spots'>
        {parkingSpots}
      </div>
    );
  })
}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpaces;
