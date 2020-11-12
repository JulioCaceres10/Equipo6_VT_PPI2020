import React from "react";
import "../Style/cose.css";
function Cose() {
  return (
    <>
      <div class="body1">
        <h1 class="tCO">Cosechar</h1>
        <h3 class="subCO">Aprende a cultivar tomate en casa</h3>
        <svg
          class="wave1"
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
      <p class="texcos">
        Si quieres aprender a cultivarlos, te compartimos algunos puntos clave
        para conseguirlo.
      </p>
      <h3 class="subtex">¿Cómo seleccionar la semilla de tomate?</h3>
      <p class="texcos1">
        La semilla de tomate se encuentran en el interior del fruto. Para
        recolectarlas, se recomienda elegir tomates grandes y maduros; ya que
        algunas personas creen que existe un 90 % de probabilidad de que los
        futuros frutos sean de las mismas características. Una vez elegidas, se
        deben poner en un lugar fresco, seco y alejado de la luz solar durante
        tres días. Cuando haya pasado el tiempo aconsejado, se almacenan en una
        bolsa hermética hasta el momento de la siembra.
      </p>
      <img
        class="toma1"
        src="data:image/jpeg;base64,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"
      />
      .<h3 class="subtex">¿Cómo preparar la tierra para cultivar tomate?</h3>
      <p class="texcos1">
        se aconseja plantar tomate en suelos arenosos, ya que este se desarrolla
        con una mayor facilidad en suelos fértiles y drenados. La profundidad
        del terreno no debe ser inferior a 18 pulgadas (45 cm), y se debe lograr
        que adquiera las condiciones físicas adecuadas: suave, drenado y
        ventilado. Además, es importante abonarlo con abundante materia
        orgánica. Asimismo, si quieres cultivar tomate, hazlo en un lugar donde
        pueda recibir el sol mínimo 8 horas diarias. No obstante, recuerda que
        el verano favorece la aparición de las plagas en el huerto, así que ten
        precaución para no perder la cosecha.
      </p>
      <h3 class="subtex"> Modo de siembra y algunas especificaciones</h3>
      <p class="texcos1">
        Se recomienda germinar las semillas en un semillero pequeño antes de
        trasplantar las plántulas a un huerto o maceta grande. Además, este
        procedimiento se debe llevar a cabo cuando las pequeñas plantas alcancen
        una altura de 4 a 5 pulgadas (10 o 12 cm).
      </p>
      <ul class="texcos1">
        <li>
          El trasplante se debe hacer en un hoyo de unas 6 pulgadas de ancho por
          4 pulgadas (15 cm x 10 cm) de profundidad.
        </li>
        <li>
          Luego, se incorpora una cantidad importante de compost (abono) y se
          introduce la plántula con cuidado.
        </li>
        <li>
          A unas 6 pulgadas retirado de la planta, clava una estaca de madera de
          5 pies de alto (1,5 metros) con el fin de amarrarla y brindarle
          soporte conforme va creciendo.
        </li>
        <li>
          Para que su desarrollo sea más rápido, realiza hileras de plantas con
          distancias de dos pies (60 cm) y usa la misma medida entre una y otra
          planta.
        </li>
      </ul>
      <p class="texcos1">
        Asimismo, procura mantener siempre la zona limpia, sin malas hierbas y
        con un buen control de los hongos, las bacterias y otras plagas.
      </p>
      <img
        class="toma1"
        src="https://mejorconsalud.com/wp-content/uploads/2015/10/Tomate1-500x334.jpg"
      />
      <h3 class="subtex">¿Cómo regar la semilla?</h3>
      <p class="texcos">
      En la etapa de sembrado, el semillero se debe mantener al sol y debes regarlo de tres a cuatro veces al día. Así, la adecuada absorción de agua por parte de las semillas y las altas temperaturas causadas por el sol son las que promoverán la germinación.
      </p>
      <ul class="texcos1">
        <li>Cuando la planta ya cuente con su primer par de hojas, los especialistas Dan Drost y Celina G. Wille aconsejan regarla con 1-2 pulgadas de agua durante una o dos veces a la semana.</li>
        <li>Una vez se desarrolle su tercer par de hojas, el riego solo se realiza una vez al día.</li>
        <li>Durante el desarrollo vegetativo y tras realizar el trasplante, la planta se riega con abundante agua pero solo en su raíz.</li>
      </ul>
      <p class="texcos1">Por último, es importante tener en cuenta que la humedad nunca debe faltar en el suelo, pero tampoco debe ser excesiva porque puede deteriorar el producto.</p>
      <p class="espaZ"></p>
    </>
  );
}

export default Cose;
