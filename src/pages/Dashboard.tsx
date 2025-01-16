export default function Dashboard() {
    return (
        <main className="main-border dashboard-container">
            <div className="dashboard-left">
                <div className="graph-and-progress">
                    <div className="dashboard-graph custom-layout">

                    </div>
                    <div className="field-progress custom-layout">

                    </div>
                </div>
                <div className="dashboard-task custom-layout">

                </div>
            </div>
            <div className="dashboard-right">
                <div className="dashboard-calender custom-layout">

                </div>
                <div className="business-progress custom-layout">

                </div>
                <div className="dashboard-right-bottom">
                    <div className="monthly-task custom-layout">

                    </div>
                    <div className="blank custom-layout">

                    </div>
                </div>
            </div>
        </main>
    )
}