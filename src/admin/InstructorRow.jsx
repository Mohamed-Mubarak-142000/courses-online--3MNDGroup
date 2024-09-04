import React from "react";
import TextInput from "../common/TextInput";

const InstructorRow = ({
  instructor,
  setInstructor,
  setNumberOfStudents,
  numberOfStudents,
  setTopics,
  topics,
}) => {
  return (
    <>
      <div className="flex items-center gap-5 flex-wrap w-full justify-between">
        <div className="w-[48%]">
          <TextInput
            label="Instructor Name"
            onChange={(e) =>
              setInstructor({ ...instructor, name: e.target.value })
            }
            type="text"
            textColor="black"
            value={instructor.name}
          />
        </div>
        <div className="w-[48%]">
          <TextInput
            label="Instructor Email"
            onChange={(e) =>
              setInstructor({ ...instructor, email: e.target.value })
            }
            type="email"
            textColor="black"
            value={instructor.email}
          />
        </div>
      </div>

      <div className="flex items-center gap-5 flex-wrap w-full justify-between">
        <div className="w-[48%]">
          <TextInput
            label="Instructor Bio"
            onChange={(e) =>
              setInstructor({ ...instructor, bio: e.target.value })
            }
            type="text"
            textColor="black"
            value={instructor.bio}
          />
        </div>
        <div className="w-[48%]">
          <TextInput
            label="Number of Students"
            onChange={(e) => setNumberOfStudents(e.target.value)}
            type="number"
            textColor="black"
            value={numberOfStudents}
          />
        </div>
      </div>
      {/* Topics and Videos */}
      <div className="flex items-center gap-5 flex-wrap w-full justify-between">
        <div className="w-[48%]">
          <TextInput
            label="Topics (comma separated)"
            onChange={(e) => setTopics(e.target.value.split(","))}
            type="text"
            textColor="black"
            value={topics.join(", ")}
          />
        </div>
      </div>
    </>
  );
};

export default InstructorRow;
