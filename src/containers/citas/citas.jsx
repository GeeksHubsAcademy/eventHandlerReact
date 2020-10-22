
import React, {useEffect, useState} from 'react';
// import { useHistory } from "react-router";

import axios from 'axios';

import './citas.scss';

const Cita = () => {

    //HOOKS /////////////////////////////////////

    const [datosCitas, setCitas] = useState([]);
    
    
    ///////////////////////////////////////////////////

    useEffect(() => {

        axios.get('https://clinic-appointments-mongodb.herokuapp.com/appointments/showall')
        .then( (res) => {
            console.log(res.data);
            setCitas(res.data);

            localStorage.setItem("Citas", JSON.stringify(res.data));
			
		}).catch( (err) => {
			console.log( err );
        });

    },[]);
        	
   const localizaConcretamente = (cita) => {
        //console.log(cita.title);
        let storage = JSON.parse(localStorage.getItem("Citas"));
        console.log(storage);
   }   

   return(
        <div>
                HOLA SOY EL COMPONENTE CITAS
                {datosCitas.map(cita => <div className="cardCita" key={cita._id} onClick={()=>localizaConcretamente(cita)}>{cita.title}</div>)}
                
        </div>
    );
     
}

export default Cita