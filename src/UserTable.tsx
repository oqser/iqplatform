import React, {useEffect, useState} from "react";
import DataTable from "./DataTable.tsx";


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 200 },
];

const userTableStyles = {
    height: '631px'
}

const UserTable = () => {
    const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json) => setUsers(json));
    },
    []);

    return (
        <DataTable
            rows={users}
            columns={columns}
            loading={!users.length}
            sx={userTableStyles}
        />
    )
}

export default UserTable