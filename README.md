# InsuranceClaim

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Vehicle Insurance Claim Form

This project provides a user-friendly form for filing vehicle insurance claims. It leverages Angular for form management, validation, and data submission.

## Features

- **Clear and concise form**: Gathers essential details for submitting a claim, including policy number, vehicle number, incident date, description, and optional file upload.
- **Validation**: Ensures data integrity by requiring policy number (minimum 6 characters), vehicle number, incident date, and description (minimum 10 characters).
- **File Upload**: Allows users to attach supporting documents for their claim.
- **Angular Integration**: Utilizes Angular's FormBuilder, FormGroup, and Validators for robust form control and client-side validation.

## Installation

1. Ensure you have Node.js and npm (or yarn) installed on your system.
2. Clone the repository:
    ```bash
    git clone https://github.com/your-username/vehicle-insurance-claim-form.git
    ```
3. Navigate to the project directory:
    ```bash
    cd vehicle-insurance-claim-form
    ```
4. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Usage

1. Start the development server:
    ```bash
    ng serve
    ```
2. Access the application in your browser, typically at `http://localhost:4200/`.
