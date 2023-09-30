import { useContext, useState, useRef, useEffect } from "react";
import { ScoreContext, objectItem } from '../../context/ScoreContext';

function TableEdit() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { scoreList, setScoreList } = useContext(ScoreContext);
    const [puntosAAgregar, setPuntosAAgregar] = useState(0);
    const [listaDeObjetos, setListaDeObjetos] = useState<objectItem[]>([]);

    useEffect(() => {
        // Convierte scoreList a objectItem en el montaje inicial
        const convertedList = scoreList.map((item: objectItem) => ({ nombre: item.nombre, puntaje: item.puntaje }));
        setListaDeObjetos(convertedList);
    }, [scoreList]);

    const handlePuntosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nuevosPuntos = parseInt(e.target.value, 10);
        setPuntosAAgregar(nuevosPuntos);
    };

    const agregarPuntos = (index: number) => {
        const nuevaLista = [...listaDeObjetos];
        nuevaLista[index].puntaje += puntosAAgregar;
        setScoreList(nuevaLista.map((item) => ({ nombre: item.nombre, puntaje: item.puntaje }))); // Actualiza el estado con la nueva lista

        setPuntosAAgregar(0);
    };

    const eliminarElemento = (index: number) => {
        const nuevaLista = [...listaDeObjetos];
        nuevaLista.splice(index, 1); // Elimina el elemento en el índice especificado
        setScoreList(nuevaLista.map((item) => ({ nombre: item.nombre, puntaje: item.puntaje }))); // Actualiza el estado con la nueva lista
    };

    return (
        <>
            <h4>Score Table</h4>
            <input ref={inputRef}
                type="number"
                value={puntosAAgregar}
                onChange={handlePuntosChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Add Points</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDeObjetos.map((objeto, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{objeto.nombre}</td>
                            <td>{objeto.puntaje}</td>
                            <td>
                                <button onClick={() => agregarPuntos(index)}>
                                    Add Points
                                </button>
                            </td>
                            <td>
                                <button onClick={() => eliminarElemento(index)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TableEdit;