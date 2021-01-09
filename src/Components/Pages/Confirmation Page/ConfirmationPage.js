import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ClubRegistrationConfirmation from "./ClubRegistrationConfirmation";
import SanctionedEventRegistration from "./SanctionedEventRegistration";
import PaypalExpressBtn from "react-paypal-express-checkout";
import PaypalBtn from "react-paypal-checkout";
import { PayPalButton } from "react-paypal-button-v2";
import { Container, Segment } from "semantic-ui-react";

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

function ConfirmationPage(props) {
  console.log(props.location.state);
  console.log(props);

  console.log(props.location.state);

  const [success, setSuccess] = useState(false);

  let numDogs;

  if (props.location.state.clubRegistration) {
    numDogs = props.location.state.clubRegistration.dogs.length;
  } else if (props.location.state.sanctionedEventRegistration) {
    numDogs = props.location.state.sanctionedEventRegistration.length;
    console.log(numDogs);
  } else if (props.location.state.unsanctionedEventRegistration) {
    console.log("unsanction");
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
          data={props.location.state.sanctionedEventRegistration}
        />
      ) : null}
      <div id="paypal-button-container"></div>
      {/* <PaypalExpressBtn client={client} currency={"USD"} total={1.0} /> */}
      {/* <PayPalButton
        createOrder={(data, actions) => this.createOrder(data, actions)}
        onApprove={(data, actions) => this.onApprove(data, actions)}
      /> */}
      {/* <PaypalBtn client={client} currency={"USD"} total={1.0} /> */}
      <Segment>
        <Container>
          <PayPalButton
            style={{
              color: "blue",
              layout: "horizontal",
              shape: "pill",
              size: "25",
            }}
            amount={userPays}
            // amount="0.01"
            options={{
              clientId:
                "ARbGmjFABclmA7CwOIsCyDvk8n9cQjXipoZ_KL5oaTaj-Bz9jpTqYCFV_LTxT6qaHzQ7Vzf8N8shVscJ",
            }}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
              handleSuccess(data);

              // OPTIONAL: Call your server to save the transaction
              //   return fetch("/paypal-transaction-complete", {
              //     method: "post",
              //     body: JSON.stringify({
              //       orderID: data.orderID,
              //     }),
              //   });
            }}
          />
        </Container>
      </Segment>
    </div>
  );
}

export default ConfirmationPage;
