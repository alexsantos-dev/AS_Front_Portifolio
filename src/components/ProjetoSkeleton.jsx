import { SkeletonContainer } from "./ProjetoSkeleton.styles";

export function ProjetoSkeleton(props) {
  return (
    <SkeletonContainer key={props.id}>
      <div className="status">
        <div className="skeleton"></div>
      </div>
      <div className="banner">
        <div className="skeleton"></div>
      </div>
      <div className="descricao">
        <h3>
          <div className="skeleton"></div>
        </h3>
        <p>
          <div className="skeleton"></div>
        </p>
        <div className="tecnologias">
          <span>
            <div className="skeleton"></div>
          </span>
          <span>
            <div className="skeleton"></div>
          </span>
          <span>
            <div className="skeleton"></div>
          </span>
        </div>
      </div>
      <div className="interacoes">
        <button>
          <div className="skeleton"></div>
        </button>
        <button>
          <div className="skeleton"></div>
        </button>
        <button>
          <div className="skeleton"></div>
        </button>
      </div>
    </SkeletonContainer>
  );
}
