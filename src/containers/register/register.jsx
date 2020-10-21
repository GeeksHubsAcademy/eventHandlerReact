
import React, {useState} from 'react';
import { useHistory } from "react-router";

import axios from 'axios';

//import './register.scss';



const Register = () => {

    const [user, setUser] = useState({
        nombre: "",
        apellidos: "",
        email: ""
    })

    const [msError, setError] = useState("");

    const [cliente, setCliente] = useState([]);

    const history = useHistory();
    
    const manejaEstado = ev => {
        
        setUser({...user, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});

    };

    const enviaRegistro = () => {

        //control de errores y Regex
        
        if(user.nombre === "" || user.apellidos === "" || user.email === ""){
            setError("Has olvidado rellenar alguno de los campos");
            return; 
        }

        //preparación de datos del body

        let userBody = user;

        //llamada axios a la base de datos

        axios.post('http://localhost:3001/users/registro',userBody)
        .then(res=>{
            //console.log(res);
            setCliente(res.data);
            //guardamos en localstorage
            setError("Querido", res.data.username, "bienvenido a nuestra plataforma");

            setTimeout(() => {
                history.push({
                    path: "/"
                })
            }, 1500);
        })
        .catch(error=>setError(error.response.data.message))


    }
    
    return(
        <div>
        <pre>{JSON.stringify(user, null,2)}</pre>
            <p>Nombre</p>
            <input type="text" maxLength="30" placeholder="" name="nombre" onChange={manejaEstado}></input>
            <p>Apellidos</p>
            <input type="text" maxLength="30" placeholder="" name="apellidos" onChange={manejaEstado}></input>
            <p>Email</p>
            <input type="email" maxLength="30" placeholder="" name="email" onChange={manejaEstado}></input>
            <button onClick={() => {enviaRegistro()}}>Enviar</button>
            <div>{msError}</div>
        </div>
    );
    
    

    
}

export default Register



//componentes de clase



// class Register extends React.Component {
    
//     constructor (props) {
//         super(props);

//         this.state = {
//             nombre : "",
//             apellidos: "",
//             email: ""
//         }
        
//     };

    
//     manejaEstado = ev => {
//         this.setState({ [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value });
//     };
    
    
//     render() {
//         return(
//             <div>
//             <pre>{JSON.stringify(this.state, null,2)}</pre>
//                 <p>Nombre</p>
//                 <input type="text" maxLength="30" placeholder="" name="nombre" value={this.state.nombre} onChange={this.manejaEstado}></input>
//                 <p>Apellidos</p>
//                 <input type="text" maxLength="30" placeholder="" name="apellidos" value={this.state.apellidos} onChange={this.manejaEstado}></input>
//                 <p>Email</p>
//                 <input type="email" maxLength="30" placeholder="" name="email" value={this.state.email} onChange={this.manejaEstado}></input>
//             </div>
//         );
//     };
    
    
// };


// export default Register;