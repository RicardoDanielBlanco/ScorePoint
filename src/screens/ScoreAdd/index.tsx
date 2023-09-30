import { FormEvent, useContext, useRef } from 'react';
import styles from './styles.module.css'
import { ScoreContext } from '../../context/ScoreContext';

function ScoreAdd(){
  const { scoreList, setScoreList } = useContext(ScoreContext);
  const formRef = useRef<HTMLFormElement>(null);

  function handleadd(event : FormEvent<HTMLFormElement>){
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const point = parseInt(formData.get('defaultpoint') as string);
    const competitor = {nombre: name, puntaje: point}

    setScoreList([...scoreList, competitor]);

    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return(
    <div>
      <h2>Agregar participantes</h2>
      <div className={styles.BoxAdd}>
        <form onSubmit={handleadd} ref={formRef} >
          <label htmlFor="name">Nombre y apellido</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="points">Puntaje inicial</label>
          <input type="number" name="defaultpoint" id="points" defaultValue={0}/>
          <button type="submit">Agregar</button>
        </form>
      </div>
    </div>
  )
}

export default ScoreAdd;