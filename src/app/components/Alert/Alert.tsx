
import Image from "next/image";
import styles from "./styles.module.css";

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  modalContent: string;
  onAction: (action: "close" | "check") => void;
  onConfirm: (data: any) => void;
}

const Alert: React.FC<AlertProps> = ({
  isOpen,
  onClose,
  imageUrl,
  modalContent,
  onAction,
  onConfirm,
}) => {
  const handleCloseClick = () => {
    onAction("close");
    onClose();
  };

  const handleCheckClick = () => {
    onAction("check");
    onConfirm({
    });
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
                alt="Logo"
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
            <div className="text-center">
              <button
                className={styles.customPrimaryButton}
                onClick={handleCheckClick}
              >
                <span className={styles.customPrimaryButtonText}>확인</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
