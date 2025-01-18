import {MdOutlineDeleteOutline} from "react-icons/md";

export default function EquipmentForm(props) {
    return (
        <div className="modal">
            <form action="" className="form-border">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title">{props.title}</h1>
                        {props.title.startsWith("Update") ?
                            <button type="button" className="delete-button" onClick={props.handleDelete}><MdOutlineDeleteOutline size={20}/></button>
                            :
                            ""
                        }
                    </div>
                    <div className="modal-body">
                        <div>
                            <div className="form-group">
                                <label htmlFor="equipment_name" className="form-label">Equipment name</label>
                                <input type="text" id="equipment_name" className="form-control"
                                       placeholder="Enter equipment"
                                       onChange={(e) => props.setEquipment(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.equipment.name : props.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="equipment_type" className="form-label">Equipment type</label>
                                <input className="form-control" list="fuelTypes" placeholder="Select equipment type"
                                       id="equipment_type"
                                       defaultValue={props.title?.startsWith("Update") ? props.equipment.type : props.type}
                                       onChange={(e) => props.setType(e.target.value)}/>
                                <datalist id="fuelTypes">
                                    <option value="Electrical">Electrical</option>
                                    <option value="Mechanical">Mechanical</option>
                                </datalist>
                            </div>
                            <div>
                                <label htmlFor="status" className="form-label">Equipment status</label>
                                <input className="form-control" list="vhStatus" placeholder="Equipment status"
                                       id="status"
                                       defaultValue={props.title?.startsWith("Update") ? props.equipment.availableStat : props.availableStat}
                                       onChange={(e) => props.setStatus(e.target.value)}/>
                                <datalist id="vhStatus">
                                    <option value="Active">Active</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not available</option>
                                </datalist>
                            </div>
                            <div className="form-group">
                                <label htmlFor="item_count" className="form-label">Item Count</label>
                                <input type="text" id="item_count" className="form-control"
                                       placeholder="Number of equipments"
                                       onChange={(e) => props.setCount(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.equipment.count : props.count}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.handleCancel} className="cancel-button">Cancel</button>
                        <button onClick={props.handleSubmit} className="save-button">{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}