import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';


export default function EditDialog({
  isOpenEditModal,
  handleToggleEditModal,
  handleSaveToy,
  handleChange,
  toy
}) {
  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      component="form"
      noValidate
      autoComplete="off"
      open={isOpenEditModal}
      onClose={handleToggleEditModal}
    >
      <DialogTitle>Editar Elemento</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          label='Nombre'
          type="text"
          name='name'
          variant="standard"
          fullWidth
          onChange={handleChange}
          value={toy.name}
        />
        <TextField
          margin="normal"
          label='Precio'
          type="text"
          name='price'
          variant="standard"
          fullWidth
          onChange={handleChange}
          value={toy.price}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleToggleEditModal} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleSaveToy} variant="contained" disableElevation>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
