import { Box } from "@twilio-paste/core/box";
import type { NextPage } from "next";
import { Form, ComponentsMap, SubmitButton } from "../components/formElements";

const Home: NextPage = () => {
  const formSchema: any = {
    name: {
      type: "text",
      label: "Name",
      required: true,
      name: "user_name",
      placeholder: "User name",
    },
    lastname: {
      type: "text",
      label: "Last name",
      name: "user_lastname",
      required: true,
      placeholder: "User last name",
    },
    email: {
      type: "email",
      label: "Email",
      name: "user_email",
      required: true,
      placeholder: "User email",
    },
    ack: {
      type: "checkbox",
      label: "Acknowledge",
      name: "user_ack",
      required: true,
      values: [
        "Agree with twilio privacy",
        "Agree with Short codes law",
        "Agree with test"
      ]
    },
  };

  const onSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setTimeout(() => setSubmitting(false), 1000); // Form states
  };

  return (
    <Box as="main" padding="space70">
      <Form
        onSubmit={onSubmit}
        initialValues={{ user_email: "", user_lastname: "", user_name: "" }}
      >
        {Object.keys(formSchema).map((key) => {
          const Cmp =
            ComponentsMap[formSchema[key].type as keyof typeof ComponentsMap];
          return <Cmp key={key} {...formSchema[key]} />;
        })}
        <SubmitButton variant="primary" type="submit">
          Test Submit
        </SubmitButton>
      </Form>
    </Box>
  );
};

export default Home;
