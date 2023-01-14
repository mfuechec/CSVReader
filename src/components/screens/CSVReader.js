import React, { useEffect, useState } from "react";

const CSVReader = ({filepath}) => {
    const [results, setResults] = useState("");
    useEffect(() => {
        if (filepath) {
            fetch("http://localhost:6969/fileupload", {
                method: "POST",
                body: filepath
            })
            .then((response) => response.text())
            .then((data) => setResults(JSON.stringify(data)))
        };
    }, [filepath])
    return (
        <>
        <div>{results}</div>
        </>
    )
}

export default CSVReader;