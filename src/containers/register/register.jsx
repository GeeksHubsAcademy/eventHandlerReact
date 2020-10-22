
import React, {useState} from 'react';
import { useHistory } from "react-router";

import axios from 'axios';

//import './register.scss';



const Register = () => {

    //HOOKS /////////////////////////////////////

    const [user, setUser] = useState({
        nombre: "",
        apellidos: "",
        email: ""
    })

    const [mensaje, setMensaje] = useState("");

    // const [cliente, setCliente] = useState([]);

    const history = useHistory();
    
    ///////////////////////////////////////////////////

    const manejaEstado = ev => {
        
        setUser({...user, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});

    };

    const enviaRegistro = () => {

        //control de errores y Regex
        
        // if(user.nombre === "" || user.apellidos === "" || user.email === ""){
        //     setMensaje("Has olvidado rellenar alguno de los campos");
        //     return; 
        // }

        //preparación de datos del body

        let userBody = {
            nombre : user.nombre,
            apellidos : user.apellidos,
            direccion : "calle falsa",
            email : user.email,
            telefono: "",
            edad: 21,
            password: "Admin1234!"
        };

        //llamada axios a la base de datos

        axios.post('aquiDepositamosLaDireccionDelEndpoint',userBody)
        .then(res=>{
            //console.log(res);
            //setCliente(res.data);
            //guardamos en localstorage
            console.log(res.data);

            
            setMensaje(`Querido  ${res.data.nombre}, bienvenido a nuestra plataforma`);
           
            setTimeout(() => {
                history.push("/")
            }, 1500);
        })
        .catch(error=>setMensaje(error.response.data.message));


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
            <div>{mensaje}</div>
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