import React from 'react'

export default function StepOne() {
    return (
        <div >
            <div>
                <button>Step 1 of 3</button>
                <button>cancel</button>
            </div>
            <h2>Loan Configuration</h2>
            <p>this loan will cover in its entirety your obligatory
institutional fee as provided by your institution, if the upkeep loan is selected 
a monthly stipend of 20,000 will be paid into your selected bank account for a period of 12 months </p>

<h4>Upkeep Loan</h4>
<div>
    <input type="checkbox" />
    <p>I need the upkeep loan</p>
</div>
        
        
        </div>
    )
}
