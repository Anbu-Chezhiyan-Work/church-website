import { ArrowIcon, CalanderIcon, LocationIcon } from "../../assets/assets";

export const EventCard = (props) => {
  console.log(props.data);
  return (
    <div className="border p-[24px] rounded-2xl w-[350px]">
      <div>
        <div className=" flex justify-between ">
          <div>{props.data.title}</div>
          <div className="h-[40px] w-[40px]">
            <ArrowIcon />
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-[16px] w-[16px]">
            <LocationIcon />
          </div>
          <div className="pl-[16px]">{props.data.location}</div>
        </div>
        <div className="flex items-center pt-[12px]">
          <div className="h-[16px] w-[16px] ">
            <CalanderIcon />
          </div>
          <div className="pl-[16px]">{props.data.date}</div>
        </div>
      </div>

      {props.data.schedule.map((data) => (
        <div className="flex pt-[16px] items-center">
          <div className="w-[80px] pr-[16px]">{data.time}</div>

          <img className="h-[40px] w-[40px] object-cover " src={data.img} />

          <div className="text-left pl-[16px]">{data.desc}</div>
        </div>
      ))}
    </div>
  );
};
export const ProgramCard = (props) => {
  return (
    <div>
      <img
        src={props.data.img}
        className=" h-48 w-48 object-cover rounded-lg mx-auto"
      />
      <div className="mt-4 px-[10px] inline-block border  rounded-md border-gray-400">
        {props.data.title}
      </div>
      <div className="mt-2 text-lg">{props.data.subtitle}</div>
      <div className="mt-2 h-[182px] leading-relaxed  text-sm text-left px-5">
        {props.data.description}
      </div>
      <a className="pt-[15px]">view more →</a>
    </div>
  );
};
