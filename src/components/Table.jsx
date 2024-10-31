import { useState,useEffect } from 'react';

const data = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", age: 28 },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", age: 34 },
    { id: 3, name: "Mike Johnson", email: "mikejohnson@example.com", age: 45 },
    { id: 4, name: "Emily Brown", email: "emilybrown@example.com", age: 25 },
    { id: 5, name: "Sarah Connor", email: "sarahconnor@example.com", age: 32 },
    { id: 6, name: "Tom Hanks", email: "tomhanks@example.com", age: 39 },
    { id: 7, name: "Emma Watson", email: "emmawatson@example.com", age: 30 },
    { id: 8, name: "Will Smith", email: "willsmith@example.com", age: 50 },
    { id: 9, name: "Chris Evans", email: "chrisevans@example.com", age: 41 },
    { id: 10, name: "Scarlett Johansson", email: "scarlettj@example.com", age: 36 },
    { id: 11, name: "Bruce Wayne", email: "brucewayne@example.com", age: 35 },
    { id: 12, name: "Clark Kent", email: "clarkkent@example.com", age: 33 },
    { id: 13, name: "Diana Prince", email: "dianaprince@example.com", age: 29 },
];

function table() {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [displayData, setDisplayData] = useState([]);

    useEffect(() => {
        updateTable(rowsPerPage);
    }, [rowsPerPage]);

    const updateTable = (rows) => {
        setDisplayData(data.slice(0, rows));
    };
  return (
    <>
    <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">DaisyUI Responsive Table</h1>

            <div className="flex justify-between items-center mb-4">
                <label htmlFor="rowsPerPage" className="text-lg">Rows per page:</label>
                <select
                    id="rowsPerPage"
                    className="select select-bordered w-20"
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full table-zebra text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {displayData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.age}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>
  )
}

export default table