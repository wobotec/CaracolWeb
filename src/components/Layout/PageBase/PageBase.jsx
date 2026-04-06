import { Outlet } from "react-router-dom"

const PageBase = (props) => {
    return (
        <>
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>
                        {props.title}
                        <p className="line">----- <span style={{ color: '#000', fontSize: '50%' }} > {props.subtitle}</span> </p>                        
                    </h2>                    
                </div>
            </div>

            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">{props.children}</div>
                </div>
            </div>
        </>
    );
};

export default PageBase;
