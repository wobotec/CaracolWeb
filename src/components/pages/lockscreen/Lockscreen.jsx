import iconProfile from "./../../../assets/img/profile_small.jpg";
import { useAuth } from "../../../hooks/useAuth"

const LockScreen = () => {

    const { user } = useAuth()

    return (<body className="gray-bg">

        <div class="row animated fadeInDown">
            <div class="col-md-4" style={{ backgroundColor: "blue" }}>                
                <div className="middle-box text-center lockscreen animated fadeInDown">
                    <p>Meu texto</p>                    
                </div>
            </div>
            <div class="col-md-4" style={{ backgroundColor: "orange" }}>
              
                <div className="middle-box text-center lockscreen animated fadeInDown">
                    <p>Meu texto</p>
                    <div>
                        <div className="m-b-md">
                            <img alt="image" className="img-circle circle-border" src={iconProfile} />
                        </div>
                        <h3>{user?.name}</h3>
                        <p>Your are in lock screen. Main app was shut down and you need to enter your passwor to go back to app.</p>
                        <form className="m-t" role="form" action="index.html">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="******" required="" />
                            </div>
                            <button type="submit" className="btn btn-primary block full-width">Desbloqueiar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-4" style={{ backgroundColor: "red" }}>               
                <div className="middle-box text-center lockscreen animated fadeInDown">
                    <p>Meu texto</p>                    
                </div>
            </div>
        </div>
    </body>);
}

export default LockScreen;