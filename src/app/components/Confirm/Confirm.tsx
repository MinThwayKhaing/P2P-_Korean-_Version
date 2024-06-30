import Image from "next/image";
import styles from "./styles.module.css";

interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  modalContent: string;
  onAction: (action: "close" | "check") => void;
}

const Confirm: React.FC<ConfirmProps> = ({
  isOpen,
  onClose,
  imageUrl,
  modalContent,
  onAction,
}) => {
  const handleCloseClick = () => {
    onAction("close");
    onClose();
  };

  const handleCheckClick = () => {
    onAction("check");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75 cursor-pointer"
            onClick={handleCloseClick}
          />
          <div className={styles.customContainer}>
            <div className="flex justify-between items-center">
              <Image
                src={imageUrl}
                alt="Warning Logo"
                width={30}
                height={30}
                priority
              />
              <Image
                src="/close.svg"
                alt="Close Logo"
                className="cursor-pointer"
                width={24}
                height={24}
                priority
                onClick={handleCloseClick}
              />
            </div>
            <p className={styles.customContentText}>{modalContent}</p>
            <div className="flex justify-center">
              <button
                className={styles.customPrimaryButton}
                onClick={handleCheckClick}
              >
                <span className={styles.customPrimaryButtonText}>확인</span>
              </button>
              <button
                className={styles.customSecondaryButton}
                onClick={handleCloseClick}
              >
                <span className={styles.customSecondaryButtonText}>취소</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirm;
