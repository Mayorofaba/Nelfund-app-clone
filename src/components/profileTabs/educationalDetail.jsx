import React from "react";
import userData from "../userdata/userdata.json";

function EducationalDetail() {
  const Data = userData;

  return (
    <div>
      <div className="flex m-10 gap-10  ">
        <div className="flex flex-col w-1/2 ">
          <p className="font-bold" id="my-label">
            Higher Institution
          </p>
          <div className="border p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.higherInstitution}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Matric Number
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.matricNumber}
          </div>
        </div>
      </div>

      {/* second line */}

      <div className="flex m-10 gap-10 ">
        <div className="flex flex-col w-1/2  ">
          <p className="font-bold" id="my-label">
            Course of Study
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.courseOfStudy}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Faculty
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.faculty}
          </div>
        </div>
      </div>

      {/* third line */}

      <div className="flex m-10 gap-10 ">
        <div className="flex flex-col w-1/2  ">
          <p className="font-bold" id="my-label">
            Department
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.department}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Program Type
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.programType}
          </div>
        </div>
      </div>

      {/* fourth line  */}

      {/* second line */}

      <div className="flex m-10 gap-10 ">
        <div className="flex flex-col w-1/2  ">
          <p className="font-bold" id="my-label">
            Level
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.level}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Academic Session
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.educationalDetails.academicSession}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalDetail;
