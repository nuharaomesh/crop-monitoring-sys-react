import React, {useState} from "react";
import {MdOutlineDeleteOutline} from "react-icons/md";

export default function StaffForm(props) {

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSelectedFieldType(event.target.value as "male" | "female");
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
            props.setStaffImage(previewUrl)
        }
    };

    return (
        <div className="modal">
            <form className="form-border">
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
                        <div className="flex justify-center item-holder">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Crop Preview" className="item-image"/>
                            ) : (
                                <img
                                    src={props.title?.startsWith("Update") ? props.staff.staffImg : "../../../public/images.png"}
                                    alt="staff Image" className="item-image"
                                />
                            )}
                        </div>
                        <div>
                            <label htmlFor="first_name" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="first_name"
                                   placeholder="Enter staff first name"
                                   onChange={(e) => props.setFirstname(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.firstname : props.firstname}
                            />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="last_name"
                                   placeholder="Enter staff last name"
                                   onChange={(e) => props.setLastname(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.lastname : props.lastname}
                            />
                        </div>
                        <div>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="gender" value="male"
                                           className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-500"
                                           onChange={handleSelectionChange}
                                           defaultChecked={props.title.startsWith("Update") ? props.staff.gender === "male" : true}
                                    />
                                    <span className="text-gray-700">Male</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="gender" value="female"
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
                                   onChange={(e) => props.setDob(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.dob : props.dob}
                            />
                        </div>
                        <div>
                            <label htmlFor="joined_date" className="form-label">Joined date</label>
                            <input type="date" className="form-control" id="joined_date"
                                   onChange={(e) => props.setJoindeDate(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.joinedDate : props.joinedDate}
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="form-label">Home address</label>
                            <input type="text" className="form-control" id="address"
                                   placeholder="Enter staff address"
                                   onChange={(e) => props.setAddress(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.address : props.address}
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNo" className="form-label">Mobile number</label>
                            <input type="text" className="form-control" id="phoneNo"
                                   placeholder="Enter staff phone No"
                                   onChange={(e) => props.setPhoneNo(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.phone : props.phone}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="text" className="form-control" id="email"
                                   placeholder="Enter staff email"
                                   onChange={(e) => props.setEmail(e.target.value)}
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.email : props.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="staff_role" className="form-label">Staff member role</label>
                            <input className="form-control" list="jobRole" placeholder="Select job role"
                                   id="staff_role"
                                   defaultValue={props.title?.startsWith("Update") ? props.staff.role : props.role}
                                   onChange={(e) => props.setStaffRole(e.target.value)}/>
                            <datalist id="jobRole">
                                <option value="Labor">Labor</option>
                                <option value="Scientist">Scientist</option>
                                <option value="Worker">Worker</option>
                            </datalist>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="cancel-button" onClick={props.handleCancel}>Cancel</button>
                        <button type="button" className="save-button" onClick={props.handleSubmit}>{props.children}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}