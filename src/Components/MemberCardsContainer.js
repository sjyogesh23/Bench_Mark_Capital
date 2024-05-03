import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const MemberCardsContainer = ({ members }) => {
  return (
    <Container>
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
        Our Experts
      </div>
      <Row xs={2} md={2} lg={3} className="mt-4 g-4">
        {members.map((member, index) => (
          <Col key={index}>
            <Card className="bg-dark text-white">
              <Card.Img
                src={member.image}
                className="h-[150px] md:h-[300px] w-full object-cover"
              />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MemberCardsContainer;
