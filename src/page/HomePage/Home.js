import { React, useEffect, useState } from 'react';
import { Container } from '@mui/material';
import CustomDataGrid from '../../components/CustomDataGrid';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const url = 'https://petshop-php-react.herokuapp.com/';


  const handleData = (data) => {
    setData(data);
  };

  const GetData = async () => {
    await axios.get(url).then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = [
    {
      id: 1,
      field: 'name',
      headerName: 'Nombre',
      flex: 1,
    },
    {
      id: 2,
      field: 'price',
      headerName: 'Precio',
      flex: 1,
    },
  ];

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CustomDataGrid
        title="Bienvenido!👋🏻"
        columns={columns}
        data={data}
        url={url}
        handleData={handleData}
      />
    </Container>
  );
}
