import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

function HomeAdminComponent() {
  let [introduction, setIntroducion] = useState("");

  return (
    <Container className="tabBody">
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h5>프로필 사진 첨부</h5>
          <input type="file" accept="image/*" />
        </Col>
        <Col>
          <InputIntroduction
            value={introduction}
            onChange={(e) => setIntroducion(e.target.value)}
            placeholder="자기소개를 입력하세요. 오른쪽 아래 모서리를 당기면 입력 상자를 아래로 늘릴 수 있습니다. "
          />
        </Col>
      </Row>
    </Container>
  );
}

const InputIntroduction = styled.textarea`
  width: 100%;
  height: 1280px;
  resize: vertical;
`;

export default HomeAdminComponent;
