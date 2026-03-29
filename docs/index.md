# Calculator API Project Overview

Welcome to the documentation for the **JavaScript Mini Calculator REST API**. This project was developed as part of the **CIS 602** curriculum to demonstrate proficiency in Software Engineering principles, automated testing, and CI/CD pipelines.

---

## Project Objective
The goal of this project is to build a robust, stateless mathematical engine using **JavaScript** that can be easily tested and deployed to a production environment.

We focus on the following key areas:

* **Functional Accuracy:** Ensuring all JS math operations return precise results.
* **Input Security:** Implementing strict boundaries to prevent system-level errors or overflows.
* **Automated Quality:** Using GitHub Actions to trigger automated test suites on every push.
* **Cloud Delivery:** Maintaining a live, accessible API via Continuous Deployment.

---

## Cloud Deployment & Live API
This project is hosted on the **Render Cloud Platform**. Every successful push to the `main` branch triggers an automated build and redeployment.

**Production URL:** https://kochanek-calculator-api-cis-602-project.onrender.com/calculate

!!! info "Cold Start Behavior"
    This application utilizes a Render Free Instance. To conserve resources, the instance "spins down" after 15 minutes of inactivity. If the first request feels delayed, please allow up to 60 seconds for the service to re-initialize.

---

## Core Technologies
* **Language:** JavaScript (Node.js)
* **API Framework:** Express.js
* **Testing Suite:** Jest / Istanbul (Whitebox & Blackbox testing)
* **Infrastructure:** Render Cloud (PaaS)
* **CI/CD:** GitHub Actions for automated verification and deployment.

## Documentation Sections
* **[Specifications](specs.md):** Detailed requirements, input ranges, and expected behaviors.
* **[Usage Guide](usage.md):** Instructions on how to interact with the API endpoints.
* **[Data Model](data_model.md):** Schema definitions for requests and responses.
* **[Testing Methods](testing.md):** Details on 100% Whitebox and Blackbox coverage.

---

!!! success "CI/CD Status"
    This project is integrated with GitHub Actions. Every commit is automatically verified against our **Statement Coverage**, **Path Coverage**, and **Boundary Value Analysis (BVA)** test suites before being pushed to production.