# Web Application Development Steps

## Frontend Development

### Installing Node.js and React

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm

```


### Clone the git repository for frontend web pages  and also downloading the dependency

```
git clone  https://github.com/gavika/reference-app-payroll-frontend.git
cd reference-app-payroll-frontend
```

To set up the project, run the following command to install the necessary dependencies:

```bash
npm install 
```
### Project Structure
```
reference-app-payroll-frontend
│   README.md
│   package.json
│   ...
│
└───src
    │
    ├───pages
    │       # Directory for creating web pages
    │       HomePage.jsx
    │       EmployeePage.jsx
    │       ...
    │
    ├───components
    │       # Directory for creating routes for navigation
    │       Navigation.jsx
    │       ...
    │
    └───style
            # Directory for creating stylesheets
            HomePage.css
            EmployeePage.css
            ...
```
### Run the react app .
```
npm start

```
### Test

Open any browser and paste `http://localhost:3000` to check the expected output.

