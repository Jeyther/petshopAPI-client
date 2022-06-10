import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomSimpleTable = ({
  rows,
  headers,
  handleEditToy,
  handleDeleteToy,
}) => {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#0092DD' }}>
          <TableRow>
            {headers.map((header, index) => {
              return (
                <TableCell sx={{ color: '#f0f0f0' }} key={index}>
                  {header.headerName}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell componenet="th" scope="row" sx={{ fontSize: '1rem' }}>
                {row.name}
              </TableCell>
              <TableCell componenet="th" scope="row" sx={{ fontSize: '1rem' }}>
                {row.price}
              </TableCell>
              <TableCell componenet="th" scope="row" sx={{ fontSize: '1rem' }}>
                <IconButton onClick={()=>handleEditToy(row)}>
                  <EditIcon  />
                </IconButton>
                <IconButton onClick={()=>handleDeleteToy(row)}>
                  <DeleteIcon  />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomSimpleTable;
