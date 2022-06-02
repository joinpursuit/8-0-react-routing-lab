// import "./NewsletterForm.css";

export const NewPetForm = () => {
  return (
    <section className="signup">
      <h2>New Pet Form!</h2>
      <form>
        <input
          id="petid"
          name="petid"
          type="text"
          placeholder="Your petid"
        />
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your petname"
        />
        <input
          id="kind"
          name="kind"
          type="text"
          placeholder="Your petkind"
        />
        <input
          id="breed"
          name="breed"
          type="text"
          placeholder="Your petbreed"
        />
        <input
          id="employeeId"
          name="employeeId"
          type="text"
          placeholder="Your employeeId"
        />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
};



export default NewPetForm;
