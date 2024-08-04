import DeleteConfirm from "../../confirm/DeleteConfirm";
import SignoutConfirm from "../../confirm/SignoutConfirm";
import AddUpdateStudent from "../../student/AddUpdateStudent";
import Modal from "./modal";
import { useModalAction, useModalState } from "./modal.context";

const ManagedModal = () => {
  const { view, isOpen, maxWidth } = useModalState();
  const { closeModal } = useModalAction();
  return (
    <Modal open={isOpen} onClose={closeModal} maxWidth={maxWidth}>
      {view === "ADD_UPDATE_STUDENT" && <AddUpdateStudent />}
      {view === "DELETE_CONFIRM" && <DeleteConfirm />}
      {view === "SIGN_OUT_CONFIRM" && <SignoutConfirm />}
    </Modal>
  );
};

export default ManagedModal;
