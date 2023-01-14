import React, { useEffect } from "react";

import Papa from "papaparse";

const CSVInput = ({handleSubmit}) => {
    const handleFileUpload = () => {
        const input = document.getElementById('input');
        const [file] = input.files;
        if (file) {
            Papa.parse(URL.createObjectURL(file), {download: true, complete: (result) => handleSubmit(Papa.unparse(result.data))});
        }
    };
    useEffect(() => {
        document.getElementById('input').addEventListener('change', handleFileUpload);
    }, []);
    return <input type="file" id="input" accept=".csv" />;
}

export default CSVInput;