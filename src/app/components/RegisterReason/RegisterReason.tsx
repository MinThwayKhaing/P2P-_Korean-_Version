import Image from "next/image";
import styles from "./styles.module.css";

interface RegisterReasonProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterReason: React.FC<RegisterReasonProps> = ({ isOpen, onClose }) => {
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
                <p className={styles.customLeftContentText1}>회원번호</p>
                <p className={styles.customRightContentText1}>abc111, abc222</p>
              </div>
              <div className="grid grid-cols-[160px_auto]">
                <p className={styles.customLeftContentText1}>회원명/법인명</p>
                <p className={styles.customRightContentText1}>
                  김길동, ㈜가나다라투자
                </p>
              </div>
              <div className="grid grid-cols-[160px_auto]">
                <p className={styles.customLeftContentText2}>승인거부 사유</p>
                <p className={styles.customRightContentText2}>
                  <div className="flex items-center space-x-2 mb-2.5">
                  <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="check1"
                      data-ripple-dark="true"
                    >
                      <input
                        id="check1"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
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
                    <label className="cursor-pointer" htmlFor="check1">서류 식별 불가</label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                  <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="check2"
                      data-ripple-dark="true"
                    >
                      <input
                        id="check2"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
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
                    <label className="cursor-pointer" htmlFor="check2">필수 서류 누락</label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                  <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="check3"
                      data-ripple-dark="true"
                    >
                      <input
                        id="check3"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
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
                    <label className="cursor-pointer" htmlFor="check3">
                      서류의 내용이 등록된 회원정보와 다름
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                  <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="check4"
                      data-ripple-dark="true"
                    >
                      <input
                        id="check4"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
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
                    <label className="cursor-pointer" htmlFor="check4">
                      서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인,
                      본인서명 등)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2.5">
                  <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="check5"
                      data-ripple-dark="true"
                    >
                      <input
                        id="check5"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
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
                    <label className="cursor-pointer" htmlFor="check5">서류의 유효기간이 초과됨</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <label
                      className="relative flex items-center rounded-full cursor-pointer"
                      htmlFor="check6"
                      data-ripple-dark="true"
                    >
                      <input
                        id="check6"
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
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
                    <label className="cursor-pointer" htmlFor="check6">직접 입력</label>
                  </div>
                  <textarea
                    className="mt-2.5 p-2 border border-gray-300 rounded-xl w-full h-20"
                    placeholder="사유 입력"
                  />
                </p>
              </div>
            </div>
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
