import React, { useEffect, useState } from 'react';
import { db } from '../../../../config/firebase';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const RepresentationData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRepresentationData = async () => {
            try {
                setLoading(true);
                // First, get all representation dates
                const datesQuery = query(
                    collection(db, "representationDates"),
                    orderBy("fromDate", "desc")
                );
                const datesSnapshot = await getDocs(datesQuery);
                
                // For each date, get its representatives
                const fullData = await Promise.all(
                    datesSnapshot.docs.map(async dateDoc => {
                        const repsQuery = query(
                            collection(db, "representatives"),
                            where("dateId", "==", dateDoc.id)
                        );
                        const repsSnapshot = await getDocs(repsQuery);
                        
                        const representatives = repsSnapshot.docs.map(repDoc => ({
                            id: repDoc.id,
                            ...repDoc.data()
                        }));

                        return {
                            id: dateDoc.id,
                            ...dateDoc.data(),
                            fromDate: dateDoc.data().fromDate.toDate(),
                            toDate: dateDoc.data().toDate.toDate(),
                            representatives
                        };
                    })
                );

                setData(fullData);
            } catch (error) {
                console.error('Error fetching representation data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepresentationData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Representation Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default RepresentationData;
