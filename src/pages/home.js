import Header from "../comp/header";

const Home = () => {
  return (
    <div>
      <Header />

      <h1>home page</h1>
      <form className="container" action="test.php">
        <div>
          <label htmlFor="user">
            Username <sup>*</sup>
          </label>
          <input
            name="User"
            id="user"
            type="text"
            placeholder="Type Your Name In English Only"
            required
          />
        </div>
        <div>
          <label htmlFor="pass">
            Password <sup>*</sup>
          </label>
          <input
            name="Pass"
            id="pass"
            type="password"
            placeholder="Type a Complex Password"
            required
          />
        </div>
        <div>
          <label htmlFor="mail">
            Email <sup>*</sup>
          </label>
          <input
            name="Email"
            id="mail"
            type="email"
            placeholder="Type a Valid Email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            name="Phone"
            id="phone"
            type="tel"
            pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
          />
        </div>
        <div>
          <label htmlFor="brief">Brieft</label>
          <textarea
            name="brief"
            id="brief"
            cols={30}
            rows={10}
            defaultValue={""}
          />
        </div>
        <div>
          <input type="submit" defaultValue="Register" />
        </div>
      </form>
    </div>
  );
};

export default Home;
