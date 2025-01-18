import Searchbar from "../Searchbar.tsx";
import {useSelector} from "react-redux";
import UncultivatedCard from "../Cards/UncultivatedCard.tsx";

export default function UncultivatedFieldList() {

    const fields = useSelector(state =>
        state.field.filter((field) => !field.isCultivated)
    )

    return (
        <>
            <div className="uncultivated-field-header">
                <div className="field-list-title">
                    <h1 className="field-title">Add new Cultivation</h1>
                    <p className="field-sub-title">Choose a field for next Cultivation</p>
                </div>
                <div className="">
                    <Searchbar/>
                </div>
            </div>
            <div className="uncultivated-field-body custom-list-cards">
                {fields.map((field) =>
                    <UncultivatedCard key={field.fieldCode}
                                      fieldCode={field.fieldCode}
                                      img={field.fieldImg}
                                      fieldName={field.fieldName}
                                      fieldSize={field.fieldSize}
                                      fieldAddress={field.fieldAddress}
                    />
                )}
            </div>
        </>
    )
}