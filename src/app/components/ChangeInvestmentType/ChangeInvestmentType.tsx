import Image from "next/image";
import styles from "./styles.module.css";
import typeOfInvestment from '../../../assets/typeOfInvestment.json'
import { Select } from "antd";
interface ChangeInvestmentTypeProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangeInvestmentType: React.FC<ChangeInvestmentTypeProps> = ({
  isOpen,
  onClose,
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
              <h1 className={styles.customHeaderText}>투자유형 변경</h1>
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
                    <p className={styles.customRightContentText}>abc111</p>
                </div>
                <div className="grid grid-cols-[160px_auto]">
                    <p className={styles.customLeftContentText}>회원명/법인명</p>
                    <p className={styles.customRightContentText}>김길동</p>
                </div>
                <div className="grid grid-cols-[160px_auto]">
                    <p className={styles.customLeftContentText}> 투자유형 </p>
                    <p className={styles.customRightContentTextSelect }>
                    {typeOfInvestment.headers.map((header: any) => (
                                <Select
                                    key={header.name}
                                    defaultValue={header.dropdownOptions.find((opt: { value: any; }) => opt.value === header.defaultOption)?.value}
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
                    </p>
                </div>
                <div className="grid grid-cols-[160px_auto]">
                    <p className={styles.customLastContentText}>서류첨부</p>
                    <button className={styles.customContentButton}>
                        <span className={styles.customContentButtonText}>파일 선택</span>
                    </button>
                </div>
            </div>
            <p className={styles.customContentText1}>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</p>
            <p className={styles.customContentText2}>최대 10개, 100MB까지 등록이 가능합니다.</p>
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

export default ChangeInvestmentType;
