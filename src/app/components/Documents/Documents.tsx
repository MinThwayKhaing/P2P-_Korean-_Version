import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

interface DocumentsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Documents: React.FC<DocumentsProps> = ({ isOpen, onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  const handleCheckClick = () => {};

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
              <div className="grid grid-cols-[160px_auto] h-96 overflow-y-auto">
                <p className={`${styles.customLeftContentText2} gap-1`}>
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
                <div>
                  <p className={styles.customRightContentText2}>img</p>
                  <p className={styles.customRightContentText2}>img</p>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Documents;
