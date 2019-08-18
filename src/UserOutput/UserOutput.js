import React from 'react';

class UserOutput extends React.Component {
  render() {
    const style = {
      fontStyle: 'italic',
    };

    const { name } = this.props;

    return (
      <div>
        <h3 style={style}>
          {name} says:
        </h3>
        <p>
          Necessitatibus facilis voluptatibus pariatur sint dolores sequi dolor
          distinctio. Accusamus soluta placeat sed. Minima enim quis tempora
          libero. Dolores iusto ratione veniam voluptatibus.
        </p>
        <p>
          Tempora dolor dolorem iure atque quidem. Assumenda et voluptates
          repellat nesciunt facere illum. Incidunt repellendus sunt laborum
          eveniet hic nemo. Aut illum ut non qui qui. Libero ut ex et assumenda
          cumque. Aspernatur provident sit at at quia consequatur saepe.
        </p>
      </div>
    );
  }
}

export default UserOutput;
