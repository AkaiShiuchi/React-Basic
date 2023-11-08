import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'h01', title: 'developer', salary: '500' },
            { id: 'h02', title: 'tester', salary: '400' },
            { id: 'h03', title: 'Project manager', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> run component did mount')
    }

    /*
    JSX => return block
    fragment
    */

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>

        )
    }
}

export default MyComponent;