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
        const submitText = this.props.title ? "Update" : "Create";

        return (
            <div className="timer-form">
                <div className="timer-form-field">
                    <label>Title</label>
                    <input type="text" defaultValue={this.props.title} />
                </div>
                <div className="timer-form-field">
                    <label>Project</label>
                    <input type="text" defaultValue={this.props.project} />
                </div>
                <div className="timer-form-buttons">
                    <button>{submitText}</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    }
});

const Timer = React.createClass({
    render: function() {
        const elapsedString = helpers.millisecondsToHuman(this.props.elapsed);

        return (
            <div class="timer-info">
                <div>{this.props.title}</div>
                <div>{this.props.project}</div>
                <div>{elapsedString}</div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
});

const TogglableTimerForm = React.createClass({
    render: function() {
        if(this.isOpen) {
            return (
                <TimerForm />
            )
        } else {
            return (
                <div className="timer-form">
                    <div className="timer-form-buttons">
                        <button>Add</button>
                    </div>
                </div>
            )
        }
    }
});


ReactDOM.render(<TimersDashboard />, document.getElementById("content"));
