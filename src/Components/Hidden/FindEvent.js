import React, { useEffect, useState } from "react";
import { apiUrl } from "../helpers/backend";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Form, Button, Container } from "semantic-ui-react";
import { storageRef } from "../../firebase";

function FindEvent() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState();
  const fetchEvents = async () => {
    const getRequest = await fetch(`${apiUrl}/api/events`);

    const response = await getRequest.json();
    const responseParsed = JSON.parse(response.events);
    setEvents([responseParsed]);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const eventsOptions =
    events[0] !== undefined
      ? events[0].map((option) => {
          return (
            <option key={option.eventId} value={option.eventId}>
              {option.eventName}, {format(new Date(option.startDate), "MMM do")}{" "}
              to {format(new Date(option.endDate), "MMM do")}
            </option>
          );
        })
      : null;

  const handleOptionChange = () => {
    const select = document.getElementById("eventOption");
    const theEvent = events[0].find((event) => select.value === event.eventId);
    setSelectedEvent(theEvent);
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    let thing = {};
    if (data.eventJpg.length === 0 || data.eventJpg === undefined) {
      console.log("hello");
    } else {
      //code to upload eventjpg
      const uploadTask = await storageRef
        .child(`events/${data.eventOption}/${data.eventJpg[0].name}`)
        .put(data.eventJpg[0]);

      //   }

      // .then((res) => {
      //   thing = { ...data, jpgUrl: res };
      // })
      // .then(() => {
      //   console.log(thing);
      // });
    }
    // if (data.eventPdf.length === 0 || data.eventPdf === undefined) {
    //   console.log("hello2");
    // } else {
    //   //code to upload eventpdf
    //   const uploadTask = storageRef
    //     .child(`events/${data.eventOption}/${data.eventPdf[0].name}`)
    //     .put(data.eventPdf[0]);
    //   uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
    //     return downloadURL;
    //   });
    // .then((res) => {
    //   data = { ...data, pdfUrl: res };
    // })
    // .then(() => console.log(data));
  };
  //   };

  return (
    <div className="find-event">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Form.Field>
            <label>
              Choose Event:
              <select
                id="eventOption"
                name="eventOption"
                onChange={handleOptionChange}
                ref={register}
              >
                {" "}
                <option value="" disabled selected>
                  Select Event
                </option>
                {events[0] !== undefined ? eventsOptions : null}
              </select>
            </label>
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label>
                Event name:
                <input
                  defaultValue={
                    selectedEvent !== undefined ? selectedEvent.eventName : null
                  }
                  type="text"
                  placeholder="Event name"
                  name="eventName"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>
                Event start date:
                <input
                  defaultValue={
                    selectedEvent !== undefined ? selectedEvent.startDate : null
                  }
                  type="date"
                  placeholder="Start date"
                  name="startDate"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
            {/* <Form.Field>
              <label>
                Event end date:
                <input
                  defaultValue={
                    selectedEvent !== undefined ? selectedEvent.endDate : null
                  }
                  type="date"
                  placeholder="End date"
                  name="endDate"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field> */}
          </Form.Group>
          {/* <Form.Group widths="equal"> */}
          {/* <Form.Field>
              <label>
                Event address:
                <input
                  defaultValue={
                    selectedEvent !== undefined
                      ? selectedEvent.eventAddress
                      : null
                  }
                  type="text"
                  placeholder="Address"
                  name="address"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>
                Event description:
                <input
                  defaultValue={
                    selectedEvent !== undefined
                      ? selectedEvent.eventDescription
                      : null
                  }
                  type="text"
                  placeholder="Description"
                  name="description"
                  ref={register}
                />
              </label>
            </Form.Field> */}
          {/* </Form.Group> */}
          <Form.Group widths="equal">
            <Form.Field>
              <label>
                {" "}
                Add .jpeg file
                <input
                  ref={register}
                  name="eventJpg"
                  type="file"
                  accept="image/jpeg"
                />
              </label>
            </Form.Field>
            {/* <Form.Field>
              <label>
                {" "}
                Add .pdf file
                <input
                  ref={register}
                  name="eventPdf"
                  type="file"
                  accept="application/pdf"
                />
              </label>
            </Form.Field> */}
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Container>
      </Form>
    </div>
  );
}

export default FindEvent;
