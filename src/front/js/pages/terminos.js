import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Footer_contact from "../component/footer_contact";

export const Terminos = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <section>
        <div className="container-fluid bgimage-about text-center p-5 align-baseline mb-5">
          <div className="container">
            <h1 className="mt-5">Términos y Condiciones</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 mb-5">
          <h2> Términos y condiciones aplicables al uso del sitio web. </h2>{" "}
          <br /> <hr />
          <br />
          <div className="row">
            <div className="col-lg-6">
              Gracias por visitar la página de términos y condiciones (los
              Términos y Condiciones”) de DELICELI.UY. El acceso a y uso de
              cualquiera de nuestros sitios web, DELICELI.UY, y/o a todos los
              sitios web adicionales de DELICELI.UY (los “Sitios web de
              DELICELI.UY ”) están sujetos a los siguientes Términos y
              Condiciones y leyes aplicables. <br />
              <br />
              Al acceder y navegar en los Sitios web de DELICELI.UY , usted
              acepta estos Términos y Condiciones sin limitación o condición
              alguna, incluyendo los términos y condiciones adicionales o
              modificados que DELICELI.UY publique de tiempo en tiempo. Ciertos
              servicios y otras ofertas disponibles en los Sitios web de
              DELICELI.UY pueden tener términos y condiciones adicionales
              aplicables, los cuales pueden leerse en las páginas que contengan
              dichos servicios u ofertas o por medio de un vínculo en dichas
              páginas u otras direcciones referenciadas hacia dichos términos y
              condiciones adicionales.
              <br />
              <br />
              DELICELI.UY se reserva el derecho a realizar cambios en los
              términos y condiciones cuando sea pertinente. Propiedad
              Intelectual Los Sitios web de DELICELI.UY son propiedad de y
              operados por DELICELI.UY y/o sus afiliadas, y están protegidos por
              las leyes de derecho de autor bajo las leyes de Uruguay. Los
              derechos de autor sobre el contenido y el software proporcionado
              son propiedad de o están licenciados a favor de DELICELI.UY .
              Están reservados todos los derechos no otorgados expresamente
              aquí. El material de los Sitios web de DELICELI.UY no puede
              reproducirse, distribuirse o transmitirse de forma alguna sin
              autorización previa y por escrito de DELICELI.UY .
              <br />
              <br />
            </div>
            <div className="col-lg-6">
              Ningún vínculo a cualquiera de los Sitios web de DELICELI.UY puede
              crearse sin autorización expresa y por escrito de DELICELI.UY .
              Los usuarios de cualquiera de los Sitios web de DELICELI.UY pueden
              descargar una copia de cualquier o todo material en dicho sitio
              web para su uso personal y sin fines comerciales, siempre que no
              se modifique o altere dicho material de forma alguna, o elimine o
              modifique cualquier aviso o leyenda en materia de derechos de
              autor o propiedad industrial. No se otorga ni está implícito
              derecho o licencia alguna sobre dicho material. Todo el material
              de dicho sitio web se proporciona únicamente para fines lícitos.
              Las imágenes de individuos o lugares en dicho sitio web son
              propiedad de DELICELI.UY o se utilizan mediante autorización a
              favor de DELICELI.UY .
              <br />
              <br />
              El uso o uso indebido de dichas imágenes queda prohibido, salvo
              por el uso expresamente autorizado. DELICELI.UY se reserva todo
              título y derechos intelectuales de los materiales descargados de
              dicho sitio. Cualquier información, incluyendo sin limitación los
              comentarios, sugerencias, ideas, gráficas u otra información
              comunicada a DELICELI.UY por medio de este sitio no es
              confidencial. DELICELI.UY se reserva el derecho de reproducir,
              distribuir o utilizar dicha información comunicada para cualquier
              fin y sin compensación a la persona que envíe dicha información.
              El usuario reconoce la originalidad de cualquier información
              comunicada a DELICELI.UY y asume la responsabilidad de su
              precisión, adecuación y legalidad.
            </div>
          </div>
        </div>
      </section>

      <Footer_contact />
    </>
  );
};
