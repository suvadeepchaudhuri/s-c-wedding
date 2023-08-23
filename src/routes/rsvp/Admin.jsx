import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function Admin() {
    const [adminCode, setAdminCode] = useState('');
    const [view, setView] = useState('default');
    const [items, setItems] = useState([]);
    const [rsvpCode, setRsvpCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isAscending, setIsAscending] = useState(false);
    const [activeColumn, setActiveColumn] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const resetState = () => {
        setRsvpCode('');
        setFirstName('');
        setLastName('');
        setIsAscending(false);
        setActiveColumn('');
    };

    const handleAdminCodeChange = (e) => {
        console.log("handleAdminCodeChange");
        setAdminCode(e.target.value);
    };

    const handleAddNewItem = () => {
        setView('add');
        resetState();
    };

    const handleFetchTableData = async () => {
        setIsLoading(true);
        const response = await fetch('https://rsvp-storage-interation.azurewebsites.net/api/RsvpInteraction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'RsvpAction': 'read',
                'AdminHandshake': adminCode
            }
        });

        if (!response.ok) {
            setIsLoading(false);
            Store.addNotification({
                title: "Request Failed.",
                message: "Failed to fetch table data. Please check the Admin code and try again.",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
            throw new Error(`Request failed with status: ${response.status}`);
        }

        let data = await response.json();
        data = data.map(item => ({
            ...item,
            isAttending: item.isAttending ? "Yes" : "No",
        }));
        setIsLoading(false);
        return data;
    };

    const handleViewList = async () => {
        try {
            if (items.length == 0) {
                const data = await handleFetchTableData();
                setItems(data);
            }

            setView('list');
            resetState();
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleRefreshTable = async () => {
        try {
            const data = await handleFetchTableData();
            setItems(data);
            setActiveColumn('');
            setIsAscending(false);
            Store.addNotification({
                title: "Fetched List",
                message: "Fetched latest RSVP table.",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }
            });
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleRsvpCodeChange = (e) => {
        setRsvpCode(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleSubmitNewItem = async () => {
        try {
            const createBody = {
                Code: rsvpCode,
                FirstName: firstName,
                LastName: lastName,
            };
            const response = await fetch('https://rsvp-storage-interation.azurewebsites.net/api/RsvpInteraction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'RsvpAction': 'create',
                    'AdminHandshake': adminCode
                },
                body: JSON.stringify(createBody),
            });
            if (response.ok) {
                setRsvpCode('');
                setFirstName('');
                setLastName('');
                Store.addNotification({
                    title: "RSVP Guest Created",
                    message: "Successfully added Guest to RSVP table.",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }
                });
            } else {
                Store.addNotification({
                    title: "Request Failed.",
                    message: "Failed to add RSVP Guest. Please check the Admin code and try again.",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
            }
        } catch (error) {
            console.error('Error submitting item:', error);
        }
    };

    // useEffect(() => {
    //     if (view === 'list') {
    //         handleViewList();
    //     }
    // }, [view]);

    const getHeader = () => {
        return (
            <div className="p-4 xl:w-1/3 m-auto">
                <label className="block mb-2">
                    Enter Admin Code:
                    <input
                        type="password"
                        className="block w-full text-black px-2 py-1 border border-gray-300 rounded"
                        placeholder="Admin code"
                        value={adminCode}
                        onChange={handleAdminCodeChange}
                    />
                </label>
                <div className="flex items-center justify-center my-4">
                    <button className={"disabled:bg-gray-400 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 mx-2 rounded" + (view === "add" ? " outline outline-black outline-offset-2 outline-2" : "")} disabled={!(adminCode && adminCode.length > 5)} onClick={handleAddNewItem}>Add a new invitee</button>
                    <button className={"disabled:bg-gray-400 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-800 text-white py-1 px-2 mx-2 rounded" + (view === "list" ? " outline outline-black outline-offset-2 outline-2" : "")} disabled={!(adminCode && adminCode.length > 5)} onClick={handleViewList}>View Guest List</button>
                </div>
                <hr className="my-4"></hr>
            </div>
        );
    }

    const getAddGuestForm = () => {
        return (
            <div className="p-4 xl:w-1/2 m-auto flex items-center">
                <label className="block mb-2 mr-4">
                    Create a unique RSVP code
                    <input
                        type="text"
                        className="block w-full text-black px-2 py-1 border border-gray-300 rounded"
                        placeholder="RSVP code"
                        value={rsvpCode}
                        onChange={handleRsvpCodeChange}
                    />
                </label>

                <label className="block mb-2 mr-4">
                    Guest First Name
                    <input
                        type="text"
                        className="block w-full text-black px-2 py-1 border border-gray-300 rounded"
                        placeholder="First name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </label>

                <label className="block mb-2 mr-4">
                    Guest Last Name
                    <input
                        type="text"
                        className="block w-full text-black px-2 py-1 border border-gray-300 rounded"
                        placeholder="Last name"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </label>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded" onClick={handleSubmitNewItem}>Submit</button>
            </div>
        );
    }

    const handleReorder = (key) => {
        setActiveColumn(key);
        setIsAscending(!isAscending);
        const sortedItems = [...items].sort((a, b) => {
            const aValue = a[key].toString();
            const bValue = b[key].toString();

            if (isAscending) {
                return aValue.localeCompare(bValue);
            } else {
                return bValue.localeCompare(aValue);
            }
        });
        setItems(sortedItems);
    }

    const getGuestList = () => {
        return (
            <div className="p-4 xl:w-1/2 m-auto">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded" onClick={handleRefreshTable}>Refresh Table</button>

                <table className='mt-4 border border-slate-800'>
                    <thead>
                        <tr>
                            <th className={`border border-gray-400 px-2 ${activeColumn === 'code' ? 'bg-blue-400': 'bg-gray-200'}`}><button onClick={() => handleReorder('code')}>RSVP code {activeColumn === 'code' && isAscending ? '\u25Bc' : activeColumn === 'code' && !isAscending ? '\u25B2' : ''}</button></th>
                            <th className={`border border-gray-400 px-2 ${activeColumn === 'firstName' ? 'bg-blue-400': 'bg-gray-200'}`}><button onClick={() => handleReorder('firstName')}>First Name {activeColumn === 'firstName' && isAscending ? '\u25Bc' : activeColumn === 'firstName' && !isAscending ? '\u25B2' : ''}</button></th>
                            <th className={`border border-gray-400 px-2 ${activeColumn === 'lastName' ? 'bg-blue-400': 'bg-gray-200'}`}><button onClick={() => handleReorder('lastName')}>Last Name {activeColumn === 'lastName' && isAscending ? '\u25Bc' : activeColumn === 'lastName' && !isAscending ? '\u25B2' : ''}</button></th>
                            <th className={`border border-gray-400 px-2 ${activeColumn === 'isAttending' ? 'bg-blue-400': 'bg-gray-200'}`}><button onClick={() => handleReorder('isAttending')}>isAttending {activeColumn === 'isAttending' && isAscending ? '\u25Bc' : activeColumn === 'isAttending' && !isAscending ? '\u25B2' : ''}</button></th>
                            <th className={`border border-gray-400 px-2 ${activeColumn === 'guestCount' ? 'bg-blue-400': 'bg-gray-200'}`}><button onClick={() => handleReorder('guestCount')}>Guest Count {activeColumn === 'guestCount' && isAscending ? '\u25Bc' : activeColumn === 'guestCount' && !isAscending ? '\u25B2' : ''}</button></th>
                            <th className={`border border-gray-400 px-2 ${activeColumn === 'lastUpdated' ? 'bg-blue-400': 'bg-gray-200'}`}><button onClick={() => handleReorder('lastUpdated')}>Last Updated {activeColumn === 'lastUpdated' && isAscending ? '\u25Bc' : activeColumn === 'lastUpdated' && !isAscending ? '\u25B2' : ''}</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td className='px-2 border' >{item.code}</td>
                                <td className='px-2 border' >{item.firstName}</td>
                                <td className='px-2 border' >{item.lastName}</td>
                                <td className='px-2 border' >{item.isAttending}</td>
                                <td className='px-2 border' >{item.guestCount}</td>
                                <td className='px-2 border' >{item.lastUpdated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }



    return (
        <div className="h-full min-h-screen flex-col justify-center items-center">
            {getHeader()}
            <div className="p-4 xl:w-1/3 m-auto flex justify-center items-center my-2">
                <Dna
                    visible={isLoading}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>


            {view === 'add' && (
                getAddGuestForm()
            )}

            {view === 'list' && (
                getGuestList()
            )}
        </div>
    );

}

export default Admin;