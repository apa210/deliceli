import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    return ( 
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" 
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <label><h1 className="modal-title fs-5" id="staticBackdropLabel"><b>Inicio de Sesión</b></h1></label>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body text-center">
                                <img className="w-25" src="https://assets.stickpng.com/images/585e4beacb11b227491c3399.png" 
                                    alt="Imagen de usuario"/>
                                <div className="input-group mt-3 w-75 mx-auto">
                                    <label className="input-group-text" htmlFor="inputUserName" id="inputGroup-sizing-lg">
                                        <i className="fas fa-user"></i>
                                    </label>
                                    <input type="text" className="form-control" id="inputUserName" placeholder="Usuario" 
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                </div>
                                <div className="input-group my-2 w-75 mx-auto">
                                    <label className="input-group-text" htmlFor="inputPassword" id="inputGroup-sizing-lg">
                                        <i className="fas fa-lock"></i>
                                    </label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña"
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                </div>
                                <Link to="" className="text-center text-decoration-none">¿Olvidaste tu contraseña?</Link>
                            </div>
                            <div className="text-center m-3">
                                <button type="submit" className="btn btn-primary w-75 col-12">Ingresar</button>
                                <label className="mt-2">¿No estás registrado aún?</label> <Link  data-bs-target="#staticBackdropSignUp" 
                                data-bs-toggle="modal" to="" className="text-decoration-none">¡Regístrate ahora!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}