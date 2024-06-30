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
