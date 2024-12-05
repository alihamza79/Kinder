import React, { useState, useEffect } from "react";
import Header from "../../../../Components/Header";
import Sidebar from "../../../../Components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import FeatherIcon from "feather-icons-react";
import 'react-toastify/dist/ReactToastify.css';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

const EditRepresentative = () => {
    const navigate = useNavigate();
    const { id, repId } = useParams();
    const [hospital, setHospital] = useState('');
    const [address, setAddress] = useState('');
    const [telephoneNumber, setTelephoneNumber] = useState('');
    const [doctors, setDoctors] = useState('');
    const [loading, setLoading] = useState(false);
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const docRef = doc(db, "representatives", repId);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setHospital(data.hospital);
                    setAddress(data.address);
                    setTelephoneNumber(data.telephoneNumber);
                    setDoctors(data.doctors);
                } else {
                    toast.error("Representative not found!");
                    navigate(`/representationdates/${id}/representatives`);
                }
            } catch (error) {
                console.error("Error fetching representative:", error);
                toast.error("Error fetching data: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [repId, id, navigate]);

    const handleAddressChange = async (e) => {
        const value = e.target.value;
        setAddress(value);

        if (value.length > 2) {
            try {
                const response = await fetch(
                    `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=8f50230b46434772aae8fadc8d64a5b8`
                );
                const result = await response.json();
                setAutocompleteOptions(result.features || []);
            } catch (error) {
                console.error("Error fetching address suggestions:", error);
            }
        }
    };

    const handleSelect = (address) => {
        setAddress(address);
        setAutocompleteOptions([]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation checks
        if (!hospital.trim()) {
            toast.error("Hospital is required", { autoClose: 2000 });
            return;
        }

        if (!address.trim()) {
            toast.error("Address is required", { autoClose: 2000 });
            return;
        }

        if (!telephoneNumber.trim()) {
            toast.error("Telephone number is required", { autoClose: 2000 });
            return;
        }

        if (!doctors.trim()) {
            toast.error("Doctors are required", { autoClose: 2000 });
            return;
        }

        setLoading(true);

        try {
            await updateDoc(doc(db, "representatives", repId), {
                hospital,
                address,
                telephoneNumber,
                doctors,
            });

            sessionStorage.setItem('updateRepresentativeSuccess', 'true');
            navigate(`/representationdates/${id}/representatives`);
        } catch (error) {
            toast.error("Error updating representative: " + error.message);
            console.error('Error updating representative: ', error);
        } finally {
            setLoading(false);
        }
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
                                    <li className="breadcrumb-item active">Edit Representative</li>
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
                                                    <h4>Edit Representative</h4>
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
                                                        {loading ? "Updating..." : "Update"}
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

export default EditRepresentative;
