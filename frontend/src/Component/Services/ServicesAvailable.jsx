import React, { useContext, useEffect, useRef, useState } from "react";
import RevenueDepartment from "./Services/RevenueDepartment";
import RuralAndPanchayatRajDepartment from "./Services/RuralAndPanchayatRajDepartment";
import LabourDepartment from "./Services/LabourDepartment";
import WaterResourcesDepartment from "./Services/WaterResourcesDepartment";
import IndustriesDepartment from "./Services/IndustriesDepartment";
import ForestDepartment from "./Services/ForestDepartment";
import DepartmentofRegistrationAndStamps from "./Services/DepartmentofRegistrationAndStamps";
import DepartmentofCoOperationMarketingAndTextiles from "./Services/DepartmentofCoOperationMarketingAndTextiles";
import LawAndJudiciaryDepartment from "./Services/LawAndJudiciaryDepartment";
import HomeDepartment from "./Services/HomeDepartment";
import TransportDepartment from "./Services/TransportDepartment";
import HousingDepartment_MAHADA from "./Services/HousingDepartment_MAHADA";
import HousingDepartment_MBRandRB from "./Services/HousingDepartment_MBRandRB";
import HousingDepartment_SRA from "./Services/HousingDepartment_SRA";
import MaharashtraJeevanPradhikaran from "./Services/MaharashtraJeevanPradhikaran";
import UrbanDevelopment from "./Services/UrbanDevelopment";
import MaharashtraPollutionControlBoard from "./Services/MaharashtraPollutionControlBoard";
import MaharashtraIndustrialDevelopementCorporation from "./Services/MaharashtraIndustrialDevelopmentCorporation";
import SocialJusticeAndSpecialAssistanceDepartment from "./Services/SocialJusticeAndSpecialAssistanceDepartment";
import MedicalEducationandDrugDepartment_AYUSH from "./Services/MedicalEducationandDrugDepartment_AYUSH";
import MedicalEducationAndDrugDepartment from "./Services/MedicalEducationAndDrugDepartment_MIMH";
import HigherEducationAndTechnicalDepartment from "./Services/HigherEducationAndTechnicalDepartment";
import HomeDepartment_MaharashtraMaritimeBoard from "./Services/HomeDepartment_MaharashtraMaritimeBoard";
import TourismandCulturalAffairs_GazetteersDepartment from "./Services/TourismandCulturalAffairs_GazetteersDepartment";
import WomenAndChildDevelopmentdepartment from "./Services/WomenAndChildDevelopmentdepartment";
import PublicHealthDepartment from "./Services/PublicHealthDepartment";
import TribalDevelopmentDepartment from "./Services/TribalDevelopmentDepartment";
import DepartmentofAnimalHusbandryAndDairying from "./Services/DepartmentofAnimalHusbandryAndDairying";
import DepartmentofFisheries from "./Services/DepartmentofFisheries";
import SchoolEducationandSportsDepartment from "./Services/SchoolEducationandSportsDepartment";
import Agriculture from "./Services/Agriculture";
import FinanceDepartment from "./Services/FinanceDepartment";
import FoodAndPublicDistributionSystem_PDS from "./Services/FoodAndPublicDistributionSystem_PDS";
import TourismandCulturalAffairsDepartment from "./Services/TourismandCulturalAffairsDepartment_DirectorateofCultural";
import TourismandCulturalAffairsDepartment_MTDC from "./Services/TourismandCulturalAffairsDepartment_MTDC";
import TourismandCulturalAffairsDepartment_PLDeshpande_MKA from "./Services/TourismAndCulturalAffairsDepartment_PLDeshpande_MKA";
import TourismAndCulturalAffairsDepartment_SPSB from "./Services/TourismAndCulturalAffairsDepartment_SPSB";
import LandRecordDepartment from "./Services/LandRecordDepartment";
import EnergyDepartment from "./Services/EnergyDepartment";
import MinorityDevelopmentDepartment from "./Services/MinorityDevelopmentDepartment";
import PublicWorksDepartment from "./Services/PublicWorksDepartment";
import DivyangKalyanDepartment from "./Services/DivyangKalyanDepartment";
import SoilAndWaterConservation from "./Services/SoilAndWaterConservation";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import PopModel from "../Model/PopModel";
import { PopModelContext } from "../../Store/PopModelContext";

const ServicesAvailable = () => {
  // const [toggle, setToggle] = useState(true);
  const[isScrolling,setIsScrolling]=useState(false);

// handle toggle Functionality
  // const handelToggle = () => {
  //   setToggle((prevState) => !prevState);
  // };


  // Auto scroll Functionality
const scrollbarDivRef = useRef(null);
useEffect(()=>{
  if (isScrolling) return;
  const scrollableDiv=scrollbarDivRef.current;
  let scrollStep=2;  //speed of scrolling in pixel
  let scrollDirection=1; // 1 for down and -1 for up

// if page ends change the direction of scrolling
const autoScroll=()=>{
  if (scrollableDiv.scrollTop+ scrollableDiv.clientHeight>=scrollableDiv.scrollHeight) {
    scrollDirection=-1;
    
  }
  else if(scrollableDiv.scrollTop<=0){
    scrollDirection=1;
  }
  scrollableDiv.scrollTop+=scrollStep*scrollDirection;
};
const intervalid =setInterval(autoScroll,50);
// to clear the interval and Rerun the setinterval
return()=> clearInterval(intervalid)
},[isScrolling]);

const toggleScrolling=()=>{
  setIsScrolling(!isScrolling);
}

const{popModel}=useContext(PopModelContext);

  return (
    <>
      <div className="bg-blue-300 md:w-1/2 sm:w-full lg:w-1/2 pb-9">
        <h1 className="rounded-t-md text-white  bg-black flex justify-center">
          Services Available Online
        </h1>
{/*overflow-y-auto scrollbar scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-500 hover:scrollbar-thumb-white*/}
        <div className="  h-96  p-2 ">
          <div className="text-white text-xs font-bold justify-between flex">
            <span>Click Below Services for details</span>
            <span  
              // onClick={handelToggle}
              className="cursor-pointer  gap-2 flex hover:bg-blue-950 p-1 rounded-md" >
              <div onClick={toggleScrolling} className="text-black hover:text-white text-xl">
        
              {/* {isScrolling?<FaToggleOff/>:<FaToggleOn/>} */}
              {isScrolling?<FaToggleOn/>:<FaToggleOff/>}     
              </div>
              Stop Auto Scrolling
            </span>
          </div>
          <div>
            <input
              className=" w-full my-3 text-black p-2 rounded-md border-white"
              type="text"
            />
          </div>


          <div ref={scrollbarDivRef} className=" p-1 overflow-y-auto h-72 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black hover:scrollbar-thumb-white ">
            <RevenueDepartment  />
            <RuralAndPanchayatRajDepartment />
            <LabourDepartment />
            <WaterResourcesDepartment />
            <IndustriesDepartment />
            <ForestDepartment />
            <DepartmentofRegistrationAndStamps />
            <DepartmentofCoOperationMarketingAndTextiles />
            <LawAndJudiciaryDepartment />
            <HomeDepartment />
            <TransportDepartment />
            <HousingDepartment_MAHADA />
            <HousingDepartment_MBRandRB />
            <HousingDepartment_SRA />
            <MaharashtraJeevanPradhikaran />
            <UrbanDevelopment />
            <MaharashtraPollutionControlBoard />
            <MaharashtraIndustrialDevelopementCorporation />
            <SocialJusticeAndSpecialAssistanceDepartment />
            <MedicalEducationandDrugDepartment_AYUSH />
            <MedicalEducationAndDrugDepartment />
            <HigherEducationAndTechnicalDepartment />
            <HomeDepartment_MaharashtraMaritimeBoard />
            <TourismandCulturalAffairs_GazetteersDepartment />
            <WomenAndChildDevelopmentdepartment />
            <PublicHealthDepartment />
            <TribalDevelopmentDepartment />
            <DepartmentofAnimalHusbandryAndDairying />
            <DepartmentofFisheries />
            <SchoolEducationandSportsDepartment />
            <Agriculture />
            <FinanceDepartment />
            <FoodAndPublicDistributionSystem_PDS />
            <TourismandCulturalAffairsDepartment />
            <TourismandCulturalAffairsDepartment_MTDC />
            <TourismandCulturalAffairsDepartment_PLDeshpande_MKA />
            <TourismAndCulturalAffairsDepartment_SPSB />
            <LandRecordDepartment />
            <EnergyDepartment />
            <MinorityDevelopmentDepartment />
            <PublicWorksDepartment />
            <DivyangKalyanDepartment />
            <SoilAndWaterConservation />
          </div>
          {popModel && <PopModel/>}
          
        </div>
      </div>
    </>
  );
};

export default ServicesAvailable;
