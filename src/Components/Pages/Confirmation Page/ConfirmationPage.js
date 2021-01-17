import React, { useEffect, useState } from "react";
import ClubRegistrationConfirmation from "./ClubRegistrationConfirmation";
import SanctionedEventRegistration from "./SanctionedEventRegistration";
import UnsanctionedEventRegistration from "./UnsanctionedEventRegistration";

import { PayPalButton } from "react-paypal-button-v2";
import { Container, Segment } from "semantic-ui-react";

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function ConfirmationPage(props) {
  console.log(props.location.state);
  console.log(props);

  console.log(props.location.state);

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState();

  let numDogs;

  if (props.location.state.clubRegistration) {
    numDogs = props.location.state.clubRegistration.dogs.length;
  } else if (props.location.state.sanctionedEventRegistration) {
    numDogs = props.location.state.sanctionedEventRegistration.length;
    console.log(numDogs);
  } else if (props.location.state.nonsanctionedEventRegistration) {
    numDogs = props.location.state.nonsanctionedEventRegistration.dogs.length;
  }

  //
  const [price, setPrice] = useState();

  const userPays = price * numDogs;
  console.log(userPays);

  useEffect(() => {
    if (props.location.state.clubRegistration) {
      setPrice(15);
      console.log(price);
      // console.log("here");
    } else if (props.location.state.sanctionedEventRegistration) {
      setPrice(props.location.state.sanctionedPrice);
    } else {
      setPrice(props.location.state.nonsanctionedPrice);
    }
  }, []);

  const client = {
    sandbox: "YOUR-SANDBOX-APP-ID",
    production: "YOUR-PRODUCTION-APP-ID",
  };

  const handleSuccess = (data) => {
    console.log(data);
    setSuccess(true);
  };

  return (
    <div className="confirmation-page">
      {props.location.state.clubRegistration ? (
        <ClubRegistrationConfirmation
          success={success}
          data={props.location.state.clubRegistration}
        />
      ) : null}
      {props.location.state.sanctionedEventRegistration ? (
        <SanctionedEventRegistration
          eventId={props.location.state.eventId}
          success={success}
          data={props.location.state.sanctionedEventRegistration}
        />
      ) : null}
      {props.location.state.nonsanctionedEventRegistration ? (
        <UnsanctionedEventRegistration
          dogs={props.location.state.nonsanctionedEventRegistration.dogs}
          owners={props.location.state.nonsanctionedEventRegistration.owners}
          eventId={props.location.state.eventId}
          success={success}
        />
      ) : null}

      {/* {props.location.state.nonsanctionedEventRegistration? } */}
      <div id="paypal-button-container"></div>
      {/* <PaypalExpressBtn client={client} currency={"USD"} total={1.0} /> */}
      {/* <PayPalButton
        createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
      /> */}
      {/* <PaypalBtn client={client} currency={"USD"} total={1.0} /> */}
      <Segment>
        <Container>
          <p>Total: ${userPays}.00</p>
          <div style={{ width: "200px" }}>
            <PayPalButton
              style={{
                color: "white",
                layout: "horizontal",
                shape: "pill",
                size: "25",
              }}
              // amount={userPays}
              amount="0.01"
              options={{
                shippingPreference: "NO_SHIPPING",
              }}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                handleSuccess(data);
                setMessage(
                  "Success! " +
                    "Transaction completed by " +
                    details.payer.name.given_name
                );

                // OPTIONAL: Call your server to save the transaction
                //   return fetch("/paypal-transaction-complete", {
                //     method: "post",
                //     body: JSON.stringify({
                //       orderID: data.orderID,
                //     }),
                //   });
              }}
            />
          </div>
        </Container>
      </Segment>
      <h5>{message}</h5>
    </div>
  );
}

export default ConfirmationPage;
