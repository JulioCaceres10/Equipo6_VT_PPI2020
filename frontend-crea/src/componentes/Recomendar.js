import React from "react";
import "../Style/recomenda.css";

function Recomendar() {
  return (
    <>
      <div class="header1">
        <h1 class="tRE">Recomendaciones para un buen cultivo</h1>
        <h3 class="subRE">
          ¿Está pensando en hacer su propio cultivo pero no sabe qué debe tener
          en cuenta para no fallar en el intento?
        </h3>
        <svg
          class="wave2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,90.7C480,96,600,128,720,149.3C840,171,960,181,1080,170.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <p class="texrec1">
        Para llevar a cabo un cultivo con éxito, es necesario tener en cuenta
        algunos aspectos como las labores de la siembra, el sostén de las
        plantas, podas, fertilización y el manejo de plagas y enfermedades. Así
        mismo, es pertinente prestarle atención a un cuidado especial y al
        proceso de evolución, llevando a cabo cultivos en óptimas condiciones.
      </p>
      <h3 class="subtex">1. Distribución correcta del invernadero</h3>
      <p class="texrec">
        Teniendo una correcta distribución del invernadero, evitará la
        generación de sombras, lo cual optimizará la captación de la luz
        necesaria para la fotosíntesis. Así mismo, cada cultivo deberá tener el
        área suficiente para su correcto crecimiento. Recuerde que en la mayoría
        de los casos, es necesario optar por productos como las geomembranas, de
        esta manera podrá proteger su cultivo eficientemente.
      </p>
      <h3 class="subtex">2. Mantener vigilado el cultivo</h3>
      <p class="texrec">
        Es necesario asegurarse que el potencial de su producción no se pierda
        por descuidos como las enfermedades y plagas que aparecen en el momento
        menos esperado. Por ejemplo, los hongos foliares e infestación de
        insectos, reducen la capacidad de la fotosíntesis y las enfermedades
        afectan la raíz, desarrollo y vida de los cultivos. Además, los virus y
        bacterias se transmiten de planta a planta acabando áreas sustantivas
        del terreno. Por estas razones es necesario identificar problemas de
        inicio y poner en práctica.
      </p>
      <img
        class="imgREC"
        src="data:image/jpeg;base64,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"
      />
      <h3 class="subtex">3. Uniformidad del cultivo</h3>
      <p class="texrec">
        La uniformidad del cultivo impulsa la explotación optima de los
        recursos, para lograrlo es necesario una correcta distribución del
        cultivo. Es importante tener en cuenta el diseño de su invernadero y
        minimizar los factores del clima y riego. El factor más importante para
        lograrlo, será la calidad del trabajo y que se realice a tiempo. Así
        mismo son necesarios productos como los tanques de almacenamiento para
        el agua, para conseguir dicha uniformidad.
      </p>
      <h3 class="subtex">4. Optimice la luz</h3>
      <p class="texrec">
        Será oportuno evitar las sombras, para ello, es necesario realizar un
        análisis para la correcta ubicación del invernadero. Lo recomendable es
        analizar los factores, modificar la calidad y la cantidad de radiación
        que llega a su cultivo.
      </p>
      <h3 class="subtex">5. Optimice la temperatura</h3>
      <p class="texrec">
        El manejo de la temperatura se basa en la estructura y el diseño del
        invernadero, junto con el lugar de instalación. Tenga en cuenta que
        proveer ventilación e insolación es necesario, mantener el invernadero
        bajo condiciones ambientales óptimas para el cultivo, permitiendo que el
        flujo de aire caliente y frío sea controlado de forma mecánica dentro
        del invernadero.
      </p>
      <p class="espaP"></p>
    </>
  );
}

export default Recomendar;
