import { useState } from 'react';
import AddDialog from './AddDialog';
import { Container } from '@mui/material';
import EditDialog from './EditDialog';
import DeleteDialog from './DeleteDialog';
import CustomSimpleTable from './CustomSimpleTable';
import PageTitle from './PageTitle';
import axios from 'axios';

const actions = () => {
  return {
    id: 3,
    field: 'actions',
    type: 'actions',
    headerName: 'Acciones',
    flex: 1,
  };
};

export default function CustomDataGrid({
  title,
  data,
  columns,
  url,
  handleData,
}) {
  const headers = [...columns, actions()];

  const [isOpenAddModal, setOpenAddModal] = useState(false);
  const [isOpenEditModal, setOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);

  const handleToggleAddModal = () => setOpenAddModal(!isOpenAddModal);
  const handleToggleEditModal = () => setOpenEditModal(!isOpenEditModal);
  const handleToggleDeleteModal = () => setOpenDeleteModal(!isOpenDeleteModal);

  const [toy, setToy] = useState({
    id: '',
    name: '',
    price: '',
  });

  const [caso, setCaso] = useState('add');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditToy = (row) => {
    setToy({
      id: row.id,
      name: row.name,
      price: row.price,
    });

    setCaso('edit');

    handleToggleEditModal();
  };

  const handleDeleteToy = (row) => {
    setToy({
      id: row.id,
      name: row.name,
      price: row.price,
    });

    setCaso('delete');

    handleToggleDeleteModal();
  };

  const handleCaso = () => {
    if (caso === 'add') {
      PostData();
    } else if (caso === 'edit') {
      PutData();
    } else if (caso === 'delete') {
      DeleteData();
    }
  };

  const PostData = async () => {
    let form = new FormData();
    form.append('name', toy.name);
    form.append('price', toy.price);
    form.append('METHOD', 'POST');

    await axios
      .post(url, form)
      .then((response) => {
        handleData(data.concat(response.data));
        setToy({ id: '', name: '', price: '' });
      })
      .then(handleToggleAddModal())
      .catch((error) => {
        console.log(error);
      });
  };

  const PutData = async () => {
    let form = new FormData();
    form.append('name', toy.name);
    form.append('price', toy.price);
    form.append('METHOD', 'PUT');

    await axios
      .post(url, form, { params: { id: toy.id } })
      .then((response) => {
        let newData = data;
        newData.map((item) => {
          return () => {
            if (item.id === toy.id) {
              item.name = toy.name;
              item.price = toy.price;
            }
          };
        });
        handleData(newData);
        setToy({ id: '', name: '', price: '' });
      })
      .then(handleToggleEditModal())
      .catch((error) => {
        console.log(error);
      });
  };

  const DeleteData = async () => {
    let form = new FormData();
    form.append('METHOD', 'DELETE');

    await axios
      .post(url, form, { params: { id: toy.id } })
      .then((response) => {
        handleData(data.filter((item) => item.id !== toy.id));
      })
      .then(handleToggleDeleteModal())
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AddDialog
        isOpenAddModal={isOpenAddModal}
        handleToggleAddModal={handleToggleAddModal}
        handleSaveToy={handleCaso}
        handleChange={handleChange}
        toy={toy}
      />

      <EditDialog
        isOpenEditModal={isOpenEditModal}
        handleToggleEditModal={handleToggleEditModal}
        handleSaveToy={handleCaso}
        handleChange={handleChange}
        toy={toy}
      />

      <DeleteDialog
        isOpenDeleteModal={isOpenDeleteModal}
        handleToggleDeleteModal={handleToggleDeleteModal}
        handleSaveToy={handleCaso}
      />

      <PageTitle
        title={title}
        buttonTitle={'Agregar'}
        handleToggleAddModal={handleToggleAddModal}
      />

      <Container maxWidth={false} sx={{ height: 640 }}>
        <CustomSimpleTable
          rows={data}
          headers={headers}
          handleEditToy={handleEditToy}
          handleDeleteToy={handleDeleteToy}
        />
      </Container>
    </>
  );
}
