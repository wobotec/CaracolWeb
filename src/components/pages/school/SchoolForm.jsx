import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SchoolForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logoPreview, setLogoPreview] = useState(null);

    function onSubmit(data) {
        console.log(data);
    }
    
    function handleLogoChange(e) {
        const file = e.target.files[0];
        setLogoPreview(URL.createObjectURL(file));
    }
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="mb-4">Cadastro de Empresa</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        {/* COLUNA A ESQUERDA */}
                        <div className="col-md-7">
                            <div className="mb-3">
                                <label >Escola</label>
                                <input className="form-control" {...register("name", { required: true })} />
                                {errors.name && <small className="text-danger">Este campo é obrigatório</small>}
                            </div>
                            <div className="mb-3">
                                <label >Dono da Escola</label>
                                <input className="form-control" {...register("owner", { required: true })} />
                            </div>
                            <div className="mb-3">
                                <label >Província</label>
                                <select className="form-select" {...register("province", { required: true })} >
                                    <option value="">Selecione uma província</option>
                                    <option value="Luanda">Luanda</option>
                                    <option value="Benguela">Benguela</option>
                                    <option value="Namibe">Namibe</option>
                                </select>
                            </div>
                        <div className="mb-3">
                            <label >Município</label>
                            <select className="form-select" {...register("municipality")} >
                                <option value="">Selecione</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label >Localização</label>
                            <input className="form-control" {...register("location")} />
                        </div>
                        <div className="mb-3">
                            <label >Contactos</label>
                            <input className="form-control" {...register("contacts")} />
                        </div>
                        <div className="mb-3">
                            <label >NIF</label>
                            <input className="form-control" {...register("nif", { pattern: /^[0-9]{9}$/ })} />
                            {errors.nif && <small className="text-danger">NIF inválido</small>}
                        </div>
                         <div className="mb-3">
                            <label >Dr. Geral</label>
                            <input className="form-control" {...register("generalDirector", { required: true })} />
                            {errors.generalDirector && <small className="text-danger">Este campo é obrigatório</small>}
                        </div>
                        <div className="mb-3">
                            <label >Dr. Pedagógico</label>
                            <input className="form-control" {...register("pedagogicalDirector", { required: true })} />
                            {errors.pedagogicalDirector && <small className="text-danger">Este campo é obrigatório</small>}
                        </div>
                    </div>
                    {/* COLUNA A DIREITA */}
                    <div className="col-md-5 text-center">
                        <div className="border mb-3 d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                            {logoPreview ? (
                                <img src={logoPreview} alt="Logo Preview" style={{ maxHeight: '100%' }} />
                            ) : (
                                "Logotipo"
                            )}
                        </div>
                        <input type="file" className="form-control mb-3" onChange={handleLogoChange} />
                        <button className="btn btn-primary w-100">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}