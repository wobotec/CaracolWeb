const PageBase = (props) => {
    return (
        <>
            <div className="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-10">
                    <h2>
                        {props.title}
                        <p className="line">¯¯¯¯¯</p>
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
