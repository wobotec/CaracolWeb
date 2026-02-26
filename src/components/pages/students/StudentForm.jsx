import { useState } from 'react'
import Stepper from '../../ui/Stepper'
import StudentStap1 from '../../forms/StudentStep1'
import StudentStap2 from '../../forms/StudentStep2'
import StudentStap3 from '../../forms/StudentStep3'

export default function StudentForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

    function next() {
        setStep(prev => prev + 1)
    }
    
    function prev() {
        setStep(prev => prev - 1)
    }
    function updateField(name, value){
        setFormData(prev => ({...prev, [name]: value}))
    }
  
    return(
        <div className="card shadow-sm">
            <div className="card-body">
                <Stepper step={step} />
                {step === 1 && <StudentStap1 data={formData} updateField={updateField} next={next} />}
                {step === 2 && <StudentStap2 data={formData} updateField={updateField} next={next} prev={prev} />}
                {step === 3 && <StudentStap3 data={formData} updateField={updateField} prev={prev} />}
            </div>
        </div>
    )
}