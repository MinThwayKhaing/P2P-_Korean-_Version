"use client";
import Link from 'next/link';

const routes = [
  { name: '기본정보 관리', path: '/BasicInformationManagement' },
  { name: '투자유형 관리', path: '/InvestmentTypeManagement' },
  { name: '입출금내역 조회', path: '/CheckDepositWithdrawalHistory' },
  { name: '영업내역 조회', path: '/CheckSalesDetails' },
  { name: '투자내역 조회', path: '/CheckInvestmentHistory' },
  { name: '채권내역 조회', path: '/CheckBondDetails' },
  { name: 'SMS 관리', path: '/SMSManagement' },
  { name: '상담내역 관리', path: '/ManageConsultationHistory' },
  { name: '1:1문의내역 조회', path: '/1:1InquiryHistoryInquiry' }
];

const Header = () => {


  return (
    <header>
      <div className="header flex py-2">
        <h1>회원상세</h1>
        <h4 className="ml-3">
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.64844" cy="3.87695" r="3" fill="#FF4D4F" />
          </svg>
        </h4>
        <h3 className="ml-1">필수항목</h3>
      </div>
      <hr />
      <div className="flex mt-2">
        {routes.map((route, index) => (
          <nav
            key={route.path}
            className={`${index === 0 ? 'first-nav' : ''} ${index === routes.length - 1 ? 'last-nav' : ''}`}
          >
            <div>
              <a className="nav-font-size">{route.name}</a>
            </div>
          </nav>
        ))}
      </div>
    </header>
  );
};

export default Header;
