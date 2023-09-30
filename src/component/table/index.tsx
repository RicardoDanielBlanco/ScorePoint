import { useContext, useState } from "react";
import { ScoreContext } from '../../context/ScoreContext';


interface Objeto {
    nombre: string;
    puntaje: number;
  }

function Table(){
  const { scoreList } = useContext(ScoreContext);
  const listaOrdenada1 = scoreList.sort((a, b) => (b as Objeto).puntaje - (a as Objeto).puntaje);
  const [listaOrdenada] = useState<Objeto[]>(listaOrdenada1 as Objeto[]);

  return(
      <>
      <h4>Score Table</h4>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {listaOrdenada.map((objeto, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{objeto.nombre}</td>
            <td>{objeto.puntaje}</td>
          </tr>
        ))}
      </tbody>
      </table>
      </>
  )
}

export default Table;