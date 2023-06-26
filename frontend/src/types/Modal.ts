import EActiveModal from "../constants/EActiveModal.ts";

interface IModalProps {
  activeModal: EActiveModal;
  setActiveModal: React.Dispatch<React.SetStateAction<EActiveModal>>;
}

export default IModalProps;
