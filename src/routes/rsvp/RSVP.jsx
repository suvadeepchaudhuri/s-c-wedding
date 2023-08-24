import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Dna } from 'react-loader-spinner'

function RSVP() {
  const navigate = useNavigate();
  const [rsvpCode, setRSVPCode] = useState('');
  const [adminClickCount, setAdminClickCount] = useState(0);
  const [attending, setAttending] = useState('Yes');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAdminClickCount(0);
  }, []);

  const handleRSVPCodeChange = (event) => {
    setRSVPCode(event.target.value);
  };

  const handleAttendingChange = (event) => {
    setAttending(event.target.value);
    if (event.target.value === "No") {
      setNumberOfGuests(0)
    }
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(parseInt(event.target.value));
  };

  const makeUpdateRequest = async () => {
    try {
      const updateBody = {
        Code: rsvpCode,
        GuestCount: numberOfGuests
      };
      const response = await fetch('https://rsvp-storage-interation.azurewebsites.net/api/RsvpInteraction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'RsvpAction': 'update'
        },
        body: JSON.stringify(updateBody)
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const responseBody = await response.json();
      return responseBody;
    } catch (error) {
      console.error('Error making POST request:', error);
      setSuccessMessage('');
      setErrorMessage('Sorry. Cannot locate RSVP code. Please try again or contact Suva and Clara.');
      throw error;
    }
  }

  const handleRSVPSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    await makeUpdateRequest()
      .then((response) => {
        var guest = `${response.firstName} ${response.lastName}`
        setSuccessMessage('Thank You, ' + guest + '! Your RSVP has been recorded.');
        setErrorMessage('');
      })
      .then(() => setIsLoading(false));
  };

  const getForm = () => {
    return (<form onSubmit={handleRSVPSubmit}>
      <label className="block mb-2">
        Enter RSVP Code:
        <input type="text" value={rsvpCode} onChange={handleRSVPCodeChange} className="block w-full text-black px-2 py-1 border border-gray-300 rounded" />
      </label>
      <div className="mb-4">
        <label className="block mb-2">
          Attending:
        </label>
        <div className="flex items-center">
          <label className="mr-4">
            <input type="radio" value="Yes" checked={attending === 'Yes'} onChange={handleAttendingChange} className="mr-2" />
            Yes
          </label>
          <label>
            <input type="radio" value="No" checked={attending === 'No'} onChange={handleAttendingChange} className="mr-2" />
            No
          </label>
        </div>
      </div>
      {attending === 'Yes' ? (<div className="mb-4">
        <label className="block mb-2">
          Number of Guests(Including yourself):
        </label>
        <select value={numberOfGuests} onChange={handleNumberOfGuestsChange} className="block w-full text-black  px-2 py-1 border border-gray-300 rounded">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>) : (<></>)}
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">
        {isLoading ? <Dna
          visible={true}
          height="50"
          width="50"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /> : (
          'Submit RSVP'
        )}
      </button>
    </form>);
  }

  const handleEnterAdmin = () => {
    if (adminClickCount >= 10) {
      navigate("/rsvp/admin");
    }
    setAdminClickCount(adminClickCount + 1);
  }

  return (
    <div className="h-full min-h-screen flex-col justify-center text-white bg-blend-soft-light bg-fixed bg-cover" style={{ backgroundImage: `url('https://scwedassets.blob.core.windows.net/siteassets/bg5.png')` }}>

      <div className="p-4 xl:w-1/3 m-auto">
        <h2 className="text-2xl font-bold mb-4"><button className="cursor-default" onClick={handleEnterAdmin}>RSVP</button></h2>
        {getForm()}
        {successMessage && (
          <div className="flex flex-col justify-center items-center">
            <div className="text-xl font-bold my-4 p-2 bg-slate-800 border rounded border-white">{successMessage}</div>
            <img
              src='https://scwedassets.blob.core.windows.net/siteassets/cs.png'
              alt="Illustration of a couple"
              className="w-60 h-60 object-contain md:object-scale-down rounded"
            />
          </div>
        )}

        {errorMessage && <p className="p-2 mt-4 bg-white text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default RSVP;
