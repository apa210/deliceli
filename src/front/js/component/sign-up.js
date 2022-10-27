import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
    return ( 
        <>
            <div className="modal fade" id="staticBackdropSignUp" data-bs-backdrop="static" data-bs-keyboard="false" 
                tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <label><h1 className="modal-title fs-5" id="staticBackdropLabel"><b>Registrarte</b></h1></label>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body text-center">
                                <div className="input-group mb-3">
                                    <input required type="text" className="form-control me-3" id="inputFirstName" placeholder="Nombre" 
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>

                                    <input required type="text" className="form-control" id="inputLastName" placeholder="Apellido"
                                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                </div>
                                <div className="mb-3">
                                    <input required type="email" className="form-control" id="inputEmail" placeholder="Correo electrónico" 
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input required type="text" className="form-control me-3" id="inputUserNameSignUp" placeholder="Nombre de usuario" 
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>

                                    <input required type="tel" className="form-control" id="inputPhone" placeholder="Teléfono"
                                            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                </div>
                                <div className="mb-3">
                                    <input required type="password" className="form-control" id="inputPasswordSignUp" placeholder="Contraseña" 
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                </div>
                                <input required type="password" className="form-control" id="inputConfirmationPassword" placeholder="Repita la contraseña" 
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                                
                                 <label className="mt-2">¿Ya tienes una cuenta?</label> <Link data-bs-target="#staticBackdrop" data-bs-toggle="modal" to="" 
                                    className="text-decoration-none">Ingresa ahora</Link>
                            </div>
                            <div className="text-center m-3">
                                <button type="submit" className="btn btn-primary w-25 col-12">Registrarte</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}