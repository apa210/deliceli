import React from "react";

export const ForgetPassword = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdropForgetPassword"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Recupera tu cuenta
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center w-75 mx-auto">
            <i className="fas fa-user-lock fa-3x mb-3"></i>
            <h5 className="mb-3">¿Tienes problemas para entrar?</h5>
            <div className="form-text mb-3">
              Introduce tu correo electrónico y te enviaremos un enlace para que
              vuelvas a entrar en tu cuenta.
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="modal-footer justify-content-center p-3 mb-2">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary px-4">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
