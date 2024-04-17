import './App.css'
// import {useEffect, useState} from "react";
// import * as React from 'react';
// import Button from '@mui/material/Button';

// function AppUsers() {
//     const [userList, setUserList] = useState([]);
//
//     useEffect(() =>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(data => setUserList(data));
//     }, []);
//
//     return (
//         <div>
//     <h1>User list</h1>
//     <ul>
//     {userList.map(user => (
//             <li key={user.id}>
//                 <p>
//                     {user.username}<br/>
//                     Name:
//                     {user.name}<br/>
//                     eMail: {user.email}<br/>
//                     Phone: {user.phone}
//     </p>
//     </li>
// ))}
//     </ul>
//     </div>
// );
// }
//
//
// export default AppUsers

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'},
    { id: 2, name: 'Ervin Howell', username: 'Antonette',email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine Bauch',username: 'Samantha',email: 'Nathan@yesenia.net' },
    { id: 4, name: 'Patricia Lebsack',username: 'Karianne', email:'Julianne.OConner@kory.org' },
    { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca' },
    { id: 6, name:'Mrs. Dennis Schulist',username: 'Leopoldo_Corkery',email: 'Karley_Dach@jasper.info' },
    { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz' },
    { id: 8, name: 'Nicholas Runolfsdottir V', username:'Maxime_Nienow',email: 'Sherwood@rosamond.me' },
    { id: 9, name:'Glenna Reichert',username: 'Delphine', email: 'Chaim_McDermott@dana.io' },
    { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz'}
];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}