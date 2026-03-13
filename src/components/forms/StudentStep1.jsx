import { useForm } from "react-hook-form"

export default function StudentStep1({data, updateField, next}) {
    const { register, handleSubmit, formState: { errors
    } } = useForm()

    function onSubmit(values) {
        Object.keys(values).forEach(key => {
            updateField(key, values[key])
        })
        next()
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
                <div className="col-md-6">
                    <label >Nome completo</label>
                        <input className="form-control" {...register("name", { required: true })} />
                            {errors.name && <small className="text-danger">Campo obrigatório</small>}
                </div>
                <div className="col-md-6">
                    <label >CPF</label>
                        <input className="form-control" {...register("cpf", { required: true, pattern: /^\d{11}$/ })} />
                        {errors.cpf && <small className="text-danger">CPF deve conter 11 dígitos numéricos</small>}
                </div>
                <div className="col-md-6">
                    <label >Data de nascimento</label>
                        <input type="date" className="form-control" {...register("birthDate", { required: true })} />
                </div>
            </div>
            <div className="mt-4 text-end">
                <button className="btn btn-primary">Próximo</button>
            </div>
        </form>
    )
}   