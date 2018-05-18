import React from "react";

class DemoView extends React.Component {

    render() {
        console.log(`demo view\n: ${JSON.stringify(this.props.companies, null, 4)}`);
        let companies = this.props.companies.map((company) => (
            <div>
                <h1>{company.name}</h1>
                <ul>
                    {company.projects.map((project) => <li>{project.name}</li>)}
                </ul>
            </div>
        ));
        return (
            <div>
                {companies}
                {/*{this.props.companies.forEach((company) => {*/}
                {/*// noinspection BadExpressionStatementJS*/}
                {/*<div>*/}
                {/*<h1>{company.name}</h1>*/}
                {/*<p>{company.description}</p>*/}
                {/*<ul>*/}
                {/*{console.log(`fetched projects for ${company}: ${company.projects}`)}*/}
                {/**/}
                {/*{company.projects.map((project) =>*/}
                {/*<li>{project.name}</li>*/}
                {/*)}*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*})}*/}
            </div>
        );
    }
}

export default DemoView;