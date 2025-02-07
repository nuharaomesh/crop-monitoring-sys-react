import {MdOutlineDeleteOutline} from "react-icons/md";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {TiWarning} from "react-icons/ti";
import React, {useEffect, useState} from "react";

const validationSchema = Yup.object({
    vehicle_type: Yup.string().required("Vehicle type is required"),
    fuel_type: Yup.string().required("Vehicle fuel is required"),
    status: Yup.string().required("Enter vehicle current status"),
    licence_number: Yup.string().required("Licence number is required"),
    vehicle_remarks: Yup.string().required("Remarks is required")
});

export default function VehicleForm(props) {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 10)
    }, []);

    function handleCancelClick() {
        setIsVisible(false)
        setTimeout(() => {
            if (props.handleCancel) {
                props.handleCancel()
            }
        }, 300);
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = () => console.log();

    function handleInnerSubmit(e) {
        setIsVisible(false)
        setTimeout(() => {
            if (props.handleCancel) {
                handleSubmit(onSubmit)()
                props.handleSave(e);
            }
        }, 300);
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit(onSubmit)} className="form-border">
                <div className={`modal-content modal-animation ${
                    isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-0 opacity-0'
                }`}>
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
                                <label htmlFor="vehicle_type" className="form-label">Vehicle type</label>
                                <input type="text" id="vehicle_type" className="form-control"
                                       placeholder="Enter vehicle type"
                                       {...register("vehicle_type")}
                                       onChange={(e) => props.setVehicleType(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle?.category : props.category}
                                />
                                {errors.vehicle_type?.message && <p className="form-error">{errors.vehicle_type?.message} <TiWarning color="red" /></p>}
                            </div>
                            <div>
                                <label htmlFor="fuel_type" className="form-label">Fuel type</label>
                                <input className="form-control" list="fuelTypes" placeholder="Select vehicle fuel type"
                                       id="fuel_type"
                                       {...register("fuel_type")}
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle?.fuelType : props.fuelType}
                                       onChange={(e) => props.setFuelType(e.target.value)}/>
                                {errors.fuel_type?.message && <p className="form-error">{errors.fuel_type?.message} <TiWarning color="red" /></p>}
                                <datalist id="fuelTypes">
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                </datalist>
                            </div>
                            <div>
                                <label htmlFor="status" className="form-label">Vehicle status</label>
                                <input className="form-control" list="vhStatus" placeholder="Vehicle status"
                                       id="status"
                                       {...register("status")}
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle?.status : props.status}
                                       onChange={(e) => props.setVehicleStatus(e.target.value)}/>
                                {errors.status?.message && <p className="form-error">{errors.status?.message} <TiWarning color="red" /></p>}
                                <datalist id="vhStatus">
                                    <option value="Active">Active</option>
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not available</option>
                                </datalist>
                            </div>
                            <div className="form-group">
                                <label htmlFor="licence_num" className="form-label">Vehicle licence number</label>
                                <input type="text" id="licence_num" className="form-control" placeholder="Enter vehicle licence number"
                                       {...register("licence_number")}
                                       onChange={(e) => props.setLicence(e.target.value)}
                                       defaultValue={props.title?.startsWith("Update") ? props.vehicle?.licencePlate : props.licencePlate}
                                />
                                {errors.licence_number?.message && <p className="form-error">{errors.licence_number?.message} <TiWarning color="red" /></p>}
                            </div>
                            <div>
                                <label htmlFor="vehicle_remarks" className="form-label">Vehicle remarks</label>
                                <textarea placeholder="Enter vehicle remarks" className="form-control"
                                          id="vehicle_remarks"
                                          {...register("vehicle_remarks")}
                                          onChange={(e) => props.setRemarks(e.target.value)}
                                          defaultValue={props.title?.startsWith("Update") ? props.vehicle?.remarks : props.remarks}
                                ></textarea>
                                {errors.vehicle_remarks?.message && <p className="form-error">{errors.vehicle_remarks?.message} <TiWarning color="red" /></p>}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleCancelClick} className="cancel-button">Cancel</button>
                        <button onClick={handleInnerSubmit}
                                className="save-button"
                                type="submit">{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}