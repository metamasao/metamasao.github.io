import Card from "react-bootstrap/Card";

export function CardTitle({ title }) {
  return (
    <Card.Title className="pt-1">
      Title: {title}
    </Card.Title>
  );
}

export function CardSubtitle({ tags, created }) {
  return (
    <Card.Subtitle className="text-muted pt-1">
      Tags: {tags} | Created: {created}
    </Card.Subtitle>
  );
}

export function CardText({ children }) {
  return (
    <Card.Text className="pt-1" >
      {children}
    </Card.Text>
  )
}

export function LightCard({ children }) {
  return (
    <Card className="shadow-lg mt-3 pt-1" border="light">
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}