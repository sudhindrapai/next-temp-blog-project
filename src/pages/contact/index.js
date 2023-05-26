import { Fragment } from "react";
import ContactForm from "../../../components/contact/contact-form";
import Head from "next/head";
const ContaPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="sent me your messages"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContaPage;
