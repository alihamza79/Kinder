import React, { useState, useRef } from "react";
import Header from "../../../../Components/Header";
import Sidebar from "../../../../Components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import db from "../../../../appwrite/Services/dbServices";
import TextEditor from "../../../../Components/TextEditor"; // Import the TextEditor component
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";

const AddMonthlyRepresentation = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        date: "",
        hospitalDetails: "",
        doctors: "",
        hospitalLocation: "",
    });
    const [autocompleteOptions, setAutocompleteOptions] = useState([]);

    const editorRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await db.monthlyRepresentation.create({
                date: formData.date,
                hospitalDetails: formData.hospitalDetails,
                doctors: formData.doctors,
                hospitalLocation: formData.hospitalLocation,
            });
            sessionStorage.setItem('addMonthlyRepresentationSuccess', 'true'); 
            navigate("/monthlyrepresentation");
        } catch (error) {
            toast.error("Error adding document: " + error.message, { autoClose: 2000 });
        } finally {
            setLoading(false);
        }
    };

    const handleLocationChange = async (e) => {
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            hospitalLocation: value,
        }));

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
        setFormData((prevData) => ({
            ...prevData,
            hospitalLocation: description,
        }));
        setAutocompleteOptions([]);
    };

    return (
        <div>
            <Header />
            <Sidebar
                id="menu-item4"
                id1="menu-items4"
                activeClassName="monthlyrepresentation"
            />
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/landingpage/monthlyrepresentation">Landing Page</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        <Link to="/landingpage/monthlyrepresentation">Monthly Representation</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Add Monthly Representation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-heading">
                                                    <h4>Add Monthly Representation</h4>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>Date <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="date"
                                                        name="date"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-12">
                                                <div className="form-group local-forms">
                                                    <label>Hospital Details <span className="login-danger">*</span></label>
                                                    <TextEditor 
                                                        ref={editorRef} 
                                                        onChange={(data) => setFormData(prevData => ({ ...prevData, hospitalDetails: data }))} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>Doctors <span className="login-danger">*</span></label>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        name="doctors"
                                                        value={formData.doctors}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-xl-4">
                                                <div className="form-group local-forms">
                                                    <label>Hospital Location <span className="login-danger">*</span></label>
                                                    <Combobox onSelect={handleSelect}>
                                                        <ComboboxInput
                                                            value={formData.hospitalLocation}
                                                            onChange={handleLocationChange}
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
                                            <div className="col-12">
                                                <div className="doctor-submit text-end">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary submit-form me-2"
                                                        disabled={loading}
                                                    >
                                                        {loading ? "Adding..." : "Add"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary cancel-form"
                                                        onClick={() => navigate("/monthlyrepresentation")}
                                                    >
                                                        Cancel
                                                    </button>
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

export default AddMonthlyRepresentation;
