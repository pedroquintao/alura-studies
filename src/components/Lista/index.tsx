import style from "./Lista.module.scss";
import Item from "./Item";
import { ITarefa } from "../../types/tarefa";

interface ListaProps {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: ListaProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
