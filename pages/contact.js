import { useState } from "react";
import Container from "../components/Container";
import LayoutMain from "../components/LayoutMain";
import styles from "../styles/Home.module.scss";

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });

        const { error } = await res.json();

        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }

        setForm({
          state: "success",
          message: "Your message was sent successfully.",
        });
        setInputs({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };
  return (
    <LayoutMain>
      <Container>
        <div className={styles.main__contact}>
          <h1>Let's get started</h1>
          <h4>We're looking forward to creating with you.</h4>
          <form className={styles.form} onSubmit={(e) => onSubmitForm(e)}>
            <input
              id="name"
              type="text"
              value={inputs.name}
              onChange={handleChange}
              className={styles.input__field}
              placeholder="Name"
              required
            />
            <input
              id="email"
              type="email"
              value={inputs.email}
              onChange={handleChange}
              className={styles.input__field}
              placeholder="Email"
              required
            />
            <textarea
              id="message"
              type="text"
              value={inputs.message}
              onChange={handleChange}
              className={styles.input__field}
              placeholder="Message"
              required
            />
            <button type="submit" className={styles.vertical__button__form}>
              Submit
            </button>
            {form.state === "loading" ? (
              <div>Sending....</div>
            ) : form.state === "error" ? (
              <div>{form.message}</div>
            ) : (
              form.state === "success" && (
                <div>
                  <h2>Sent successfully</h2>
                </div>
              )
            )}
          </form>
        </div>
      </Container>
    </LayoutMain>
  );
}
