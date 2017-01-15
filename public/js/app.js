const TimersDashboard = React.createClass({
   render: function() {
       return (
           <div className="timer-dashboard">
               <EditableTimerList />
               <TogglableTimerForm isOpen={true} />
           </div>
       )
   }
});

const EditableTimerList = React.createClass({
    render: function() {
        return (
            <div className="timer-list">
                <EditableTimer
                    title="Timer1"
                    project="Project1"
                    elapsed="8986300"
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title="Timer2"
                    project="Project1"
                    elapsed="8986500"
                    runningSince={null}
                    editFormOpen={true}
                />
            </div>
        )
    }
});

const EditableTimer = React.createClass({
    render: function() {
        if(this.props.editFormOpen) {
            return (
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        } else {
            return (
                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            )
        }

    }
});

const TimerForm = React.createClass({
    render: function() {
        return (
            <div>Timer Form</div>
        )
    }
});

const Timer = React.createClass({
    render: function() {
        return (
            <div>Timer</div>
        )
    }
});

const TogglableTimerForm = React.createClass({
    render: function() {
        return (
            <div>Togglable Timer Form</div>
        )
    }
});

ReactDOM.render(<TimersDashboard />, document.getElementById("content"));
