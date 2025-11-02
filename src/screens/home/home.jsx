import Button from "../../components/button/button";
import { EventCard, ProgramCard } from "../../components/cards/cards";
import Header from "../../components/header/header";
import { events, missionImage, programs } from "./constants";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="h-full w-full absolute top-[0]">
        <HeroSection />
        <OurMission />
        <Programs />
        <Bible />
        <UpcomingEvents />
      </div>
    </div>
  );
}

const OurMission = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="w-full flex flex-col justify-center p-[80px]">
        <div className="text-[15px] text-center">OUR MISSION</div>
        <div className="w-full flex justify-center">
          <div className="w-100 text-center  text-[20px] leading-relaxed pt-[15px] pb-[30px]">
            At our Church, we are united by our shared faith in jesus christ and
            our commitment to living out the Gospel message in our daily lives.
          </div>
        </div>
        <div className="w-full flex justify-center pb-[25px] ">
          <Button
            className="border border-black  "
            buttonName="LEARN MORE NOW"
            color="bg-white"
          />
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 p-4">
          {missionImage.map((img) => (
            <img className=" w-full h-100 object-cover" src={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <video
        className="h-full w-full object-cover "
        src="/assets/images/landingVedio.mp4 "
        type="video/mp4"
        autoPlay
        loop
        muted
        controls={false}
      />
      <div className="w-full flex justify-center absolute top-[40%]">
        <div>
          <div className="pl-[30px]">
            <div className="text-[70px]">Transform Life </div>
            <div className="text-[70px]">Restore Hope</div>
          </div>
          <div className="text-[18px] text-white p-[20px]">
            Our Coummunity Extends Beyond Physical Boundries
          </div>
          <div className="text-[20px] w-full flex justify-evenly">
            <Button buttonName="JOIN NOW" color="bg-white" />
            <Button
              className="border border-white border-solid"
              buttonName="MAKE A DONATION"
              fontColor="text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Programs = () => {
  return (
    <div className="w-full h-full text-center">
      <div className="text-4xl">Programs And Initiative</div>
      <div className="w-full p-5  leading-loose max-w-xl mx-auto  ">
        These Donation campaigns can help and support and allowing people to
        contribute to the church's mission and work
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-4 p-4">
        {programs.map((program) => (
          <ProgramCard data={program} />
        ))}
      </div>
    </div>
  );
};

const Bible = () => {
  return (
    <div className="relative w-full h-full">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-4xl"
        src="/public/assets/images/bible background.jpg"
      />
      <div className="relative z-0 text-white  text-center p-25 font-bold ">
        <div className=" mx-auto max-w-2xl text-4xl leading-relaxed ">
          “Love is patient, love is kind. ddd It does not envy, it does not
          boast, it is not proud. It does not dishonor others, it is not
          self-seeking, it is not easily angered, it keeps no record of wrongs.
          Love does not delight in evil but rejoices with the truth. It always
          protects, always trusts, always hopes, always perseveres.”
        </div>
        <div className=" text-[25px] pt-3">- The Holy Bible</div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="p-[40px]">
      <div className="text-center p-[80px] ">
        <div className="text-sm">COMMING SOON</div>
        <div className="text-4xl font-bold p-[40px]">Upcoming Events</div>
        <div className="flex justify-between">
          {events.map((event) => (
            <EventCard data={event} />
          ))}
        </div>
      </div>
    </div>
  );
};
