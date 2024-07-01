import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Confirm from "../Confirm/Confirm";

interface DocumentsProps {
  isOpen: boolean;
  onClose: () => void;
  rows: any[];
  selectedReason: string;
}

const Documents: React.FC<DocumentsProps> = ({
  isOpen,
  onClose,
  rows,
  selectedReason,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleCloseClick = () => {
    onClose();
  };

  const handleCheckClick = () => {
    let errorOccurred = false;

    if (!selectedReason) {
      setImageUrl("/warning.svg");
      setModalContent("필수입력항목을 입력해주세요.");
      errorOccurred = true;
    } else if (rows.some((member) => member.approvalStatus === "승인완료")) {
      setImageUrl("/warning.svg");
      setModalContent("이미 승인 완료된 회원입니다.");
      errorOccurred = true;
    } else if (rows.some((member) => member.approvalStatus === "승인거절")) {
      setImageUrl("/warning.svg");
      setModalContent("이미 승인 거부된 회원입니다.");
      errorOccurred = true;
    }

    if (errorOccurred) {
      setIsAlertOpen(true);
      return;
    }

    // Proceed with valid files
    setImageUrl(""); // Clear previous alert image if any
    setModalContent(""); // Clear previous alert content if any
    setIsConfirmOpen(true); // Open the confirmation modal
  };

  const handleAlertAction = (action: "close" | "check") => {};

  const handleConfirmAction = (action: "close" | "check") => {
    if (action === "check") {
      setImageUrl("/success.svg");
      setModalContent("저장되었습니다.");
      setIsAlertOpen(true);
    }
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
            <div className="flex justify-between items-center pb-5">
              <h1 className={styles.customHeaderText}>서류 보기</h1>
              <Image
                className={styles.customCloseIcon}
                src="/close.svg"
                alt="Close Logo"
                width={24}
                height={24}
                priority
                onClick={handleCloseClick}
              />
            </div>
            <div
              style={{
                borderBottom: "1px solid var(--disabled-border-color)",
              }}
            ></div>
            <div className={styles.customGrid}>
              <div className="grid grid-cols-[160px_auto] overflow-y-auto">
                <p className={`${styles.customLeftContentText} gap-1`}>
                  서류
                  <Image
                    className="mb-4"
                    src="/must.svg"
                    alt="Must Logo"
                    width={4}
                    height={4}
                    priority
                  />
                </p>
                <div style={{ height: "720px" }} className="overflow-y-auto">
                  <p className={styles.customRightContentText}>img</p>
                  <p className={styles.customRightContentText}>img</p>
                </div>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid var(--disabled-border-color)",
                marginTop: "32px",
              }}
            ></div>
            <div className="flex justify-center">
              <button
                className={styles.customSecondaryButton}
                onClick={handleCloseClick}
              >
                <span className={styles.customSecondaryButtonText}>
                  파일 다운로드
                </span>
              </button>
              <button
                className={styles.customPrimaryButton}
                onClick={handleCheckClick}
              >
                <span className={styles.customPrimaryButtonText}>확인</span>
              </button>
              <Alert
                imageUrl={imageUrl}
                modalContent={modalContent}
                isOpen={isAlertOpen}
                onClose={() => setIsAlertOpen(false)}
                onAction={handleAlertAction}
              />
              <Confirm
                imageUrl="/warning.svg"
                modalContent={`선택된 ${rows.length}명의 승인상태를 변경하시겠습니까?`}
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                onAction={handleConfirmAction}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Documents;
