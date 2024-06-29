"use client";
import React from 'react';
import data from '../../assets/memberdropdown.json';
import changeapproval from '../../assets/changeapproval.json';
import { ColumnsType } from 'antd/es/table';

interface TableData {
    key: React.Key;
    no: number;
    memberNumber: string;
    name: string;
    phone: string;
    email: string;
    approvalStatus: string;
    dormantStatus: string;
    classification: string;
    type: string;
    guid: string;
}

const Dashboard: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const waitingApproval = 1; // Define the waitingApproval variable

    // Initialize data with key property
    const formattedData: TableData[] = config.data.map((item, index) => ({
        ...item,
        key: index.toString(), // Use a unique identifier as the key
    }));

    // Define columns with proper type assertion
    const columns: ColumnsType<TableData> = [
        { title: 'NO', dataIndex: 'no', key: 'no' },
        { title: '회원번호', dataIndex: 'memberNumber', key: 'memberNumber' },
        { title: '회원명/법인명', dataIndex: 'name', key: 'name' },
        { title: '휴대폰 번호', dataIndex: 'phone', key: 'phone' },
        { title: '이메일ID', dataIndex: 'email', key: 'email' },
        { 
            title: '승인여부', 
            dataIndex: 'approvalStatus', 
            key: 'approvalStatus', 
            render: (status: string) => (
                <span style={approvalStatusStyle(status)}>
                    {status}
                </span>
            )
        },
        { title: '휴면상태', dataIndex: 'dormantStatus', key: 'dormantStatus' },
        { title: '구분', dataIndex: 'classification', key: 'classification' },
        { title: '유형', dataIndex: 'type', key: 'type' },
        { title: 'GUID', dataIndex: 'guid', key: 'guid' },
    ];

    const onSelectChange = (newSelectedRowKeys: React.Key[], selectedRows: TableData[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

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
        <div>
            <div className="flex table-head">
                <div className="flex table_head--left">
                    <h2>회원 목록</h2>
                    <span className="table_sub_head">
                        (총 {formattedData.length}명 | 승인대기 <span style={{ color: 'var(--alert-color)' }}>{waitingApproval}</span>건)
                    </span>
                </div>
                <div className="flex table_head--right">
                    {data.headers.map(header => (
                        <Select
                            key={header.name}
                            defaultValue={header.dropdownOptions[header.defaultOption - 1].value}
                            className="custom-select"
                            popupClassName="ant-select-dropdown-menu"
                            listHeight={132}
                        >
                            {header.dropdownOptions.map(option => (
                                <Select.Option key={option.value} value={option.value} label={option.label} className="ant-select-item-option">
                                    {option.label}
                                </Select.Option>
                            ))}
                        </Select>
                    ))}
                    <button className="disable_button">엑셀 다운로드</button>
                </div>
            </div>
            <hr />
            <div className="table_body">
                <div className='flex table_body_head'>
                    <button>등록</button>
                    <div className='flex table_body--right'>
                        <span>선택한 {selectedRowKeys.length}건</span>
                        <div className="flex">
                            {changeapproval.headers.map(header => (
                                <Select
                                    key={header.name}
                                    defaultValue={header.dropdownOptions[header.defaultOption - 1].value}
                                    className="custom-select"
                                    popupClassName="ant-select-dropdown-menu"
                                    listHeight={132}
                                >
                                    {header.dropdownOptions.map(option => (
                                        <Select.Option key={option.value} value={option.value} label={option.label} className="ant-select-item-option">
                                            {option.label}
                                        </Select.Option>
                                    ))}
                                </Select>
                            ))}
                        </div>
                        <button>엑셀 다운로드</button>
                    </div>
                </div>
                <div className='table'>
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={formattedData}
                    />
                </div>
            </div>  
        </div>
    );
}

export default Dashboard;
