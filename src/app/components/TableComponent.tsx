import React, { useState } from 'react';
import { Table, Select } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';

interface TableComponentProps {
    tableheader: String;
    formattedData: any[];
    waitingApproval: number;
    data: any; // Adjust type according to your data structure
    changeapproval: any; // Adjust type according to your data structure
    showDownloadButton: boolean;
    columns: ColumnsType<any>;
    onExistingTypeClick: (text: string) => void; // Add callback prop
}

const TableComponent: React.FC<TableComponentProps> = ({
    tableheader,
    formattedData,
    waitingApproval,
    data,
    changeapproval,
    showDownloadButton,
    columns,
    onExistingTypeClick,
}) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [pageSize, setPageSize] = useState<number>(50); // Default page size to 50

    const onSelectChange = (newSelectedRowKeys: React.Key[], selectedRows: any[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handlePageSizeChange = (value: number) => {
        setPageSize(value);
    };

    return (
        <div>
            <div className="flex table-head">
                <div className="flex table_head--left">
                    <h2>{tableheader}</h2>
                    <span className="table_sub_head">
                        (총 {formattedData.length}명 | 승인대기{' '}
                        <span style={{ color: 'var(--alert-color)' }}>{waitingApproval}</span>건)
                    </span>
                </div>
                <div className="flex table_head--right">
                    {data.headers.map((header: any) => (
                        <Select
                            key={header.name}
                            defaultValue={header.dropdownOptions.find((opt: { value: any; }) => opt.value === header.defaultOption)?.value}
                            className="custom-select"
                            popupClassName="ant-select-dropdown-menu"
                            listHeight={132}
                            onChange={header.name === 'header2' ? handlePageSizeChange : undefined} // Handle change for page size dropdown
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
                    {showDownloadButton && <button className="disable_button">엑셀 다운로드</button>}
                </div>
            </div>
            <hr />
            <div className="table_body">
                <div className="flex table_body_head">
                    <button>등록</button>
                    <div className="flex table_body--right">
                        <span>선택한 {selectedRowKeys.length}건</span>
                        <div className="flex">
                            {changeapproval.headers.map((header: any) => (
                                <Select
                                    key={header.name}
                                    defaultValue={header.dropdownOptions.find((opt: { value: any; }) => opt.value === header.defaultOption)?.value}
                                    className="custom-select"
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
                         <button>저장</button>
                    </div>
                </div>
                <div className="table">
                    <Table
                        rowSelection={{
                            selectedRowKeys,
                            onChange: onSelectChange,
                        }}
                        columns={columns}
                        dataSource={formattedData}
                        pagination={{ pageSize }} // Set page size from state
                        locale={{ emptyText: <span className="empty-text">조회 결과가 없습니다.</span> }} // Custom empty text
                    />
                </div>
            </div>
        </div>
    );
};

export default TableComponent;
