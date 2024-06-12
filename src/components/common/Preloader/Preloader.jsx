import preloader from '../../../assets/images/Loading.gif';
import React from "react";

const Preloader = (props) => {
    return <div>
        <img src={preloader} alt='Loading' style={{width: '100px'}}/>
    </div>
};

export default Preloader;