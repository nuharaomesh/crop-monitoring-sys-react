import React, {useEffect, useState} from "react";
import {MdOutlineDeleteOutline} from "react-icons/md";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {TiWarning} from "react-icons/ti";

const validationSchema = Yup.object({
    first_name: Yup.string().required("firstname is required"),
    last_name: Yup.string().required("lastname is required"),
    dob: Yup.date().required("dob is required"),
    joined_date: Yup.date().required("Joined data is required"),
    address: Yup.string().required("address is required"),
    phone: Yup.string().required("contact number is required"),
    email: Yup.string().email().required("Email is required"),
    staff_role: Yup.string().required("Staff role is required")
});

export default function StaffForm(props) {

    const [isVisible, setIsVisible] = useState(false)
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

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

    const onSubmit = (data: any) => console.log(data);

    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSelectedFieldType(event.target.value as "male" | "female");
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            props.setStaffImage(file)
        }
    };

    function handleInnerSubmit(e) {
        setTimeout(() => {
            if (props.handleCancel) {
                handleSubmit(onSubmit)()
                if (props.handleSubmit(e)) {
                    setIsVisible(false)
                }
            }
        }, 300);
    }

    return (
        <div className="modal">
            <form className="form-border" onSubmit={handleSubmit(onSubmit)}>
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
                        <div className="flex justify-center item-holder">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Crop Preview" className="item-image"/>
                            ) : (
                                <img
                                    src={props.title?.startsWith("Update") ? props.staff.staffImg : "../../../public/images.png"}
                                    alt="staff Image"
                                    className="item-image"
                                />
                            )}
                        </div>
                        <div>
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="first_name"
                                   placeholder="Enter staff first name"
                                   {...register("first_name")}
                                   onChange={(e) => props.setFirstname(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.firstname : props.firstname}
                            />
                            {errors.first_name?.message && <p className="form-error">{errors.first_name?.message} <TiWarning color="red" /></p>}
                        </div>
                        <div>
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="last_name"
                                   placeholder="Enter staff last name"
                                   {...register("last_name")}
                                   onChange={(e) => props.setLastname(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.lastname : props.lastname}
                            />
                            {errors.last_name?.message && <p className="form-error">{errors.last_name?.message} <TiWarning color="red" /></p>}
                        </div>
                        <div>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="gender" value="MALE"
                                           className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                                           onChange={handleSelectionChange}
                                           defaultChecked={props.title.startsWith("Update") ? props.staff.gender === "male" : true}
                                    />
                                    <span className="text-gray-700">Male</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="gender" value="FEMALE"
                                           className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                                           onChange={handleSelectionChange}
                                           defaultChecked={props.title.startsWith("Update") ? props.staff.gender === "female" : false}
                                    />
                                    <span className="text-gray-700">Female</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="staff_image" className="form-label">Profile picture</label>
                            <input type="file" className="form-control file-input" id="staff_image" accept="image/*"
                                   onChange={handleFileChange}/>
                        </div>
                        <div>
                            <label htmlFor="dob" className="form-label">Date of birth</label>
                            <input type="date" className="form-control" id="dob"
                                   {...register("dob")}
                                   onChange={(e) => props.setDob(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.dob : props.dob}
                            />
                            {errors.dob?.message && <p className="form-error">{errors.dob?.message} <TiWarning color="red" /></p>}
                        </div>
                        <div>
                            <label htmlFor="joined_date" className="form-label">Joined date</label>
                            <input type="date" className="form-control" id="joined_date"
                                   {...register("joined_date")}
                                   onChange={(e) => props.setJoinedDate(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.joinedDate : props.joinedDate}
                            />
                            {errors.joined_date?.message && <p className="form-error">{errors.joined_date?.message} <TiWarning color="red" /></p>}
                        </div>
                        <div>
                            <label htmlFor="address" className="form-label">Home address</label>
                            <input type="text" className="form-control" id="address"
                                   placeholder="Enter staff address"
                                   {...register("address")}
                                   onChange={(e) => props.setAddress(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.address : props.address}
                            />
                            {errors.address?.message && <p className="form-error">{errors.address?.message} <TiWarning color="red" /></p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="form-label">Mobile number</label>
                            <input type="text" className="form-control" id="phone"
                                   placeholder="Enter staff phone No"
                                   {...register("phone")}
                                   onChange={(e) => props.setPhoneNo(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.phone : props.phone}
                            />
                            {errors.phone?.message && <p className="form-error">{errors.phone?.message} <TiWarning color="red" /></p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="text" className="form-control" id="email"
                                   placeholder="Enter staff email"
                                   {...register("email")}
                                   onChange={(e) => props.setEmail(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.email : props.email}
                            />
                            {errors.email?.message && <p className="form-error">{errors.email?.message} <TiWarning color="red" /></p>}
                        </div>
                        <div>
                            <label htmlFor="staff_role" className="form-label">Staff member role</label>
                            <input className="form-control" list="jobRole" placeholder="Select job role"
                                   id="staff_role"
                                   {...register("staff_role")}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.role : props.role}
                                   onChange={(e) => props.setStaffRole(e.target.value)}/>
                            {errors.staff_role?.message && <p className="form-error">{errors.staff_role?.message} <TiWarning color="red" /></p>}
                            <datalist id="jobRole">
                                <option value="Labor">Labor</option>
                                <option value="Scientist">Scientist</option>
                                <option value="Worker">Worker</option>
                            </datalist>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                        <button type="submit" className="save-button" onClick={handleInnerSubmit}>{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}