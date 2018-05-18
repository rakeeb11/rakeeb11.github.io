import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import TableTop from 'tabletop';
import Company from "./portfolio/model/Company";
import Project from "./portfolio/model/Project";
import DemoView from "./portfolio/view/DemoView";

const URL_WORKSHEET = 'https://docs.google.com/spreadsheets/d/1LpBb9LUOBy7DpW-zz0coz-vhELuhN4MnTYYgaAAyDsU/edit?usp=sharing';

function init() {
    TableTop.init({
        key: URL_WORKSHEET,
        callback: showInfo
    });
}

function showInfo(data, tabletop) {
    console.log(data);
    // initialize company
    let companies = initCompanies(data);
    let companyList = [];
    companies.elements.forEach((company) => {
        // get projects
        let projects = data[company.Company].elements;
        let projectList = [];
        projects.forEach((project) => {
           let model = new Project(project.Project, project.Description);
           projectList.push(model);
        });
        // let model = new Company();
        let model = new Company(company.Company, projectList);
        companyList.push(model);
    });
    ReactDom.render(<DemoView companies={companyList} />, document.getElementById("root"));
}

function initCompanies(data) {
    for(const [key, value] of Object.entries(data)) {
        if(!data.hasOwnProperty(key)) continue;
        if(key === 'Company') {
            return value;
        }
    }
    return null;
}

window.addEventListener('DOMContentLoaded', init);



