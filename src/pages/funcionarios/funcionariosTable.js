import React from "react";

const FuncionariosTable = (props) => {
  const rows = props.funcionarios.map((funcionario) => {
    return (
      <tr key={funcionario.id}>
        <td>{funcionario.nome}</td>
        <td>{funcionario.cpf}</td>
        <td>{funcionario.cep}</td>
        <td>{funcionario.telefone}</td>
        <td>{funcionario.coordenador.nome}</td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => props.editar(funcionario.id)}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => props.deletar(funcionario.id)}
          >
            Apagar
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Cpf</th>
          <th scope="col">Cep</th>
          <th scope="col">Telefone</th>
          <th scope="col">Coordenador</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default FuncionariosTable;
