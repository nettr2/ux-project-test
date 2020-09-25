import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Navigation from "../components/navigation"

export default function Contact() {
  return (
    <div>
      {" "}
      <Navigation></Navigation>
      <Layout>
        <Header headerText="Contact Page"></Header>
        <form name="contact" netlify>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address: </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div class="form-group">
            <label for="inputphone">Phone: </label>
            <input type="text" class="form-control" id="inputphone"></input>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address: </label>
            <input type="text" class="form-control" id="inputAddress"></input>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </Layout>
    </div>
  )
}
