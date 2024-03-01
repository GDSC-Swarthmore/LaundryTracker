import React, { useState, useEffect } from 'react';

function SelectLocationPage() {
  const [selectedDorm, setSelectedDorm] = useState(null);
  const [names, setNames] = useState(Array.from({ length: selectedDorm ? selectedDorm[1] : 0 }, () => ''));
  const [enteredNames, setEnteredNames] = useState(Array.from({ length: selectedDorm ? selectedDorm[1] : 0 }, () => ''));
  const [timers, setTimers] = useState(Array.from({ length: selectedDorm ? selectedDorm[1] : 0 }, () => 0));

  useEffect(() => {
    if (selectedDorm) {
      const intervalId = setInterval(() => {
        setTimers(prevTimers => prevTimers.map((timer, index) => timer + 1));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [selectedDorm]);

  const dorms = [
    ['Alice Paul', 2],
    ['Danawell', 3],
    ['David Kemp', 4],
    ['Hallowell', 2],
    ['Mertz', 3],
    ['Mary Lyon', 4],
    ['Palmer', 2],
    ['Parrish', 4],
    ['Pittenger', 3],
    ['Roberts', 2],
    ['Wharton', 3],
    ['Willets', 4],
    ['Woolman', 2],
    ['Worth', 3]
  ];
  
  const handleDormSelection = (dorm) => {
    setSelectedDorm(dorm);
    setEnteredNames(Array.from({ length: dorm[1] }, () => ''));
    setTimers(Array.from({ length: dorm[1] }, () => 0));
  };

  const handleNameChange = (index, event) => {
    const updatedNames = [...enteredNames];
    updatedNames[index] = event.target.value;
    setEnteredNames(updatedNames);
  };

  const saveName = (index) => {
    if (!selectedDorm || !enteredNames[index]) return;
    const newNames = [...names];
    newNames[index] = enteredNames[index];
    setNames(newNames);
    setEnteredNames(Array.from({ length: selectedDorm[1] }, () => ''));
    // Reset the timer associated with the saved name
    const newTimers = [...timers];
    newTimers[index] = 0;
    setTimers(newTimers);
  };

  const removeName = (index) => {
    if (!selectedDorm || !names[index]) return;
    const newNames = [...names];
    newNames[index] = '';
    setNames(newNames);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {!selectedDorm ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Select Laundry Room</h1>
          <p className="mb-8">This is where you can select a laundry room for tracking.</p>
          <div className="grid grid-cols-3 gap-4">
            {dorms.map((dorm, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDormSelection(dorm)}
              >
                {dorm[0]}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedDorm(null)}>
              Back to Dorm Selection
            </button>
            <div className="flex flex-wrap -m-4">
              {/* Render washing machines here */}
              {Array.from({ length: selectedDorm[1] }, (_, index) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                  <img
                    className="h-40 mx-auto"
                    src="https://www.svgrepo.com/show/69604/washing-machine.svg"
                  />
                  <div className="mt-4">
                    <h3 className="washing">Laundry Machine {index + 1}</h3>
                    {names[index] ? (
                      <div>
                        <p>{names[index]}</p>
                        <p>{formatTime(timers[index])}</p>
                        <button
                          onClick={() => removeName(index)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                        >
                          Remove Name
                        </button>
                      </div>
                    ) : (
                      <div>
                        <input
                          type="text"
                          value={enteredNames[index]}
                          onChange={(event) => handleNameChange(index, event)}
                          placeholder="Enter your name"
                          className="border border-gray-400 rounded px-3 py-2 mt-2"
                        />
                        <button
                          onClick={() => saveName(index)}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2 mr-2"
                        >
                          Save Name
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SelectLocationPage;












// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function SelectLocationPage() {
//   const [selectedDorm, setSelectedDorm] = useState(null);

//   const dorms = [
//     'Alice Paul',
//     'Danawell',
//     'David Kemp',
//     'Hallowell',
//     'Mertz',
//     'Mary Lyon',
//     'Palmer',
//     'Parrish',
//     'Pittenger',
//     'Roberts',
//     'Wharton',
//     'Willets',
//     'Woolman',
//     'Worth'
//   ];
  

//   const handleDormSelection = (dorm) => {
//     setSelectedDorm(dorm);
//   };

//   return (
//     <div>
//       {!selectedDorm ? (
//         <div>
//           <h1 className="text-2xl font-bold mb-4">Select Laundry Room</h1>
//           <p className="mb-8">This is where you can select a laundry room for tracking.</p>
//           <div className="grid grid-cols-3 gap-4">
//             {dorms.map((dorm, index) => (
//               <button
//                 key={index}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => handleDormSelection(dorm)}
//               >
//                 {dorm}
//               </button>
//             ))}
//           </div>
//         </div>
//       ) : (
//         // <div>

//         //   <h1 className="text-2xl font-bold mb-4">{selectedDorm}</h1>
//         //   <p>This is where you can display washing machines for {selectedDorm}.</p>
//         //   {/* Render washing machines here */}

//           // <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedDorm(null)}>
//           //   Back to Dorm Selection
//           // </button>

//         // </div>

//         <section class="text-gray-600 body-font">
//           <div class="container px-5 py-24 mx-auto">

//           <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedDorm(null)}>
//             Back to Dorm Selection
//           </button>

//             <div class="flex flex-wrap -m-4">

//               {/* the machines */}
//               <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//                 <img
//                   className="h-40 mx-auto"
//                   src="https://www.svgrepo.com/show/69604/washing-machine.svg"
//                 />
//                 <div class="mt-4">
//                   <h3 class="washing">CATEGORY</h3>
//                   {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//                   <p class="mt-1">$16.00</p> */}
//                 </div>
//               </div>

//               <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//                 <img
//                   className="h-40 mx-auto"
//                   src="https://www.svgrepo.com/show/69604/washing-machine.svg"
//                 />
//                 <div class="mt-4">
//                   <h3 class="washing">CATEGORY</h3>
//                   {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//                   <p class="mt-1">$16.00</p> */}
//                 </div>
//               </div>

//               <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//                 <im
//                   className="h-40 mx-auto"
//                   src="https://www.svgrepo.com/show/69604/washing-machine.svg"
//                 />
//                 <div class="mt-4">
//                   <h3 class="washing">CATEGORY</h3>
//                   {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//                   <p class="mt-1">$16.00</p> */}
//                 </div>
//               </div>

//               <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//                 <img
//                   className="h-40 mx-auto"
//                   src="https://www.svgrepo.com/show/69604/washing-machine.svg"
//                 />
//                 <div class="mt-4">
//                   <h3 class="washing">CATEGORY</h3>
//                   {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
//                   <p class="mt-1">$16.00</p> */}
//                 </div>
//               </div>


//             </div>
//           </div>
//       </section>
//       )}
//     </div>
//   );
// }

// export default SelectLocationPage;
