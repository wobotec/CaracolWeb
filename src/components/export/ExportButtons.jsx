import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function ExportButtons ({ data }) {
    function exportToExcel() {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Alunos");

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        
        const file = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(file, 'alunos.xlsx');
    }
    function exportToCSV() {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const csv = XLSX.utils.sheet_to_csv(worksheet);
        
        const file = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(file, 'alunos.csv');
    }
    return (
        <div>
            <button className="btn btn-outline-success me-2" >Exportar Excel</button>
            <button className="btn btn-outline-secondary" >Exportar CSV</button>
        </div>
    );
}