


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SelectLocationPage() {
  const [selectedDorm, setSelectedDorm] = useState(null);

  const dorms = [
    'Alice Paul',
    'Danawell',
    'David Kemp',
    'Hallowell',
    'Mertz',
    'Mary Lyon',
    'Palmer',
    'Parrish',
    'Pittenger',
    'Roberts',
    'Wharton',
    'Willets',
    'Woolman',
    'Worth'
  ];
  

  const handleDormSelection = (dorm) => {
    setSelectedDorm(dorm);
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
                {dorm}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // <div>

        //   <h1 className="text-2xl font-bold mb-4">{selectedDorm}</h1>
        //   <p>This is where you can display washing machines for {selectedDorm}.</p>
        //   {/* Render washing machines here */}

          // <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedDorm(null)}>
          //   Back to Dorm Selection
          // </button>

        // </div>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">

          <button className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => setSelectedDorm(null)}>
            Back to Dorm Selection
          </button>

            <div class="flex flex-wrap -m-4">

              {/* the machines */}
              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <img
                  className="h-40 mx-auto"
                  src="https://www.svgrepo.com/show/69604/washing-machine.svg"
                />
                <div class="mt-4">
                  <h3 class="washing">CATEGORY</h3>
                  {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1">$16.00</p> */}
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <img
                  className="h-40 mx-auto"
                  src="https://www.svgrepo.com/show/69604/washing-machine.svg"
                />
                <div class="mt-4">
                  <h3 class="washing">CATEGORY</h3>
                  {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1">$16.00</p> */}
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <img
                  className="h-40 mx-auto"
                  src="https://www.svgrepo.com/show/69604/washing-machine.svg"
                />
                <div class="mt-4">
                  <h3 class="washing">CATEGORY</h3>
                  {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1">$16.00</p> */}
                </div>
              </div>

              <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                <img
                  className="h-40 mx-auto"
                  src="https://www.svgrepo.com/show/69604/washing-machine.svg"
                />
                <div class="mt-4">
                  <h3 class="washing">CATEGORY</h3>
                  {/* <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p class="mt-1">$16.00</p> */}
                </div>
              </div>


            </div>
          </div>
      </section>


      )}
    </div>
  );
}

export default SelectLocationPage;
