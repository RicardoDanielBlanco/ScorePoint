import { ReactNode, createContext, useEffect, useState } from "react";

export interface objectItem {
  nombre: string;
  puntaje: number;
}

export interface ScoreContextType {
  scoreList: objectItem[];
  setScoreList: React.Dispatch<React.SetStateAction<objectItem[]>>;
}

export const ScoreContext = createContext<ScoreContextType>({
  scoreList: [],
  setScoreList: () => {},
});

interface ScoreProviderProps {
  children: ReactNode;
}

function ScoreProvider({children}: ScoreProviderProps){
    const [scoreList, setScoreList] = useState<objectItem[]>(JSON.parse(localStorage.getItem('scorelist') ?? '[]'))
    const value = {scoreList, setScoreList}
  
    useEffect(()=>{
      localStorage.setItem('scorelist', JSON.stringify(scoreList));
    }, [scoreList])
  
    return (
      <ScoreContext.Provider value={value}>
        {children}
      </ScoreContext.Provider>
    )
  }
  
  export default ScoreProvider;