# 🎭 PlayTesting - JavaScript & Playwright Mastery

[![Node.js Version](https://img.shields.io/badge/Node.js-LTS-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Educational-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/playwhright/PlayTesting.svg?style=social)](https://github.com/playwhright/PlayTesting)

A comprehensive, step-by-step repository dedicated to mastering **JavaScript Fundamentals** and **Playwright Automation Testing**. This project is structured as a progressive learning journey, moving from core language mechanics to advanced automation strategies.

---

## 🗺️ Learning Roadmap

The project is organized into modular chapters to ensure a solid foundation before diving into automation.

### 📗 Phase 1: Core JavaScript Essentials

#### [Chapter 01: The Basics](./Chapter01_Basics/)
- `01_Welcome.js`: Entry point and basic syntax.
- `02_verifysystem.js`: Platform and Node environment validation.
- `03_hoisting_var.js`: Deep dive into `var` hoisting mechanics.
- `04_hoisting_let.js`: Scope, TDZ, and modern variable declarations.

#### [Chapter 02: Literals](./Chapter02_Literals/)
- `05_literals.js`: Template Strings and path manipulation.
- `06_literals_null,Undefined.js`: Handling missing or intentional empty values.

#### [Chapter 03: Equality & Coupling](./Chapter03_coupling(equality)/)
- `07_equality_coupling_by_=.js`: The difference between `==` and `===`.
- `08_IQ_equality.js`: Edge cases and popular technical interview questions.

#### [Chapter 04: Operators](./Chapter04_Operators/)
- `09_Assigned_Operators.js`: Basic assignment logic.
- `10_Assignment_Operators.js`: Compound assignment shortcuts.
- `11_Comparison_Operators.js`: Relational logic.
- `12_Logical_Operators.js`: Boolean logic (`&&`, `||`, `!`).
- `13_Ternary_Operators.js`: Clean conditional expressions.
- `14_Type_Operators.js`: Inspecting types with `typeof` and `instanceof`.

#### [Chapter 05: Statements](./Chapter05_Statement/)
- `16_If_else_if.js`: Conditional branching logic.
- `17_grades.js`: Multi-level decision making.
- `18_real_access_example.js`: Practical application of flow control.
- `19_IQ_oneliner.js`: Code efficiency and interview-style questions.

#### [Chapter 06: Switch Statement](./Chapter06_switch_statement/)
- `22_switch.js`: Multi-case logic.
- `24_switch_true.js`: Advanced switching with Boolean logic.
- `27_CodeQ_traingle.js`: Geometry logic with switch.

#### [Chapter 07: Loops](./Chapter07_loops/)
- `31_for_loop.js`: Standard iteration techniques.
- `33_while_loop.js`: Indefinite iteration logic.
- `34_do_while.js`: At-least-once execution flow.

#### [Chapter 08: Arrays](./Chapter08_Array/)
- `35_Array_creation.js`: Initialization and syntax.
- `39_Array_Searching.js`: Finding elements efficiently.
- `40_Array_Iterating.js`: Modern iteration (`forEach`, `map`, etc.).
- `41_Arrays_Transforming.js`: Data manipulation techniques.
- `42_Arrays_Sorting.js`: Ordering elements.

---

### 🚀 Phase 2: Technical Interview Mastery

#### [Interview Questions](./VeryIMP_Interview_Questions/)
- `01_Grade_Calculator.js`: Practical logic assessments.
- `02_fizz_buzz.js`: The classic algorithmic test.

---

### 🧪 Phase 3: Playwright Automation

#### Tests and Configuration
- `playwright.config.ts`: Global test orchestration.
- `tests/example.spec.ts`: End-to-end testing samples.

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
- **Git**: [Installation Guide](https://git-scm.com/)

### 🛠️ Installation
```bash
# Clone the repository
git clone https://github.com/playwhright/PlayTesting.git

# Navigate to the folder
cd PlayTesting

# Install dependencies (Playwright & Typescript)
npm install
```

---

## 📖 Usage

### Running JavaScript Lessons
To execute any of the learning modules, use the Node.js runner:
```bash
node Chapter08_Array/40_Array_Iterating.js
```

### Running Playwright Tests
To run automation tests, use the Playwright CLI:
```bash
# Run all tests
npx playwright test

# Run in UI mode
npx playwright test --ui
```

---

## 🏆 Project Goals
- [x] Master JavaScript ES6+ Fundamentals
- [x] Understand Execution Context & Hoisting
- [x] Master Control Flow & Array Manipulation
- [x] Implement Playwright Browser Automation
- [ ] Build Robust Page Object Models (POM)
- [ ] CI/CD Integration with GitHub Actions

---

## 📝 License
This project is for educational purposes. Feel free to fork and learn!

---
*Generated with ❤️ by the Playwright Learning Community*
