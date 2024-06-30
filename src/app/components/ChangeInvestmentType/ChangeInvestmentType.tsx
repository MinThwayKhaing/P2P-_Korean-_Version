import Image from "next/image";
import styles from "./styles.module.css";
import typeOfInvestment from "../../../assets/typeOfInvestment.json";
import { Select } from "antd";
import config from "../../../assets/memberlist.json";
import { ChangeEvent, useState } from "react";
import Alert from "../Alert/Alert";
import Confirm from "../Confirm/Confirm";

interface ChangeInvestmentTypeProps {
  isOpen: boolean;
  onClose: () => void;
  memberId: string;
}

const ChangeInvestmentType: React.FC<ChangeInvestmentTypeProps> = ({
  isOpen,
  onClose,
  memberId,
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const memberName = [
    ...new Set(
      config.data
        .filter((member) => member.memberNumber === memberId)
        .map((member) => member.name)
    ),
  ][0]; // Assuming memberId is unique, only take the first name

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleCheckClick = () => {
    let errorOccurred = false;

    if (!files.length) {
      setImageUrl("/warning.svg");
      setModalContent("필수입력항목을 입력해주세요.");
      errorOccurred = true;
    } else if (files.length > 10) {
      setImageUrl("/warning.svg");
      setModalContent("최대 10개까지 등록 가능합니다.");
      errorOccurred = true;
    } else {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "application/pdf",
      ];
      const invalidFiles = files.filter(
        (file) => !allowedTypes.includes(file.type)
      );

      if (invalidFiles.length > 0) {
        setImageUrl("/warning.svg");
        setModalContent("jpg, jpeg, gif, png, pdf 파일만 등록 가능합니다.");
        errorOccurred = true;
      } else {
        const totalSize = files.reduce((acc, file) => acc + file.size, 0);
        if (totalSize > 100 * 1024 * 1024) {
          // 100MB in bytes
          setImageUrl("/warning.svg");
          setModalContent("최대 100MB까지 등록 가능합니다.");
          errorOccurred = true;
        }
      }
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

  const handleAlertAction = (action: "close" | "check") => {
    // if (action === "check") {
    //   setImageUrl("/warning.svg");
    //   setModalContent("파일 등록에 실패했습니다.");
    //   const alertTimeout = setTimeout(() => {
    //     setIsAlertOpen(true);
    //   }, 1000);
    //   return () => clearTimeout(alertTimeout);
    // }
  };

  const handleConfirmAction = (action: "close" | "check") => {
    if (action === "check") {
      setImageUrl("/success.svg");
      setModalContent("저장되었습니다.");
      setIsAlertOpen(true);
    }
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
            onClick={onClose}
          />
          <div className={styles.customContainer}>
            <div className="flex justify-between items-center pb-5">
              <h1 className={styles.customHeaderText}>투자유형 변경</h1>
              <Image
                className={styles.customCloseIcon}
                src="/close.svg"
                alt="Close Logo"
                width={24}
                height={24}
                priority
                onClick={onClose}
              />
            </div>
            <div style={dividerStyle}></div>
            <div className={styles.customGrid}>
              <div className="grid grid-cols-[160px_auto]">
                <p className={styles.customLeftContentText}>회원번호</p>
                <p className={styles.customRightContentText}>{memberId}</p>
              </div>
              <div className="grid grid-cols-[160px_auto]">
                <p className={styles.customLeftContentText}>회원명/법인명</p>
                <p className={styles.customRightContentText}>{memberName}</p>
              </div>
              <div className="grid grid-cols-[160px_auto]">
                <p
                  className={`${styles.customLeftContentText} flex items-start gap-1`}
                >
                  투자유형
                  <Image
                    src="/must.svg"
                    alt="Must Logo"
                    width={4}
                    height={4}
                    priority
                  />
                </p>
                <div className={styles.customRightContentTextSelect}>
                  {typeOfInvestment.headers.map((header: any) => (
                    <Select
                      key={header.name}
                      defaultValue={
                        header.dropdownOptions.find(
                          (opt: { value: any }) =>
                            opt.value === header.defaultOption
                        )?.value
                      }
                      className={styles.modalCustomSelect}
                      popupClassName="ant-select-dropdown-menu"
                      listHeight={132}
                    >
                      {header.dropdownOptions.map((option: any) => (
                        <Select.Option
                          key={option.value}
                          value={option.value}
                          label={option.label}
                          className="ant-select-item-option"
                          disabled={option.disabledStatus}
                        >
                          {option.label}
                        </Select.Option>
                      ))}
                    </Select>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-[160px_auto]">
                <p
                  className={`${styles.customLastContentText} flex items-start gap-1`}
                >
                  서류첨부
                  <Image
                    src="/must.svg"
                    alt="Must Logo"
                    width={4}
                    height={4}
                    priority
                  />
                </p>
                <div className={styles.customContentButton}>
                  <label className={styles.customContentButtonText}>
                    파일 선택
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".jpg, .jpeg, .gif, .png, .pdf"
                      multiple
                    />
                  </label>
                  <div className={styles.fileList}>
                    {files.map((file, index) => (
                      <div key={index} className={styles.fileItem}>
                        <span className={styles.fileName}>{file.name}</span>
                        <button
                          className={styles.removeButton}
                          onClick={() => handleRemoveFile(index)}
                        >
                          <Image
                            src="/remove.svg"
                            alt="Remove Logo"
                            width={15}
                            height={15}
                            priority
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.customContentText1}>
              파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.
            </div>
            <div className={styles.customContentText2}>
              최대 10개, 100MB까지 등록이 가능합니다.
            </div>
            <div style={dividerStyle}></div>
            <div className="flex justify-center">
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
                modalContent="투자유형을 변경하시겠습니까?"
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                onAction={handleConfirmAction}
              />
              <button
                className={styles.customSecondaryButton}
                onClick={onClose}
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

export default ChangeInvestmentType;
