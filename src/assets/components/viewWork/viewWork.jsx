import { StyleViewWork } from "./styleViewWork.jsx";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { WorkContext } from "../../provider/workContext.jsx";

export function ViewWork() {
  const [work, setWork] = useState(false);

  const navigate = useNavigate();
  const { workid } = useParams();
  const { works } = useContext(WorkContext);

  useEffect(() => {
    if (works.length > 0) {
      const correctWork = works.filter((work) => work.id == workid);
      setWork(correctWork[0]);
    }
  }, [works]);

  function closeModal() {
    navigate("/dash");
  }

  function editWork(title, id) {
    navigate(`/dash/work/${title}/${id}`);
  }

  return (
    <StyleViewWork>
      <div>
        <div className="header__container">
          <h2>Detalhes do Projeto </h2>
          <span onClick={() => closeModal()}>X</span>
        </div>

        <div className="container">
          <div className="edit">
            <h1>{work.title}</h1>
            <CiEdit onClick={() => editWork(work.title, work.id)} />
          </div>

          <div>
            <label htmlFor="description">Descrição</label>
            <p id="description">{work.description}</p>
          </div>

          <div>
            <label htmlFor="url">URL do Projeto </label>
            <a id="url" target="_blank" href={work.deploy_url}>
              {work.deploy_url}
            </a>
          </div>
        </div>
      </div>
    </StyleViewWork>
  );
}
