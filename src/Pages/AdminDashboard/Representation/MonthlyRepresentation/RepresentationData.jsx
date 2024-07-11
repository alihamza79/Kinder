import React, { useEffect, useState } from 'react';
import db from '../../../../appwrite/Services/dbServices';

const RepresentationData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRepresentationDates = async () => {
      try {
        const { documents } = await db.representationDates.list();
        const data = await Promise.all(
          documents.map(async doc => {
            const representatives = await Promise.all(
              doc.representativesCollection.map(async repId => {
                try {
                  const repData = await db.representatives.get(repId);
                  return repData;
                } catch (error) {
                  console.error(`Error fetching representative with ID ${repId}:`, error);
                  return null; // Return null if there's an error fetching this representative
                }
              })
            );
            return {
              ...doc,
              representatives: representatives.filter(rep => rep !== null), // Filter out any null values
            };
          })
        );
        setData(data);
      } catch (error) {
        console.error('Error fetching representation dates:', error);
      }
    };

    fetchRepresentationDates();
  }, []);

  return (
    <div>
      <h2>Representation Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RepresentationData;
