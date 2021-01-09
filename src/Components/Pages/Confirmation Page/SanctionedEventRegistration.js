import React from "react";
import {
  Container,
  Header,
  Button,
  Form,
  Segment,
  Label,
  Table,
} from "semantic-ui-react";

function SanctionedEventRegistration(props) {
  console.log(props);
  const addedDogs = props.data;
  console.log(addedDogs);
  return (
    <div className="sanctioned-event-registration">
      {addedDogs.length !== 0 ? (
        <Segment>
          <p>
            <strong>Added Dogs:</strong>
          </p>
          <Table basic="very" collapsing padded columns={2}>
            <Table.Row>
              <Table.HeaderCell>
                <p>
                  <strong>Call Name</strong>
                </p>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <p>
                  <strong>Sanction ID</strong>
                </p>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Body>
              {addedDogs.map((dog) => {
                return (
                  <Table.Row>
                    <Table.Cell>
                      <p>{dog.callName}</p>
                    </Table.Cell>
                    <Table.Cell>
                      <p>{dog.sanctionId}</p>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
          {/* <Button.Group>
            <Button onClick={resetAddedDogs}>Reset</Button>
            <Button.Or />
            <Button onClick={onSubmit}>Submit</Button>
          </Button.Group> */}
        </Segment>
      ) : null}
    </div>
  );
}

export default SanctionedEventRegistration;
