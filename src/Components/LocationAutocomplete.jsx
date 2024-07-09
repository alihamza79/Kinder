// https://apidocs.geoapify.com/docs/geocoding/address-autocomplete/#quick-start
// Api for current project: https://myprojects.geoapify.com/api/PdbFVZenzSZyNpA1CZlu/keys
// use npm for installing combobox



import React, { useState } from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';

const LocationAutocomplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = async (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.length > 2) {
      try {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=8f50230b46434772aae8fadc8d64a5b8`);
        const result = await response.json();
        setSuggestions(result.features || []);
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (selectedValue) => {
    setValue(selectedValue);
    setSuggestions([]);
  };

  return (
    <div className="location-autocomplete">
      <form>
        <div className="form-group">
          <label htmlFor="location">Select the location</label>
          <Combobox onSelect={handleSelect}>
            <ComboboxInput
              id="location"
              value={value}
              onChange={handleInput}
              className="form-control"
              placeholder="Enter a location"
            />
            {suggestions.length > 0 && (
              <ComboboxPopover>
                <ComboboxList>
                  {suggestions.map((suggestion) => (
                    <ComboboxOption
                      key={suggestion.properties.place_id}
                      value={suggestion.properties.formatted}
                    />
                  ))}
                </ComboboxList>
              </ComboboxPopover>
            )}
          </Combobox>
        </div>
      </form>
    </div>
  );
};

export default LocationAutocomplete;
