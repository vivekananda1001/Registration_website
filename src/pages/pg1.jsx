import { Outerbox } from "../components/outerbox"
import talent from "../assets/talent.jpg"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function PersonalDetailsInput({name,setName,dob,setDob,gender,setGender,contact,setContact,email,setEmail,address,setAddress,}){
    return (
        <div className="p-4">
            <div className="ml-4 font-semibold text-[20px]">
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="m-4 rounded-lg w-[50%] font-normal p-2"
                />
            </div>
            <div className="ml-4 font-semibold text-[20px] flex">
                <div>
                    Date of Birth:
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="p-1 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-4"
                    />
                </div>
                <div className="ml-[200px]">
                    Gender:
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-4"
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="ml-4 font-semibold text-[20px] flex">
                <div>
                    Contact No:
                    <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter your Contact"
                        className="m-4 rounded-lg font-normal p-2"
                    />
                </div>
                <div className="ml-[160px]">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        className="m-4 rounded-lg font-normal p-2"
                    />
                </div>
            </div>
            <div className="ml-4 font-semibold text-[20px]">
                Residential Address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your Address"
                    className="m-4 rounded-lg font-normal p-2 w-[80%]"
                />
            </div>
        </div>
    );
}

function GuardianDetailsInput({guardianName,setGuardianName,relationship,setRelationship,guardianContact,setGuardianContact,guardianEmail,setGuardianEmail,}){
    return (
        <div className="p-4">
            <div className="ml-4 font-semibold text-[20px]">
                Parent/Guardian Name:
                <input
                    type="text"
                    value={guardianName}
                    onChange={(e) => setGuardianName(e.target.value)}
                    placeholder="Enter guardian's name"
                    className="m-4 rounded-lg w-[50%] font-normal p-2"
                />
            </div>
            <div className="ml-4 font-semibold text-[20px]">
                Relationship with Participant:
                <input
                    type="text"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    placeholder="Enter relationship"
                    className="m-4 rounded-lg w-[50%] font-normal p-2"
                />
            </div>
            <div className="ml-4 font-semibold text-[20px] flex">
                <div>
                    Contact No:
                    <input
                        type="text"
                        value={guardianContact}
                        onChange={(e) => setGuardianContact(e.target.value)}
                        placeholder="Enter guardian's Contact"
                        className="m-4 rounded-lg font-normal p-2"
                    />
                </div>
                <div className="ml-[160px]">
                    Email:
                    <input
                        type="email"
                        value={guardianEmail}
                        onChange={(e) => setGuardianEmail(e.target.value)}
                        placeholder="Enter guardian's Email"
                        className="m-4 rounded-lg font-normal p-2"
                    />
                </div>
            </div>
        </div>
    );
}

function TalentCategoryInput({category,setCategory,otherTalent,setOtherTalent,description,setDescription,duration,setDuration,requirements,setRequirements}) {

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (e.target.value !== "other") {
            setOtherTalent(""); // Reset otherTalent if the category is not 'other'
        }
    };

    const handleOtherTalentChange = (e) => {
        setOtherTalent(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    const handleRequirementsChange = (e) => {
        setRequirements(e.target.value);
    };

    return (
        <div className="ml-4 font-semibold text-[20px]">
            <label htmlFor="category" className="block mb-2">
                Talent Category:
            </label>
            <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
                <option value="" disabled>Select a Talent Category</option>
                <option value="singing">Singing</option>
                <option value="dancing">Dancing</option>
                <option value="acting">Acting</option>
                <option value="instrumental-music">Instrumental Music</option>
                <option value="stand-up-comedy">Stand-up Comedy</option>
                <option value="painting-art">Painting/Art</option>
                <option value="poetry-storytelling">Poetry/Storytelling</option>
                <option value="magic-tricks">Magic Tricks</option>
                <option value="other">Other</option>
            </select>

            {category === "other" && (
                <div className="mt-4">
                    <label htmlFor="other-talent" className="block mb-2">
                        Please Specify:
                    </label>
                    <input
                        type="text"
                        id="other-talent"
                        value={otherTalent}
                        onChange={handleOtherTalentChange}
                        placeholder="Enter your talent"
                        className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-[80%] font-normal"
                    />
                </div>
            )}

            {/* Brief Description of the Talent */}
            <div className="mt-4">
                <label htmlFor="description" className="block mb-2">
                    Brief Description of the Talent:
                </label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder='e.g., "Classical Kathak Dance performance"'
                    className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                />
            </div>

            <div className="mt-4">
                <label htmlFor="duration" className="block mb-2">
                    Duration of Performance (in minutes):
                </label>
                <input
                    type="number"
                    id="duration"
                    value={duration}
                    onChange={handleDurationChange}
                    placeholder="e.g., 5-10"
                    min="5"
                    max="20"
                    className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                />
            </div>

            <div className="mt-4">
                <label htmlFor="requirements" className="block mb-2">
                    Special Requirements:
                </label>
                <textarea
                    id="requirements"
                    value={requirements}
                    onChange={handleRequirementsChange}
                    placeholder="e.g., microphone, speakers, stage props"
                    rows="3"
                    className="p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                />
            </div>
        </div>
    );
}

function Academicdetails({schoolName,setSchoolName,classYear,setClassYear}) {

    const handleSchoolNameChange = (e) => setSchoolName(e.target.value);
    const handleClassYearChange = (e) => setClassYear(e.target.value);
  
    return (
      <div>
        <div className="mb-4">
          <label htmlFor="school-name" className="block mb-2 font-semibold">
            School/College Name:
          </label>
          <input
            type="text"
            id="school-name"
            value={schoolName}
            onChange={handleSchoolNameChange}
            placeholder="Enter your school or college name"
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
  
        {/* Current Class/Year */}
        <div className="mb-4">
          <label htmlFor="class-year" className="block mb-2 font-semibold">
            Current Class/Year:
          </label>
          <input
            type="text"
            id="class-year"
            value={classYear}
            onChange={handleClassYearChange}
            placeholder="e.g., Class 10th, 2nd Year of College"
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    );
}

function PhotoUploadForm({idProof,setIdProof,photo,setPhoto}){
    const handleIdProofChange = (e) => setIdProof(e.target.files[0]);
    const handlePhotoChange = (e) => setPhoto(e.target.files[0]);
  
    return (
      <div>
        {/* Upload Photo ID Proof */}
        <div className="mb-4">
          <label htmlFor="id-proof" className="block mb-2 font-semibold">
            Upload a Photo ID Proof (Aadhaar Card, Passport, Driving License, etc.):
          </label>
          <input
            type="file"
            id="id-proof"
            accept=".jpg, .jpeg, .png, .pdf"
            onChange={handleIdProofChange}
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {idProof && (
            <div className="mt-2 text-sm text-gray-600">
              Selected File: {idProof.name}
            </div>
          )}
        </div>
  
        {/* Upload Passport-Sized Photograph */}
        <div className="mb-4">
          <label htmlFor="photo" className="block mb-2 font-semibold">
            Upload a Passport-Sized Photograph (for registration ID card):
          </label>
          <input
            type="file"
            id="photo"
            accept=".jpg, .jpeg, .png"
            onChange={handlePhotoChange}
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {photo && (
            <div className="mt-2 text-sm text-gray-600">
              Selected File: {photo.name}
            </div>
          )}
        </div>
      </div>
    );
}

function ConsentForm({termsAccepted,setTermsAccepted,parentalConsent,setParentalConsent,mediaConsent,setMediaConsent}){
    const handleTermsChange = () => setTermsAccepted(!termsAccepted);
    const handleParentalConsentChange = () => setParentalConsent(!parentalConsent);
    const handleMediaConsentChange = () => setMediaConsent(!mediaConsent);
  
    return(
      <div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Terms and Conditions:
          </label>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a
                href="#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>{" "}
              of the talent hunt test, including performance time limits, behavior
              guidelines, and disqualification rules.
            </label>
          </div>
        </div>
  
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Parental/Guardian Consent:
          </label>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="parental-consent"
              checked={parentalConsent}
              onChange={handleParentalConsentChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="parental-consent" className="text-sm">
              I confirm that my parent/guardian has given consent for me to
              participate in the talent hunt test (if I am a minor).
            </label>
          </div>
        </div>
  
        {/* Media Release Consent */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Media Release Consent:
          </label>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="media-consent"
              checked={mediaConsent}
              onChange={handleMediaConsentChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="media-consent" className="text-sm">
              I give permission to the organizers to use my photos/videos for
              promotional purposes related to the talent hunt event.
            </label>
          </div>
        </div>
      </div>
    );
}

function SubmitHandler({category,otherTalent,description,duration,requirements,name,dob,gender,contact,email,address,guardianName,relationship,guardianContact,guardianEmail,schoolName,classYear,idProof,photo,termsAccepted,parentalConsent,mediaConsent,}){
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!termsAccepted || !parentalConsent || !mediaConsent) {
            alert("Please accept all terms and conditions before submitting.");
            return;
        }

        navigate("/summary", {
            state: {
                category,
                otherTalent,
                description,
                duration,
                requirements,
                name,
                dob,
                gender,
                contact,
                email,
                address,
                guardianName,
                relationship,
                guardianContact,
                guardianEmail,
                schoolName,
                classYear,
                idProof,
                photo,
            },
        });
    };
    return (
        <div className="flex justify-center">
            <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
                Submit
            </button>
        </div>
    );
}


export const Page1 = ()=>{
    const [category, setCategory] = useState("");
    const [otherTalent, setOtherTalent] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [requirements, setRequirements] = useState("");

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [guardianName, setGuardianName] = useState("");
    const [relationship, setRelationship] = useState("");
    const [guardianContact, setGuardianContact] = useState("");
    const [guardianEmail, setGuardianEmail] = useState("");

    const [schoolName, setSchoolName] = useState("");
    const [classYear, setClassYear] = useState("");

    const [idProof, setIdProof] = useState(null);
    const [photo, setPhoto] = useState(null);

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [parentalConsent, setParentalConsent] = useState(false);
    const [mediaConsent, setMediaConsent] = useState(false);

    return(
        <div className = "bg-[#aab6bd] p-1 text-[#394d52]">
            <Outerbox>
                <div className="flex justify-center text-[60px] font-bold">
                    <img src={talent} className="h-[50px] rounded-full m-4"/>
                    Indian Talent Association
                </div>
            </Outerbox>
            <div className = "flex justify-center text-[28px] font-bold">
                National Talent Hunt Registration form
            </div>
            <div className="border-solid border-2 p-2 rounded-lg m-4">
                <div className="text-[28px] m-4 font-semibold">1. Personal Details </div>
                <Outerbox>
                    <PersonalDetailsInput
                        name={name}
                        setName={setName}
                        dob={dob}
                        setDob={setDob}
                        gender={gender}
                        setGender={setGender}
                        contact={contact}
                        setContact={setContact}
                        email={email}
                        setEmail={setEmail}
                        address={address}
                        setAddress={setAddress}
                    />
                </Outerbox>
                <div className="text-[28px] m-4 font-semibold">2. Guardian Details </div>
                <Outerbox>
                    <GuardianDetailsInput
                        guardianName={guardianName}
                        setGuardianName={setGuardianName}
                        relationship={relationship}
                        setRelationship={setRelationship}
                        guardianContact={guardianContact}
                        setGuardianContact={setGuardianContact}
                        guardianEmail={guardianEmail}
                        setGuardianEmail={setGuardianEmail}
                    />
                </Outerbox>
                <div className="text-[28px] m-4 font-semibold">3. Talent Details </div>
                <Outerbox>
                    <TalentCategoryInput
                        category={category}
                        setCategory={setCategory}
                        otherTalent={otherTalent}
                        setOtherTalent={setOtherTalent}
                        description={description}
                        setDescription={setDescription}
                        duration={duration}
                        setDuration={setDuration}
                        requirements={requirements}
                        setRequirements={setRequirements}
                    />
                </Outerbox>
                <div className="text-[28px] m-4 font-semibold">4. Academic details </div>
                <Outerbox>
                    <div className="m-4 text-[20px]">
                        <Academicdetails schoolName={schoolName} setSchoolName={setSchoolName} classYear={classYear} setClassYear={setClassYear}/>
                    </div>
                </Outerbox>
                <div className="text-[28px] m-4 font-semibold">5. Identification details </div>
                <Outerbox>
                    <div className="m-4 text-[20px]">
                        <PhotoUploadForm 
                            idProof={idProof} 
                            setIdProof={setIdProof} 
                            photo={photo} 
                            setPhoto={setPhoto}
                        />
                        <ConsentForm 
                            termsAccepted={termsAccepted} 
                            setTermsAccepted={setTermsAccepted} 
                            parentalConsent={parentalConsent} 
                            setParentalConsent={setParentalConsent} 
                            mediaConsent={mediaConsent} 
                            setMediaConsent={setMediaConsent}
                        />
                    </div>
                </Outerbox>
                <SubmitHandler
                    category = {category}
                    otherTalent={otherTalent}
                    description={description}
                    duration={duration}
                    requirements={requirements}
                    name={name}
                    dob={dob}
                    gender={gender}
                    contact={contact}
                    email={email}
                    address={address}
                    guardianName={guardianName}
                    relationship={relationship}
                    guardianContact={guardianContact}
                    guardianEmail={guardianEmail}
                    schoolName={schoolName}
                    classYear={classYear}
                    idProof={idProof}
                    photo={photo}
                    termsAccepted={termsAccepted}
                    parentalConsent={parentalConsent}
                    mediaConsent={mediaConsent}
                />
            </div>
        </div>
    )
}