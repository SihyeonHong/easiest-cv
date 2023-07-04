import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import styled from "styled-components";

function TabAdminComponent({ tabname }) {
  const [tables, setTables] = useState([
    {
      key: Math.random(),
      index: 1,
      options: "title",
      contents: "lorem ipsum dolor sit amet",
    },
  ]);

  const handleOptions = (e, key) => {
    // console.log(e.target.value); // = title or description
    setTables(
      tables.map((table) =>
        table.key === key ? { ...table, options: e.target.value } : table
      )
    );
  };

  const handleContents = (e, key) => {
    // console.log(e.target.value); // = contents
    setTables(
      tables.map((table) =>
        table.key === key ? { ...table, contents: e.target.value } : table
      )
    );
  };

  const addTable = (index) => {
    setTables([
      ...tables,
      {
        key: Math.random(),
        index: index + 1,
        options: "description",
        contents: "",
      },
    ]);
  };

  const deleteTable = (key) => {
    console.log(key);
    const newTable = tables.filter((table) => table.key !== key);
    const reindex = newTable.map((table, index) => ({
      ...table,
      index: index + 1,
    }));
    setTables(reindex);
  };

  return (
    <Container className="tabBody">
      <h1>{tabname}</h1>

      <Table>
        <thead>
          <tr>
            <th className="options-column">Options</th>
            <th className="contents-column">Contents</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.key}>
              <td className="options-column">
                <select
                  value={table.options}
                  onChange={(e) => handleOptions(e, table.key)}
                >
                  <option value="title">title</option>
                  <option value="description">description</option>
                </select>
              </td>
              <td className="contents-column">
                <InputContents
                  placeholder="오른쪽 아래 모서리를 당기면 칸이 늘어납니다."
                  value={table.contents}
                  onChange={(e) => {
                    handleContents(e, table.key);
                  }}
                ></InputContents>
              </td>
              <td className="actions-column">
                <Button variant="light" onClick={() => addTable(table.index)}>
                  +
                </Button>{" "}
                <Button variant="light" onClick={() => deleteTable(table.key)}>
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

const InputContents = styled.textarea`
  width: 100%;
  height: fit-content;
  resize: vertical;
`;

export default TabAdminComponent;
