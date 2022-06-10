import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

export default function AddDialog({
  isOpenDeleteModal,
  handleToggleDeleteModal,
  handleSaveToy,
}) {
  return (
    <Dialog
      fullWidth
      maxWidth={'md'}
      open={isOpenDeleteModal}
      onClose={handleToggleDeleteModal}
    >
      <DialogTitle>Eliminar Elemento</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle2">¿Estas Seguro?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSaveToy} variant="contained" disableElevation>
          Eliminar
        </Button>
        <Button onClick={handleToggleDeleteModal} variant="outlined">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
