export default function VehicleForm(props) {
    return (
        <div className="modal">
            <form action="" className="form-border">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">{props.title}</h1>
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="form-group">
                                <label htmlFor="vehicle_type" className="form-label">Vehicle type</label>
                                <input type="text" id="vehicle_type" className="form-control"
                                       placeholder="Enter vehicle type"
                                       onChange={(e) => props.setVehicleType(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle.category : props.category}
                                />
                            </div>
                            <div>
                                <label htmlFor="fuel_type" className="form-label">Fuel type</label>
                                <input className="form-control" list="fuelTypes" placeholder="Select vehicle fuel type"
                                       id="fuel_type"
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle.fuelType : props.fuelType}
                                       onChange={(e) => props.setFuelType(e.target.value)}/>
                                <datalist id="fuelTypes">
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                </datalist>
                            </div>
                            <div>
                                <label htmlFor="status" className="form-label">Vehicle status</label>
                                <input className="form-control" list="vhStatus" placeholder="Vehicle status"
                                       id="status"
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle.status : props.status}
                                       onChange={(e) => props.setVehicleStatus(e.target.value)}/>
                                <datalist id="vhStatus">
                                    <option value="Active">Active</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not available</option>
                                </datalist>
                            </div>
                            <div className="form-group">
                                <label htmlFor="licence_num" className="form-label">Vehicle licence number</label>
                                <input type="text" id="licence_num" className="form-control" placeholder="Enter vehicle licence number"
                                       onChange={(e) => props.setLicence(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle.licencePlate : props.licencePlate}
                                />
                            </div>
                            <div>
                                <label htmlFor="vehicle_remarks" className="form-label">Vehicle remarks</label>
                                <textarea placeholder="Enter vehicle remarks" className="form-control"
                                        onChange={(e) => props.setRemarks(e.target.value)}
                                        defaultValue={props.title?.startsWith("Update") ? props.vehicle.remarks : props.remarks}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {props.title.startsWith("Update") ?
                            <button type="button" className="delete-button" onClick={props.handleDelete}>Delete</button>
                            :
                            ""
                        }
                        <button onClick={props.handleCancel} className="cancel-button">Cancel</button>
                        <button onClick={props.handleSubmit} className="save-button">{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}