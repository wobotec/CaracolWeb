import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

import splash1 from './../../../assets/img/splash/splash1.jpg';
import splash2 from './../../../assets/img/splash/splash2.jpg';
import splash3 from './../../../assets/img/splash/splash3.jpg';
import splash4 from './../../../assets/img/splash/splash4.jpg';

import back1 from './../../../assets/img/back/back1.jpg';

const SLIDES = [  
{ tag: "Bem-vindo",         title: "Software de Gestão Escolar",       sub: "Gerencie sua escola de forma simples e completa." },
{ tag: "Mód. Pedagógico", title: "Ensino na palma da mão",           sub: "Acompanhe turmas, aulas e desempenho dos alunos." },
{ tag: "Módulo Administrativo", title: "Gestão eficiente do dia a dia", sub: "Controle processos, equipes e relatórios em um só lugar." },
{ tag: "Módulo Financeiro", title: "Suas finanças sob controle",        sub: "Gerencie mensalidades, cobranças e fluxo de caixa." },
];

const IMGS = [
  splash1,splash2,splash3,splash4,
];

// prefixo — para evitar vazamento
const P = "su23";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
.${P}-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;background-size:cover;background-position:center;background-repeat:no-repeat;font-family:'Nunito',sans-serif;padding:20px;}
.${P}-card{background:#fff;border-radius:20px;box-shadow:0 10px 40px rgba(0,0,0,.15);overflow:hidden;width:820px;max-width:95vw;min-height:460px;display:flex;align-items:stretch;}
.${P}-left{flex:0 0 45%;position:relative;overflow:hidden;border-radius:20px 0 0 20px;display:flex;flex-direction:column;}
.${P}-slides{flex:1;position:relative;}
.${P}-slide{position:absolute;inset:0;opacity:0;transition:opacity .6s ease;}
.${P}-slide.${P}-active{opacity:1;}
.${P}-slide img{width:100%;height:100%;object-fit:cover;display:block;}
.${P}-caption{position:absolute;bottom:52px;left:0;right:0;padding:0 28px;}
.${P}-tag{display:inline-block;background:rgba(255,255,255,.2);border:1px solid #007AF0;color:#007AF0;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:3px 10px;border-radius:20px;margin-bottom:8px;}
.${P}-ctitle{font-size:18px;font-weight:800;color:#007AF0;margin:0 0 4px;line-height:1.3;}
.${P}-csub{font-size:12px;color:#000;margin:0;}
.${P}-dots{position:absolute;bottom:18px;left:28px;display:flex;gap:6px;}
.${P}-dot{height:7px;width:7px;border-radius:4px;background:#007AF0;border:none;cursor:pointer;transition:width .3s,background .3s;padding:0;}
.${P}-dot.${P}-dotOn{width:22px;background:#007AF0;}
.${P}-arr{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.25);border:none;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s;color:#fff;font-size:18px;font-weight:700;line-height:1;}
.${P}-left:hover .${P}-arr{opacity:1;}
.${P}-arrL{left:8px;}
.${P}-arrR{right:8px;}
.${P}-createLink{position:absolute;bottom:14px;right:18px;font-size:12px;color:rgba(255,255,255,.75);text-decoration:underline;cursor:pointer;font-weight:600;background:none;border:none;z-index:10;font-family:'Nunito',sans-serif;}
.${P}-createLink:hover{color:#fff;}
.${P}-div{width:1px;background:#eee;}
.${P}-right{flex:1;padding:50px 50px 40px;display:flex;flex-direction:column;justify-content:center;}
.${P}-right h2{font-size:32px;font-weight:800;color:#1a1a2e;margin:0 0 32px;letter-spacing:-.5px;}
.${P}-field{display:flex;align-items:flex-end;border-bottom:2px solid #ddd;margin-bottom:24px;padding-bottom:6px;transition:border-color .25s;}
.${P}-field:focus-within{border-color:#4da6e8;}
.${P}-icon{color:#aaa;margin-right:10px;font-size:15px;padding-bottom:2px;user-select:none;}
.${P}-input{border:none;outline:none;width:100%;font-size:14px;font-family:'Nunito',sans-serif;color:#333;background:transparent;}
.${P}-input::placeholder{color:#bbb;}
.${P}-remRow{display:flex;align-items:center;gap:8px;margin-bottom:26px;}
.${P}-remRow input{width:15px;height:15px;cursor:pointer;accent-color:#4da6e8;}
.${P}-remRow label{font-size:13px;color:#666;cursor:pointer;margin:0;font-weight:600;}
.${P}-btn{background:#6db8e8;color:#fff;border:none;border-radius:8px;padding:12px 40px;font-size:15px;font-weight:700;font-family:'Nunito',sans-serif;cursor:pointer;display:inline-block;margin-bottom:28px;transition:background .2s,transform .15s;}
.${P}-btn:hover{background:#4a9fd4;transform:translateY(-1px);}
.${P}-btn:active{transform:translateY(0);}
.${P}-social{display:flex;align-items:center;gap:10px;}
.${P}-social span{font-size:13px;color:#888;font-weight:600;margin-right:4px;}
.${P}-sBtn{width:36px;height:36px;border-radius:8px;border:none;color:#fff;font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity .2s,transform .15s;font-weight:700;font-family:'Nunito',sans-serif;}
.${P}-sBtn:hover{opacity:.85;transform:translateY(-1px);}
@media(max-width:640px){
  .${P}-card{flex-direction:column;}
  .${P}-div{display:none;}
  .${P}-left{min-height:260px;border-radius:20px 20px 0 0;}
  .${P}-right{padding:30px 24px;}
}
`;

const c = (name) => `${P}-${name}`;

export default function Login() {

  const { login, loading, error, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) return
    await login(form)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  
  const [current, setCurrent] = useState(0);  

  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % SLIDES.length), 3500);
    return () => clearInterval(id);
  }, []);

  const go   = (i) => setCurrent(i);

  return (
    <>
      <style>{STYLES}</style>

      <div
        className={c("wrap")}
        style={{ backgroundImage: `url(${back1})` }}
      >
        <div className={c("card")}>

          {/* ── LEFT PANEL ── */}
          <div className={c("left")}>
            <div className={c("slides")}>
              {SLIDES.map((s, i) => (
                <div
                  key={i}
                  className={`${c("slide")}${i === current ? " " + c("active") : ""}`}
                >
                  <img src={IMGS[i]} alt={s.title} />
                  <div className={c("overlay")} />
                  <div className={c("caption")}>
                    <span className={c("tag")}>{s.tag}</span>
                    <p className={c("ctitle")}>{s.title}</p>
                    <p className={c("csub")}>{s.sub}</p>
                  </div>
                </div>
              ))}

              <div className={c("dots")}>
                {SLIDES.map((_, i) => (
                  <button disabled
                    key={i}
                    className={`${c("dot")}${i === current ? " " + c("dotOn") : ""}`}
                    onClick={() => go(i)}
                  />
                ))}
              </div>              
            </div>            
          </div>

          {/* ── DIVIDER ── */}
          <div className={c("div")} />

          {/* ── RIGHT PANEL ── */}
          <div className={c("right")}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center w-100">
            <div className={c("field")}>
              <span className={c("icon fa fa-user")}></span>
              <input className={c("input")}  type="text" label="Email" value={form.email}
              onChange={handleChange} name="email" placeholder="Digite seu email"/>
            </div>
            

            <div className={c("field")}>
              <span className={c("icon fa fa-lock")}></span>
              <input className={c("input")} name="password" value={form.password} type="password" onChange={handleChange}
            placeholder="Digite sua senha" />
            </div>
      

            <div>
              <button disabled={loading} className={c("btn btn-login btn-primary")}>{loading ? 'Entrando...' : 'Login'}</button>
            </div>            
              
              {error && <p className="text-darnger text-sm">{error}</p>}
            
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
