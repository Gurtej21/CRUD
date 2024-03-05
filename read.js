// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Table } from 'semantic-ui-react';


// export default function Read() {
//     return (
//         <div>
//         <Table celled>
//                 <Table.Header>
//                     <Table.Row>
//                         <Table.HeaderCell>First Name</Table.HeaderCell>
//                         <Table.HeaderCell>Last Name</Table.HeaderCell>
//                         <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
//                         <Table.HeaderCell>Update</Table.HeaderCell>
//                         <Table.HeaderCell>Delete</Table.HeaderCell>
//                     </Table.Row>
//                 </Table.Header>

//                 <Table.Body>
//                             <Table.Row>
//                                 <Table.Cell>{data.firstName}</Table.Cell>
//                                 <Table.Cell>{data.lastName}</Table.Cell>
//                                 <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
//                                 <Link to='/update'>
//                                     <Table.Cell> 
//                                         <Button onClick={() => setData(data)}>Update</Button>
//                                     </Table.Cell>
//                                 </Link>
//                                 <Table.Cell>
//                                     <Button onClick={() => onDelete(data.id)}>Delete</Button>
//                                 </Table.Cell>
//                             </Table.Row>
//         </div>
//     )
// }



import React, { useEffect, useState } from 'react';
import axios from "axios";
import {
    Table,
    TableRow,
    TableHeaderCell,
    TableHeader,
    Button,
} from 'semantic-ui-react'
import { link } from "react-router-dom";

export default function Read() {
    const[apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get("https://65e3361e88c4088649f57e17.mockapi.io/crud")

            .then((getData) => {
                setApiData(getData.data);
            })




    })
    return (
        < Table celled>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>ID</TableHeaderCell>
                    <TableHeaderCell>fisrtName</TableHeaderCell>
                    <TableHeaderCell>Lastname</TableHeaderCell>
                    <TableHeaderCell>update</TableHeaderCell>
                    <TableHeaderCell>delete</TableHeaderCell>
                </TableRow>
            </TableHeader>

           
              {apiData.map((data)=>{
                return(
                      <Table.Row>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.firtsName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                     
                    <Table.Cell>
                        <link to = "/update">    
                        <Button color='red'>Update</Button>
                        </link>
                    </Table.Cell>
                    <Table.Cell>
                        <link to = "/delete">
                    <Button color='green'>Delete</Button>
                    </link>
                    
                </Table.Cell>

                </Table.Row>
                )
              })} 
              
          
        </Table>
    )
}



