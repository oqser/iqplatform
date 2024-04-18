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


/*
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 30},
    {
        field: 'username',
        headerName: 'User name',
        width: 150,
        editable: true,
    },
    {
        field: 'name',
        headerName: 'Full name',
        width: 150,
        editable: true,
    },

    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 200,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone number',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
];

const rows = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', phone: "1-770-736-8031 x56442"},
    { id: 2, name: 'Ervin Howell', username: 'Antonette',email: 'Shanna@melissa.tv', phone: "010-692-6593 x09125"},
    { id: 3, name: 'Clementine Bauch',username: 'Samantha',email: 'Nathan@yesenia.net', phone: "1-463-123-4447"},
    { id: 4, name: 'Patricia Lebsack',username: 'Karianne', email:'Julianne.OConner@kory.org', phone: "493-170-9623 x156"},
    { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', phone: "(254)954-1289"},
    { id: 6, name:'Mrs. Dennis Schulist',username: 'Leopoldo_Corkery',email: 'Karley_Dach@jasper.info', phone: "1-477-935-8478 x6430"},
    { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', phone: "210.067.6132"},
    { id: 8, name: 'Nicholas Runolfsdottir V', username:'Maxime_Nienow',email: 'Sherwood@rosamond.me', phone: "586.493.6943 x140}"},
    { id: 9, name:'Glenna Reichert',username: 'Delphine', email: 'Chaim_McDermott@dana.io', phone: "(775)976-6794 x41206"},
    { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz',  phone: "024-648-3804"}
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
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
 */

// import {useEffect, useState} from "react";
// import * as React from 'react';
// import { DataGrid } from "@mui/x-data-grid";
// import {responsiveFontSizes} from "@mui/material";
// import DataTable from
//
//     const rows = [
//         { id: 1, col1: 'Hello', col2: 'World' },
//         { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//         { id: 3, col1: 'MUI', col2: 'is Amazing' },
//     ];
//
//     const columns = [
//         { field: 'col1', headerName: 'Column 1', width: 150 },
//         { field: 'col2', headerName: 'Column 2', width: 150 },
//     ];
//
//     const UserTable = () => {
//
//
//         useEffect(() => {
//             fetch('https://jsonplaceholder.typicode.com/users')
//                 .then(response => response.json())
//                 .then(json => console.log(json))
//         }, [])
//
//         return (
//             <UserTable
//                 rows={rows}
//                 columns={columns}
//             />
//         );
//     }
// export default UserTable