import Image from "next/image";
import styles from "./styles.module.css";

interface RegisterReasonProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  modalContent: string;
}

const RegisterReason: React.FC<RegisterReasonProps> = ({
  isOpen,
  onClose,
  imageUrl,
  modalContent,
}) => {
  const handleCloseClick = () => onClose();

  const handleCheckClick = () => {
    handleCloseClick();
  };
  
  const dividerStyle = {
    borderBottom: "1px solid var(--disabled-border-color)",
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
              <h1 className={styles.customHeaderText}>승인거부 사유 입력</h1>
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
            <div style={dividerStyle}></div>
            <div className={styles.customGrid}>
                <div className="grid grid-cols-[160px_auto]">
                    <p className={styles.customLeftContentText}>회원번호</p>
                    <p className={styles.customRightContentText}>abc111, abc222</p>
                </div>
                <div className="grid grid-cols-[160px_auto]">
                    <p className={styles.customLeftContentText}>회원명/법인명</p>
                    <p className={styles.customRightContentText}>김길동, ㈜가나다라투자</p>
                </div>
                <div className="grid grid-cols-[160px_auto]">
                    <p className={styles.customLeftContentText}>승인거부 사유</p>
                    <p className={styles.customRightContentText}></p>
                </div>
            </div>
            <div style={dividerStyle}></div>
            <div className="flex justify-center">
              <button className={styles.customPrimaryButton} onClick={handleCheckClick}>
                <span className={styles.customPrimaryButtonText}>확인</span>
              </button>
              <button className={styles.customSecondaryButton} onClick={handleCloseClick}>
                <span className={styles.customSecondaryButtonText}>취소</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterReason;
