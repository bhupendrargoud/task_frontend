# Web Application Development Steps

## Frontend Deployment
Please ensure that the backend deployment is completed before proceeding with the frontend deployment.
### [Link to Backend Deployment](https://github.com/gavika/reference-app-payroll-backend.git)


### Installing Node.js and React

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm

```
### Jenkins Configuration:
Install Node.js Plugin:

In Jenkins, go to `Manage Jenkins" > "Manage Plugins.`
Install the `NodeJS" plugin.`

Configure Node.js in Jenkins:
Go to `Manage Jenkins" > "Global Tool Configuration.`
Scroll down to the `NodeJS` section.
Click on `Add NodeJS` to add a new Node.js installation.
Provide a name `node_20`, 
choose the version `20.8.0`, 
Click "Save" to apply the configuration.

## Create a New Jenkins Job:

From the Jenkins dashboard, click on `New Item` to create a new Jenkins job.
Choose `Pipeline` as the job type.
Configure Pipeline from SCM (Source Code Management):
In the job configuration, find the `Pipeline` section.
Choose `Pipeline script from SCM` as the Definition.
Select `Git` as the SCM.
Enter the URL 
```bash
https://github.com/gavika/reference-app-payroll-frontend.git
```
specify credentials `git_jenkins`

#### Enable Poll SCM:

In the job configuration page, find the `Build Triggers` section.
Check the box next to `Poll SCM.`
In the `Schedule` field, enter `* * * * *`
Save your Jenkins job configuration.

Run the Jenkins job manually for the first time to verify that the pipeline is correctly configured.
