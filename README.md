# 📊 banco-api-performance

## 📌 Introduction

This project contains performance tests for the banco-api using **k6**.  
The goal is to evaluate the API's behavior under different load conditions, ensuring reliability, scalability, and performance.

The tests simulate real-world usage scenarios such as authentication, account operations, and transactions.

---

## 🛠️ Stack used

- **Language:** JavaScript (ES6)
- **Performance Testing Tool:** k6
- **Runtime:** Node.js (for project organization and dependencies, if applicable)

---

## 📁 Repository structure

```
banco-api-performance/
│
├── config/               # Configuration files (if applicable)
├── fixtures/             # Static data used in tests (payloads, mocks, etc.)
├── helpers/              # Helper functions and reusable logic for API interaction
├── tests/                # Test scripts organized by feature or endpoint
├── utils/                # Helper functions and reusable logic
└── README.md             # Project documentation
```

---

## 📂 File Groups and their purpose

### 🔹 config/
Contains files for environment variables configuration.

### 🔹 fixtures/
Stores static JSON data used during test execution, such as request bodies and test data inputs.

### 🔹 helpers/
Reusable helper functions for API interaction.

### 🔹 tests/
Contains all k6 test scripts.  
Each file typically represents a specific API flow or endpoint (e.g., login, transfers).

### 🔹 utils/
Reusable helper functions.

---

## 🎯 Project objective

The main objectives of this project are:

- Validate API performance under load
- Identify bottlenecks and performance issues
- Simulate real user behavior
- Ensure system stability during peak usage
- Support performance regression testing

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/victorFeracin/banco-api-performance.git
cd banco-api-performance
```

### 2. Environment variables configuration

Edit the file `config.local.json` and set the `baseURL` to the API you want to test.

```json
{
  "baseURL": "http://localhost:3000"
}
```

### 3. Install k6

Follow the official installation guide:  
https://k6.io/docs/get-started/installation/

---

## 🚀 Running the Tests

### 🔑 Required Environment Variable

Before running the tests, you must provide the `BASE_URL` environment variable:

```bash
k6 run tests/your-test-file.js -e BASE_URL=https://your-api-url.com 
```

---

### 📊 Run with Real-Time Dashboard

To enable the real-time web dashboard:

```bash
K6_WEB_DASHBOARD=true \
k6 run tests/your-test-file.js \
-e BASE_URL=https://your-api-url.com \
```

---

### 📄 Export HTML Report

To generate an HTML report after execution:

```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/your-test-file.js \
-e BASE_URL=https://your-api-url.com \
```

---


## 📈 Notes

- Ensure the API is running before executing your tests
- Adjust test stages and thresholds according to your needs
- Use different environments (dev, staging, prod) via `BASE_URL`
