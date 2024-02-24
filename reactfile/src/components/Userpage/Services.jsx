import React from 'react'
import '../About.css'
import carr from '../../image/carhelp.jpg'
import plan from "../../image/parkingplan.png"


const Services = () => {
  return (
    <>
    <div>
      <p className='m-20'>The important role of car park within an office building, shopping center, hospital or airport is often underestimated. In many cases, the car park provides the first and the last impression for visitors and poor experience can leave them vowing never to return.

Car parks are ‘front door’ of any venue and a well-designed car park that is brightly lit with clear signage and effective traffic flow will always leads to customer satisfaction and repeat business – which translates into business for your tenants and an improved financial yield on your property. Secure Parking believes in maximizing your revenue, while giving comfortable and spacious parking, and reducing your worries. It is for this endeavor that Secure Parking provides a vast range of services that enable the car park to built in the most efficient manner to serve everybody with ease. The consultancy services are supported with state-of-art simulations model like ‘TURN CHECK’ and ‘VISSIM’. These are used worldwide for traffic analysis.</p>
    </div>

    <div className='div flex'>
        <img src={plan} alt="" width={250} />
      <div className='secdiv'>
       

<h2 className='txt'>Parking Strategy & Design Review</h2>
      <p >
      The parking strategy outlines the planning principles, strategic intent and primary issues to be considered when designing the car park. A design review is conducted on the proposed car park plans highlighting operational and functional issues. A proper design will ensure that the car park is safe, easy to use and provides maximum convenience.

Parking is not just about optimizing space utilization in the building. Equally important is the traffic flow in & out of the development which could create bottlenecks, making the destination customer avoids. Consultancy division of Secure Parking approaches any project via following stages and recommends various site-specific traffic & parking solutions.

The vast database acquired while operating car parks across India, helps us to realistically assess any car park, provide best fit solution, root out future operational inefficiencies and increase its effective utilization, in the design and planning stage itself.
      </p>
      </div>
    </div>

    
 
    {/* Solve with parking */}



                <div  className='div flex '>


                 <div className='secdiv'>
                <h1 className='text-black txt'>  Issues You Can Solve With a Parking App</h1>
            Let's figure out what kind of problem your parking app can solve.

            Car parking mobile app development solves four common issues. Let’s explore each of them below.

            <h2 className='head  '> 1. Locate Free Spaces</h2>
            <span className='span mb-24 '>
            Sometimes drivers may experience difficulties with finding a free spot in an open space. That’s when parking app development solutions come in handy. They mark the available spots so that drivers can park their vehicles quickly and effortlessly. Additionally, such apps can offer them turn-by-turn directions to the closest car-park lots and inform them about fees, availability, rules, fines, and more. Moreover, if an app has a parking reservation feature, drivers can pay and book a space in advance.
            </span><br />
            <span className='span mb-14'>
            UCLA parking specialist Donald Shoup has found out that from 15% to 74% of traffic problems result from inability or time-consuming car-park search. Parking app features that allow finding nearby parking lots or reserving them in advance help reduce traffic jams. </span>

            <h2 className='head'>2. Multi-Space Parking Meters</h2>
            <span className='span mb-14'>
            Well, dealing with mazes to find a spot that’s already taken is challenging. Meanwhile, discovering some fellow settled in two spaces is a whole new level of rage. With a car-park solution at hand, staff can see space allocated for a specific car. In case of double parking, they can notify a driver, resulting in better management.
            </span>
            <h2 className='head'>3. Confusing Rules</h2>
            <span className='span mb-14'>
            Each parking lot operates by its own rules: short-term booking (up to four hours) and long-term booking (more than four hours). Drivers wanting to know how parking lots charge their customers will definitely benefit from using car-park applications.
            </span>

            <h2 className='head'>4. Decrease Air Contamination </h2>
            <span className='span mb-14'>
            Parking app development solutions save drivers from spending too much time looking for a vacant parking spot. Moreover, now they do not have to deviate from straight road direction and cause air pollution.
            </span> <br />
            <span className='span mb-14'>
            Commercial vehicles spend up to 28% of the trip time cruising to find a free parking space, so such platforms can help cities lower the ecological footprint.
            </span> <br/>
            Now that we’ve uncovered the core issues a car parking mobile app development solves, it’s time for revealing principles of how a parking service works.
                    </div>
            <img src={carr} alt="100px"/>
                </div>
            
  
{/* // Environmental management */}

  
            <div className='div flex '>
                <div className='enviro'>
                <h1 className='text-black txt'>Environmental Mangement</h1>
                Secure Parking can implement a range of initiatives that will assist a building owner in minimizing the environmental impact of the car park. This is necessary for LEED, GRIHA, IGBC and other green certification.

                </div>
                    

            </div>
  
  
    </>
  
  
  )
}
export default Services;