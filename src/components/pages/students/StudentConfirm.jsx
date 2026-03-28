import StudentInfo from "../../Student/StudentInfo"
import AcademicHistory from "../../Student/AcademicHistory"
import StudentConfirmForm from "../../Student/StudentConfirmForm"

import {
    studentInfo, history, courses, classes, turmas
}   from "./mockStudent"

export default function StudentConfirm(){
    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Confirmação</h3>
            <div className="row">
                <div className="col-md-5">
                    <StudentInfo student={studentInfo} />
                    <AcademicHistory history={history} />
                </div>
                <div className="col-md-7">
                    <StudentConfirmForm
                    courses={courses}
                    classes={classes}
                    turmas={turmas}
                    />
                </div>
            </div>
        </div>
    )
}
