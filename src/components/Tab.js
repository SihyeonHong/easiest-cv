import { useLocation } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";

function Tab({ tabname }) {
  let location = useLocation();
  let currentPath = location.pathname;

  return (
    <Container className="tabBody">
      <h1>{tabname}</h1>
      <p>lorem ipsum</p>

      <Table>
        <thead>
          <tr>
            <th className="options-column">Options</th>
            <th className="contents-column">Contents</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="options-column">
              <select>
                <option value="title">title</option>
                <option value="description">description</option>
              </select>
            </td>
            <td className="contents-column">
              <input type="text" className="contents-input"></input>
            </td>
            <td className="actions-column">
              <Button variant="light">+</Button>
              {""}
              <Button variant="light">-</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Tab;
