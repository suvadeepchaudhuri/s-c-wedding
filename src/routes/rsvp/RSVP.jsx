import React, { useState } from 'react';
import invite from './invite.jpg';

function RSVP() {
  const [rsvpCode, setRSVPCode] = useState('');
  const [guestName, setGuestName] = useState('');
  const [attending, setAttending] = useState('Yes');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRSVPCodeChange = (event) => {
    setRSVPCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    // Make network call to validate RSVP code and fetch guest information
    // Replace this with your actual API call code
    // Example: fetchGuestInformation(rsvpCode)
    // Assume the API call returns an object with guestName, attending, and numberOfGuests properties

    // Mock response for testing
    const mockGuestInfo = {
      guestName: 'John Doe',
      attending: 'Yes',
      numberOfGuests: 2
    };

    // Simulating network delay
    setTimeout(() => {
      setIsLoading(false);

      if (rsvpCode === 1234) {
        setGuestName(mockGuestInfo.guestName);
        setAttending(mockGuestInfo.attending);
        setNumberOfGuests(mockGuestInfo.numberOfGuests);
        setSuccessMessage('Hello ' + mockGuestInfo.guestName + ', You\'re Invited. Please RSVP below.');
        setErrorMessage('');
      } else {
        setGuestName('');
        setAttending('Yes');
        setNumberOfGuests(1);
        setSuccessMessage('');
        setErrorMessage('Invalid RSVP code. Please try again.');
      }
    }, 1000);
  };

  const handleAttendingChange = (event) => {
    setAttending(event.target.value);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(parseInt(event.target.value));
  };

  const handleRSVPSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    // Make network call to post RSVP information
    // Replace this with your actual API call code
    // Example: postRSVPInfo({ guestName, attending, numberOfGuests })

    // Simulating network delay
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Thank you, your RSVP has been successfully registered.');
      setErrorMessage('');
    }, 1000);
  };

  const getForm = () => {
    return (<form onSubmit={handleRSVPSubmit}>
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
      <div className="mb-4">
        <label className="block mb-2">
          Number of Guests:
        </label>
        <select value={numberOfGuests} onChange={handleNumberOfGuestsChange} className="block w-full text-black  px-2 py-1 border border-gray-300 rounded">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">
        {isLoading ? (
          <svg className="animate-spin h-4 w-4 mx-auto" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 1.647A7.962 7.962 0 0120 12h4a8 8 0 01-8 8v-4z" />
          </svg>
        ) : (
          'Submit RSVP'
        )}
      </button>
    </form>);

  }

  const getInvite = () => {
    return (
      <div className="border-white">
        <button className="border-white p-2 rounded bg-black text-white cursor-hover"><a href={invite} download="invite.jpg">Download Invitation Card</a></button>
      </div>
    );
  }

  return (
    <div className="h-full min-h-screen flex-col justify-center text-white bg-blend-soft-light bg-fixed bg-cover" style={{ backgroundImage: `url('https://scwedassets.blob.core.windows.net/siteassets/bg5.png')` }}>

      <div className="p-4 xl:w-1/3 m-auto">
        <h2 className="text-2xl font-bold mb-4">RSVP</h2>

        {!successMessage && (
          <form onSubmit={handleSubmit} className="mb-4">
            <label className="block mb-2">
              Enter RSVP Code:
              <input type="text" value={rsvpCode} onChange={handleRSVPCodeChange} className="block w-full text-black px-2 py-1 border border-gray-300 rounded" />
            </label>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded">
              {isLoading ? (
                <svg className="animate-spin h-4 w-4 mx-auto" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 1.647A7.962 7.962 0 0120 12h4a8 8 0 01-8 8v-4z" />
                </svg>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        )}

        {successMessage && (
          <div>
            <p className="text-xl font-bold mb-4">{successMessage}</p>
            {!successMessage.startsWith("Thank you") ? getForm() : getInvite()}

          </div>
        )}

        {errorMessage && <p className="p-2 bg-white text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default RSVP;
