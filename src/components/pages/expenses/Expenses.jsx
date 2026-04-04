import { useState } from "react"
import { expensesMock } from "./expensesData"

import ExpenseTable from "../../expenses/ExpenseTable"
import ExpenseModal from "../../expenses/ExpenseModal"
import ExpenseFilters from "../../expenses/ExpenseFilters"

export default function Expenses(){
    const [data, setData] = useState(expensesMock)
    const [showModal, setShowModal] = useState(false)
    const [filters, setFilters] = useState({})

    const addExpense = (expense) => {
        setData([...data, expense])
    }
    const deleteExpense = (id) => {
        setData(data.filter(e => e.id !== id))
    }
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-end align-items-center mb-3">
                <h3>Despesas</h3>
            </div>
            <ExpenseFilters
                filters={filters}
                setFilters={setFilters}
            />
            <div className="row mb-3">
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "5px", paddingRight: "100px", paddingTop: "20px",paddingBottom: "20px"}}>
                <button
                    className="btn btn-light"
                >
                    Imprimir
                </button>    
                <button
                    className="btn btn-primary"
                    onClick={() => 
                        setShowModal(true)}
                >
                    Novo tipo de despesa
                </button>
                </div>
            </div>
            
            <ExpenseTable
                data={data}
                onDelete={deleteExpense}
            />
            <ExpenseModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={addExpense}
            />
        </div>
    )
}