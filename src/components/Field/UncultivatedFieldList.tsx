import Searchbar from "../Searchbar.tsx";
import {useDispatch, useSelector} from "react-redux";
import UncultivatedCard from "../Cards/UncultivatedCard.tsx";
import {useEffect, useState} from "react";
import FieldModel from "../../models/Field.ts";
import {AppDispatch} from "../../store/Store.ts";
import {getAllFields} from "../../reducers/FieldSlice.ts";

export default function UncultivatedFieldList() {

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getAllFields())
    }, [dispatch]);
    const fields = useSelector(state =>
        state.field.fieldList.filter((field) => !field.fieldNowCultivated)
    )
    const [searchValue, setSearchValue] = useState("")
    const [filteredFields, setFilteredFields] = useState<[]>([])

    useEffect(() => {
        setFilteredFields(
            fields.filter((f: FieldModel) =>
                f.fieldName.toLowerCase().includes(searchValue)
            )
        )
    }, [searchValue]);

    return (
        <>
            <div className="uncultivated-field-header">
                <div className="field-list-title">
                    <h1 className="field-title">Add new Cultivation</h1>
                    <p className="field-sub-title">Choose a field for next Cultivation</p>
                </div>
                <div className="">
                    <Searchbar searchValue={setSearchValue}/>
                </div>
            </div>
            <div className="uncultivated-field-body custom-list-cards">
                {!(searchValue === "") ? (
                        filteredFields.map((f: FieldModel) => (
                            <UncultivatedCard key={f.fieldCode}
                                              fieldCode={f.fieldCode}
                                              img={f.img}
                                              fieldName={f.fieldName}
                                              fieldSize={f.fieldSize}
                                              fieldAddress={f.fieldAddress}
                            />
                        ))
                    ) : (fields.map((field: FieldModel) =>
                    <UncultivatedCard key={field.fieldCode}
                                      fieldCode={field.fieldCode}
                                      img={field.img}
                                      fieldName={field.fieldName}
                                      fieldSize={field.fieldSize}
                                      fieldAddress={field.fieldAddress}
                    />
                ))}
            </div>
        </>
    )
}