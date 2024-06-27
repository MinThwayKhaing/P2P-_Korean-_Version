"use client";
import React from 'react';
import data from '../../assets/memberdropdown.json';

export default function Dashboard() {
    const waitingApproval = 1; // Define the waitingApproval variable

    return (
        <>
            <div className="flex table-head">
                <div className="flex table_head--left">
                    <h2>회원 목록</h2>
                    <span className="table_sub_head">
                        (총 100명 | 승인대기 <span style={{ color: 'var(--alert-color)' }}>{waitingApproval}</span>건)
                    </span>
                </div>
                <div className="flex table_head--right">
                    {data.headers.map(header => (
                        <div key={header.name}>
                            <select defaultValue={header.dropdownOptions[header.defaultOption - 1].value}>
                                {header.dropdownOptions.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    <button className="disable_button">엑셀 다운로드</button>
                </div>
            </div>
            <hr />
            <div className="table_body">
                <button>등록</button>
            </div>
        </>
    );
}
