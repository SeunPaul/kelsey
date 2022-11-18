import { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as Spinner } from "../../assets/icons/buttonSpinner.svg";
import notify from "../../helpers/notify";
import "./Header.css";

const Header = () => {
  const { register, handleSubmit, formState, reset } = useForm();

  const [loading, setLoading] = useState(false);

  const submitForm = async (formData) => {
    setLoading(true);

    fetch("https://kgpl-461fa-default-rtdb.firebaseio.com/leads.json", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      }),
    })
      .then((res) => {
        setLoading(false);
        notify("success", "Submitted successfully");
        reset();
      })
      .catch((e) => {
        setLoading(false);
        notify("error", "Error. Unable to submit");
      });
  };

  return (
    <div className="header">
      <div className="header-overlay" />
      <div className="header-content">
        <div className="header-nav">
          <h4>Kelseygreene Properties Limited</h4>
        </div>
        <div className="header-grid">
          <div className="header-grid-child-left">
            <h1>Real Estate At It's Peak.</h1>
            <p>
              We bring our expertise to every project handled by our experienced
              team, providing a thorough and qualitative service in alignment
              with our clients' real estate needs.
            </p>
          </div>
          <div className="header-grid-child-right">
            <form onSubmit={handleSubmit(submitForm)}>
              <h3>Subscribe to stay in touch and get updates about projects</h3>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  {...register("name", { required: "Enter your name" })}
                />
                {formState.errors.name && (
                  <p className="formfeedback">
                    {formState.errors.name.message}
                  </p>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  {...register("email", { required: "Enter your email" })}
                />
                {formState.errors.email && (
                  <p className="formfeedback">
                    {formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  {...register("phone", { required: "Enter your phone" })}
                />
                {formState.errors.phone && (
                  <p className="formfeedback">
                    {formState.errors.phone.message}
                  </p>
                )}
              </div>
              <button
                className={loading ? "loading" : ""}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    Submit
                    <Spinner />
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
