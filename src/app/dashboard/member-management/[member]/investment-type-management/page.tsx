"use client";
import React, { useEffect, useState } from 'react';
import Header from "@/app/components/Header";
import NavComponent from "@/app/components/NavComponent";
import TableComponent from "@/app/components/TableComponent";
import data from '../../../../../assets/applicationdropdown.json';
import config from '../../../../../assets/applicationlist.json';
import changeapproval from '../../../../../assets/changeapproval.json';
import { ColumnsType } from "antd/es/table";
import { usePathname } from 'next/navigation'
import ChangeInvestmentType from '@/app/components/ChangeInvestmentType/ChangeInvestmentType';
// Utility function to duplicate data
const duplicateData = (data: any[], times: number) => {
    let duplicatedData: any[] = [];
    for (let i = 0; i < times; i++) {
        const copiedData = data.map((item, index) => ({
            ...item,
            no: index + 1 + i * data.length,
            key: (index + 1 + i * data.length).toString(),
        }));
        duplicatedData = duplicatedData.concat(copiedData);
    }
    return duplicatedData;
};

// Define approval status styles function
const approvalStyle = (status: string) => {
    switch (status) {
        case '승인완료':
            return {
                color: '#000000',
                background: '#DCFCE7',
                padding: '2px 10px',
                borderRadius: '10px',
                display: 'inline-block',
            };
        case '승인거부':
            return {
                color: '#991B1B',
                background: '#FEE2E2',
                padding: '2px 10px',
                borderRadius: '10px',
                display: 'inline-block',
            };
        case '승인대기':
            return {
                color: '#9A3412',
                background: '#FFEDD5',
                padding: '2px 10px',
                borderRadius: '10px',
                display: 'inline-block',
            };
        default:
            return {}; // Default empty style
    }
};

// Define ApplicationData interface
interface ApplicationData {
    key: React.Key;
    no: number;
    existingType: string;
    applicationType: string;
    submissionDocuments: string;
    applicationDateAndTime: string;
    approvalStatus: string;
    reasonsForRefusal: string;
    approvalDateAndTime: string;
    manager: string;
}


const BasicInformationManagement: React.FC = () => {
    const waitingApproval = 1;
    const header = "회원 목록";
    const showDownloadButton = false;
    const pathname = usePathname();
    const parts = pathname.split('/');
    const memberId = parts[3];

    // Define routes - adjust as per your actual routes structure
    const routes = [
        { name: '기본정보 관리', path: '/basic-information-management' },
        { name: '투자유형 관리', path: '/investment-type-management' },
        { name: '입출금내역 조회', path: '/check-deposit-withdrawal-history' },
        { name: '영업내역 조회', path: '/check-sales-details' },
        { name: '투자내역 조회', path: '/check-investment-history' },
        { name: '채권내역 조회', path: '/check-bond-details' },
        { name: 'SMS 관리', path: '/SMS-management' },
        { name: '상담내역 관리', path: '/manage-consultation-history' },
        { name: '1:1문의내역 조회', path: '/1:1Inquiry-history-inquiry' }
    ];

    const [columns, setColumns] = useState<ColumnsType<ApplicationData>>([]);
    const [formattedData, setFormattedData] = useState<ApplicationData[]>([]);
    const [isChangeInvestmentTypeOpen, setIsChangeInvestmentTypeOpen] = useState(false); // State for modal

    useEffect(() => {
        const duplicatedData = duplicateData(config.data, 50);
        setFormattedData(duplicatedData);

        // Simulate fetching columns asynchronously (replace with actual logic)
        const fetchColumns = async () => {
            // Example async operation to fetch column data
            const fetchedColumns: ColumnsType<ApplicationData> = [
                { title: 'NO', dataIndex: 'no', key: 'no' },
                { title: '기존유형', dataIndex: 'existingType', key: 'existingType', render: (text: string) => <span className='cursor-pointer' onClick={() => handleExistingTypeClick(text)}>{text}</span> }, // Add onClick handler
                { title: '신청유형', dataIndex: 'applicationType', key: 'applicationType' },
                { 
                    title: '제출서류', 
                    dataIndex: 'submissionDocuments', 
                    key: 'submissionDocuments',
                    render: (text: string) => (
                        <button className="custom-button">{text}</button>
                    ) 
                },
                { title: '신청일시', dataIndex: 'applicationDateAndTime', key: 'applicationDateAndTime' },
                {
                    title: '승인여부',
                    dataIndex: 'approvalStatus',
                    key: 'approvalStatus',
                    render: (status: string) => (
                        <span style={approvalStyle(status)}>{status}</span>
                    ),
                },
                { title: '승인거부 사유', dataIndex: 'reasonsForRefusal', key: 'reasonsForRefusal' },
                { title: '승인일시', dataIndex: 'approvalDateAndTime', key: 'approvalDateAndTime' },
                { title: '관리자', dataIndex: 'manager', key: 'manager' },
            ];

            setColumns(fetchedColumns);
        };

        // Call the fetchColumns function
        fetchColumns();
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    // Function to handle click on existingType column
    const handleExistingTypeClick = (text: string) => {
        console.log(`Clicked on existingType: ${text}`);
        setIsChangeInvestmentTypeOpen(true); // Open the modal
    };

    return (
        <>
            <Header />
            <NavComponent routes={routes} />
            <div className="body">
                <TableComponent
                    tableheader={header}
                    formattedData={formattedData}
                    waitingApproval={waitingApproval}
                    data={data}
                    changeapproval={changeapproval}
                    showDownloadButton={showDownloadButton}
                    columns={columns}
                    onExistingTypeClick={handleExistingTypeClick} // Pass callback function
                />
                <ChangeInvestmentType memberId={memberId} isOpen={isChangeInvestmentTypeOpen} onClose={() => setIsChangeInvestmentTypeOpen(false)} /> {/* Render modal */}
            </div>
        </>
    );
};

export default BasicInformationManagement;