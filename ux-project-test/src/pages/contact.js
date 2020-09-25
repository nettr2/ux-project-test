import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Navigation from "../components/navigation"

export default function Contact() {
  return (
    <div>
      <Navigation></Navigation>
      <Layout>
        <Header headerText="Contact Page"></Header>
        <form name="contact" method="POST" data-netlify="true">
          <p class="form-group">
            <label >Email address: </label>
            <input
              name="email"
              type="email"
              class="form-control"   
            ></input>
          </p>
          <p class="form-group">
            <label >Phone: </label>
            <input name="phone" type="text" class="form-control"></input>
          </p>
          <p class="form-group">
            <label>Address: </label>
            <input name="address" type="text" class="form-control" ></input>
          </p>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form> 
        </Layout>
    </div>
  )
}
