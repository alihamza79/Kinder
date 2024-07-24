import React, { useState } from "react";
import Header from "../../../../Components/Header";
import Sidebar from "../../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import db from "../../../../appwrite/Services/dbServices"; // Import Appwrite database service
import { toast, ToastContainer } from "react-toastify"; // Import toast notifications
import FeatherIcon from "feather-icons-react";
import 'react-toastify/dist/ReactToastify.css';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

const AddRepresentative = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the representation date ID from the URL
    const [hospital, setHospital] = useState('');
    const [address, setAddress] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [doctors, setDoctors] = useState('');
    const [loading, setLoading] = useState(false);
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation checks
        if (!hospital.trim()) {
            toast.error("Hospital is required", { autoClose: 2000 });
            setLoading(false);
            return;
        }

        if (!address.trim()) {
            toast.error("Address is required", { autoClose: 2000 });
            setLoading(false);
            return;
        }

        if (!telephoneNumber.trim()) {
            toast.error("Telephone number is required", { autoClose: 2000 });
            setLoading(false);
            return;
        }

        if (!doctors.trim()) {
            toast.error("Doctors are required", { autoClose: 2000 });
            setLoading(false);
            return;
        }

        setLoading(true);

        try {
            // Store data in Appwrite database
            const representative = await db.representatives.create({
                hospital,
                address,
                telephoneNumber,
                doctors,
            });

            // Update the representationDates collection with the new representative ID
            const representationDate = await db.representationDates.get(id);
            const updatedRepresentatives = [...representationDate.representativesCollection, representative.$id];
            await db.representationDates.update(id, { representativesCollection: updatedRepresentatives });

            toast.success('Representative added successfully!', { autoClose: 2000 });
            navigate(`/representationdates/${id}/representatives`);
        } catch (error) {
            toast.error('Error adding representative: ' + error.message, { autoClose: 2000 });
            console.error('Error adding representative: ', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddressChange = async (e) => {
        const value = e.target.value;
        setAddress(value);

        if (value.length > 2) {
            try {
                const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=8f50230b46434772aae8fadc8d64a5b8`);
                const result = await response.json();
                setAutocompleteOptions(result.features || []);
            } catch (error) {
                console.error("Error fetching autocomplete options:", error);
            }
        } else {
            setAutocompleteOptions([]);
        }
    };

    const handleSelect = (description) => {
        setAddress(description);
        setAutocompleteOptions([]);
    };

    return (
        <div>
            <Header />
            <Sidebar
                id="menu-item4"
                id1="menu-items4"
                activeClassName="representatives"
            />
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/representationdates">Representation Dates</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to={`/representationdates/${id}/representatives`}>Representatives</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Add Representative</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Add Representative</h4>
                                                </div>
                                            </div>

                                            {/* Hospital */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Hospital <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={hospital}
                                                        onChange={(e) => setHospital(e.target.value)}
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>

                                            {/* Telephone */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Telephone <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={telephoneNumber}
                                                        onChange={(e) => setTelephoneNumber(e.target.value)}
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>

                                            {/* Doctors */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Doctors <span className="login-danger">*</span>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={doctors}
                                                        onChange={(e) => setDoctors(e.target.value)}
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>

                                            {/* Address */}
                                            <div className="col-12 col-md-12 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>
                                                        Address <span className="login-danger">*</span>
                                                    </label>
                                                    <Combobox onSelect={handleSelect}>
                                                        <ComboboxInput
                                                            value={address}
                                                            onChange={handleAddressChange}
                                                            className="form-control"
                                                            placeholder="Enter a location"
                                                        />
                                                        {autocompleteOptions.length > 0 && (
                                                            <ComboboxPopover>
                                                                <ComboboxList>
                                                                    {autocompleteOptions.map((option) => (
                                                                        <ComboboxOption
                                                                            key={option.properties.place_id}
                                                                            value={option.properties.formatted}
                                                                        />
                                                                    ))}
                                                                </ComboboxList>
                                                            </ComboboxPopover>
                                                        )}
                                                    </Combobox>
                                                </div>
                                            </div>

                                            {/* Submit/Cancel Button */}
                                            <div className="col-12">
                                                <div className="doctor-submit text-end">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary submit-form me-2"
                                                        disabled={loading}
                                                    >
                                                        {loading ? "Adding..." : "Add"}
                                                    </button>
                                                    <Link to={`/representationdates/${id}/representatives`}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary cancel-form"
                                                            disabled={loading}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRepresentative;
