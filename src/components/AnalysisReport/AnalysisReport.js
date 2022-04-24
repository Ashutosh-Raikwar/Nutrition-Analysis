import React from "react";

const AnalysisReport = ({
    calories,
    totalFat,
    saturatedFat,
    cholesterol,
    sodium,
    totalCarboydrates,
    dietaryFiber,
    totalSugars,
    proteins,
    VitaminD,
    calcium,
    iron,
    potassium,
}) => {
    return (
        <div className="rounded bg-light border border-warning">
            <div className="rounded mb-0.3 bg-light">
                <h1>Nutrition Facts</h1>
                <hr style={{ height: "7px", backgroundColor: "black" }} />

                <div>
                    Amount Per Serving
                    <br />
                    <p className="d-flex justify-content-between h3">
                        Calories <p className="d-inline-block">{calories}</p>
                    </p>
                    <hr />
                </div>

                <p className="d-flex justify-content-end">%Daily Value*</p>

                <div>
                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Total fat</p>
                        <p className="d-inline-block text-right">{totalFat + "%"}</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Saturated fat</p>
                        <p className="d-inline-block text-right">{saturatedFat} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">TotalSugars</p>
                        <p className="d-inline-block text-right">{totalSugars} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Trans fat</p>
                        <p className="d-inline-block text-right">{0 + "%"}</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Cholesterol</p>
                        <p className="d-inline-block text-right">{cholesterol} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Sodium</p>
                        <p className="d-inline-block text-right">{sodium} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Total Carbohydrates</p>
                        <p className="d-inline-block text-right">{totalCarboydrates} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Dietary Fiber</p>
                        <p className="d-inline-block text-right">{dietaryFiber} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Proteins</p>
                        <p className="d-inline-block text-right">{proteins} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Vitamin D</p>
                        <p className="d-inline-block text-right">{VitaminD} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Calcium</p>
                        <p className="d-inline-block text-right">{calcium} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Iron</p>
                        <p className="d-inline-block text-right">{iron} %</p>
                    </div>
                    <hr className="m-0" />

                    <div className="d-flex justify-content-around mb-0">
                        <p className="d-inline-block">Potassium</p>
                        <p className="d-inline-block text-right">{potassium} %</p>
                    </div>
                    <hr className="m-0" />
                </div>

                <p style={{ fontSize: "13px", lineHeight: "2" }}>
                    *Percent Daily Values are based on a 2000 calorie diet
                </p>
            </div>
        </div>
    );
};

export default AnalysisReport;
