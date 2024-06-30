"use client";
import React, { useState } from 'react';
import { Table, Select, Tag } from 'antd';
import config from '../../assets/memberlist.json';
import data from '../../assets/memberdropdown.json';
import changeapproval from '../../assets/changeapproval.json';
import { ColumnsType } from 'antd/es/table';

import Link from 'next/link';
import TableComponent from '../components/TableComponent';
const Dashboard: React.FC = () => {
    const waitingApproval = 1;
    const header="회원 목록";
    const showDownloadButton = true; 
     const formattedData: TableData[] = config.data.map((item, index) => ({
        ...item,
        key: index.toString(), 
    }));

    const columns: ColumnsType<TableData> = [
        { title: 'NO', dataIndex: 'no', key: 'no' },
        {
            title: '회원번호',
            dataIndex: 'memberNumber',
            key: 'memberNumber',
            render: (text, record) => (
                <Link className="underline" href={`/dashboard/member-management/${record.memberNumber}/investment-type-management`}>
                    {record.memberNumber}
                </Link>
            ),
        },
        {
            title: '회원명/법인명',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Link className='underline' href={`/dashboard/member-management/${record.memberNumber}/investment-type-management`}>
                    {record.name}
                </Link>
            ),
        },
        { title: '휴대폰 번호', dataIndex: 'phone', key: 'phone' },
        { title: '이메일ID', dataIndex: 'email', key: 'email' },
        {
            title: '승인여부',
            dataIndex: 'approvalStatus',
            key: 'approvalStatus',
            render: (status: string) => <span style={approvalStatusStyle(status)}>{status}</span>,
        },
        { title: '휴면상태', dataIndex: 'dormantStatus', key: 'dormantStatus' },
        { title: '구분', dataIndex: 'classification', key: 'classification' },
        { title: '유형', dataIndex: 'type', key: 'type' },
        { title: 'GUID', dataIndex: 'guid', key: 'guid' },
    ];

    const approvalStatusStyle = (status: string) => {
        switch (status) {
            case '승인완료':
                return {
                    color: '#000000',
                    background: '#DCFCE7',
                    padding: '2px 10px',
                    borderRadius: '10px',
                    display: 'inline-block',
                };
            case '승인거절':
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

    return (
        <TableComponent
            tableheader={header}
            formattedData={formattedData}
            waitingApproval={waitingApproval}
            data={data}
            changeapproval={changeapproval}
            showDownloadButton={showDownloadButton}
            columns={columns} onExistingTypeClick={function (text: string): void {
                throw new Error('Function not implemented.');
            } }        />
    );
};

export default Dashboard;
