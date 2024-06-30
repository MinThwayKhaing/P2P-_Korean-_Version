import Image from "next/image";
import styles from "./styles.module.css";
import { SetStateAction, useState } from "react";

interface RegisterReasonProps {
  isOpen: boolean;
  onClose: () => void;
  rows: any[];
}

const RegisterReason: React.FC<RegisterReasonProps> = ({
  isOpen,
  onClose,
  rows,
}) => {
  const [selectedReason, setSelectedReason] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const memberNumbers = rows.map((member) => member.memberNumber).join(", ");
  const names = rows.map((member) => member.name).join(", ");

  const getCurrentDate = () => {
    const date = new Date();
    const formattedDate = date.toISOString().replace("T", " ").slice(0, 19);
    return formattedDate;
  };

  const handleRadioChange = (event: any) => {
    setSelectedReason(event.target.id);
  };

  const handleCloseClick = () => {
    setIsCheck(false);
    onClose();
  };

  const handleCheckClick = () => {
    setIsCheck(true);
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
                <p className={styles.customLeftContentText1}>회원번호</p>
                <p className={styles.customRightContentText1}>
                  {memberNumbers}
                </p>
              </div>
              <div className="grid grid-cols-[160px_auto]">
                <p className={styles.customLeftContentText1}>회원명/법인명</p>
                <p className={styles.customRightContentText1}>{names}</p>
              </div>
              <div className="grid grid-cols-[160px_auto]">
                <p className={styles.customLeftContentText2}>승인거부 사유</p>
                <p className={styles.customRightContentText2}>
                  <div className="flex items-center space-x-2 mb-2.5">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="option1"
                      data-ripple-dark="true"
                    >
                      <input
                        id="option1"
                        name="reason"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        onChange={handleRadioChange}
                        disabled={isCheck && true}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Image
                          src="/check.svg"
                          alt="Check Logo"
                          className="cursor-pointer"
                          width={12}
                          height={12}
                          priority
                        />
                      </span>
                    </label>
                    <label className="cursor-pointer" htmlFor="option1">
                      서류 식별 불가
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="option2"
                      data-ripple-dark="true"
                    >
                      <input
                        id="option2"
                        name="reason"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        onChange={handleRadioChange}
                        disabled={isCheck && true}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Image
                          src="/check.svg"
                          alt="Check Logo"
                          className="cursor-pointer"
                          width={12}
                          height={12}
                          priority
                        />
                      </span>
                    </label>
                    <label className="cursor-pointer" htmlFor="option2">
                      필수 서류 누락
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="option3"
                      data-ripple-dark="true"
                    >
                      <input
                        id="option3"
                        name="reason"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        onChange={handleRadioChange}
                        disabled={isCheck && true}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Image
                          src="/check.svg"
                          alt="Check Logo"
                          className="cursor-pointer"
                          width={12}
                          height={12}
                          priority
                        />
                      </span>
                    </label>
                    <label className="cursor-pointer" htmlFor="option3">
                      서류의 내용이 등록된 회원정보와 다름
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="option4"
                      data-ripple-dark="true"
                    >
                      <input
                        id="option4"
                        name="reason"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        onChange={handleRadioChange}
                        disabled={isCheck && true}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Image
                          src="/check.svg"
                          alt="Check Logo"
                          className="cursor-pointer"
                          width={12}
                          height={12}
                          priority
                        />
                      </span>
                    </label>
                    <label className="cursor-pointer" htmlFor="option4">
                      서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인,
                      본인서명 등)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="option5"
                      data-ripple-dark="true"
                    >
                      <input
                        id="option5"
                        name="reason"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        onChange={handleRadioChange}
                        disabled={isCheck && true}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Image
                          src="/check.svg"
                          alt="Check Logo"
                          className="cursor-pointer"
                          width={12}
                          height={12}
                          priority
                        />
                      </span>
                    </label>
                    <label className="cursor-pointer" htmlFor="option5">
                      서류의 유효기간이 초과됨
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="option6"
                      data-ripple-dark="true"
                    >
                      <input
                        id="option6"
                        name="reason"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        onChange={handleRadioChange}
                        disabled={isCheck && true}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <Image
                          src="/check.svg"
                          alt="Check Logo"
                          className="cursor-pointer"
                          width={12}
                          height={12}
                          priority
                        />
                      </span>
                    </label>
                    <label className="cursor-pointer" htmlFor="option6">
                      직접입력
                    </label>
                  </div>
                  <textarea
                    style={
                      selectedReason == "option6" && !isCheck
                        ? {}
                        : {
                            background: "#DDE0E5",
                            color: "var(--border-color)",
                          }
                    }
                    className="mt-2.5 p-2 border border-gray-300 rounded-xl w-full h-20"
                    placeholder="사유 입력"
                    disabled={
                      selectedReason == "option6" && !isCheck ? false : true
                    }
                  />
                </p>
              </div>
            </div>
            {isCheck && (
              <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                  <p className={styles.customLastLeftContentText1}>
                    최근저장일시
                  </p>
                  <p className={styles.customLastRightContentText1}>
                    {getCurrentDate()}
                  </p>
                </div>
                <div className={styles.gridItem}>
                  <p className={styles.customLastLeftContentText1}>관리자</p>
                  <p className={styles.customLastRightContentText1}>김관리자</p>
                </div>
              </div>
            )}
            <div style={dividerStyle}></div>
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

export default RegisterReason;
