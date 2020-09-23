import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"

export default function About() {
  return (
    <div>
      <Navigation></Navigation>
      <Header headerText="About Page"></Header>
      <p> All about us </p>
    </div>
  )
}
